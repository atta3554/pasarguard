import { r as reactExports, b as React, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CvI_xa9s.js";
import { B as Button } from "./button-BOH66nN-.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { T as Textarea } from "./textarea-DCwXPG8n.js";
import { a as useDirDetection, ab as useCreateNode, a9 as useModifyNode, a7 as useGetCoresSimple, ac as useGetNode, ad as DataLimitResetStrategy, ae as NodeConnectionType, c as cn, L as LoaderCircle, af as getNode, t as toast, q as queryClient } from "./index-C_i3x-Gf.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { f as formatBytes, g as gbToBytes } from "./formatByte-CB667FGk.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { S as Settings } from "./settings-ByQKCi6u.js";
import { v as v4 } from "./v4-CDEC0ny7.js";
import { o as objectType, n as numberType, d as unionType, g as nullType, h as undefinedType, c as nativeEnumType, s as stringType, e as enumType } from "./types-CANcSf0A.js";
function NodeModal({ isDialogOpen, onOpenChange, form, editingNode, editingNodeId, initialNodeData }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const addNodeMutation = useCreateNode();
  const modifyNodeMutation = useModifyNode();
  const handleError = useDynamicErrorHandler();
  const { data: cores, isLoading: isLoadingCores } = useGetCoresSimple({ all: true }, {
    query: {
      enabled: isDialogOpen
    }
  });
  const [statusChecking, setStatusChecking] = reactExports.useState(false);
  const [errorDetails, setErrorDetails] = reactExports.useState(null);
  const [autoCheck, setAutoCheck] = reactExports.useState(false);
  const [showErrorDetails, setShowErrorDetails] = reactExports.useState(false);
  const [debouncedValues, setDebouncedValues] = reactExports.useState(null);
  const [isFetchingNodeData, setIsFetchingNodeData] = reactExports.useState(false);
  const dataLimitInputRef = React.useRef("");
  const { data: node, refetch: refetchNode } = useGetNode(
    editingNodeId || 0,
    editingNode && editingNodeId ? {
      query: {
        enabled: editingNode && !!editingNodeId && isDialogOpen,
        initialData: initialNodeData,
        refetchInterval: 5e3,
        refetchOnMount: false,
        staleTime: 0,
        gcTime: 0
      }
    } : { query: { enabled: false } }
  );
  const currentNode = node || initialNodeData;
  const lastSyncedNodeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isDialogOpen) {
      setErrorDetails(null);
      setAutoCheck(true);
      dataLimitInputRef.current = "";
      setIsFetchingNodeData(false);
      lastSyncedNodeRef.current = null;
    }
  }, [isDialogOpen]);
  reactExports.useEffect(() => {
    if (!isDialogOpen || !editingNode || !editingNodeId || !node) return;
    if (form.formState.isDirty) return;
    const lastSynced = lastSyncedNodeRef.current;
    if (lastSynced && lastSynced.id === node.id && lastSynced.status === node.status && lastSynced.message === node.message && lastSynced.xray_version === node.xray_version && lastSynced.node_version === node.node_version && lastSynced.uplink === node.uplink && lastSynced.downlink === node.downlink && lastSynced.name === node.name && lastSynced.address === node.address && lastSynced.port === node.port) {
      return;
    }
    const dataLimitBytes = node.data_limit ?? null;
    const dataLimitGB = dataLimitBytes !== null && dataLimitBytes !== void 0 && dataLimitBytes > 0 ? dataLimitBytes / (1024 * 1024 * 1024) : 0;
    if (dataLimitGB > 0) {
      const formatted = parseFloat(dataLimitGB.toFixed(9));
      dataLimitInputRef.current = String(formatted);
    } else {
      dataLimitInputRef.current = "";
    }
    form.reset(
      {
        name: node.name,
        address: node.address,
        port: node.port,
        api_port: node.api_port ?? null,
        usage_coefficient: node.usage_coefficient,
        connection_type: node.connection_type,
        server_ca: node.server_ca,
        keep_alive: node.keep_alive,
        keep_alive_unit: "seconds",
        api_key: node.api_key || "",
        core_config_id: node.core_config_id ?? cores?.cores?.[0]?.id,
        data_limit: dataLimitGB,
        data_limit_reset_strategy: node.data_limit_reset_strategy ?? DataLimitResetStrategy.no_reset,
        reset_time: node.reset_time ?? null,
        default_timeout: node.default_timeout ?? 10,
        internal_timeout: node.internal_timeout ?? 15
      },
      { keepDirty: false, keepValues: false }
    );
    lastSyncedNodeRef.current = node;
  }, [node, isDialogOpen, editingNode, editingNodeId, form, cores]);
  reactExports.useEffect(() => {
    const values = form.getValues();
    const timer = setTimeout(() => {
      setDebouncedValues(values);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [form.watch("name"), form.watch("address"), form.watch("port"), form.watch("api_key")]);
  reactExports.useEffect(() => {
    if (!isDialogOpen || !autoCheck || editingNode || !debouncedValues) return;
    const { name, address, port, api_key } = debouncedValues;
    if (name && address && port && api_key) {
      checkNodeStatus();
    }
  }, [debouncedValues]);
  reactExports.useEffect(() => {
    if (editingNode && isDialogOpen && editingNodeId) {
      checkNodeStatus();
    }
  }, [editingNode, isDialogOpen, editingNodeId]);
  reactExports.useEffect(() => {
    if (editingNode && editingNodeId) {
      if (initialNodeData) {
        const nodeData = initialNodeData;
        const dataLimitBytes = nodeData.data_limit ?? null;
        const dataLimitGB = dataLimitBytes !== null && dataLimitBytes !== void 0 && dataLimitBytes > 0 ? dataLimitBytes / (1024 * 1024 * 1024) : 0;
        if (dataLimitGB > 0) {
          const formatted = parseFloat(dataLimitGB.toFixed(9));
          dataLimitInputRef.current = String(formatted);
        } else {
          dataLimitInputRef.current = "";
        }
        form.reset({
          name: nodeData.name,
          address: nodeData.address,
          port: nodeData.port,
          api_port: nodeData.api_port ?? null,
          usage_coefficient: nodeData.usage_coefficient,
          connection_type: nodeData.connection_type,
          server_ca: nodeData.server_ca,
          keep_alive: nodeData.keep_alive,
          keep_alive_unit: "seconds",
          api_key: nodeData.api_key || "",
          core_config_id: nodeData.core_config_id ?? cores?.cores?.[0]?.id,
          data_limit: dataLimitGB,
          data_limit_reset_strategy: nodeData.data_limit_reset_strategy ?? DataLimitResetStrategy.no_reset,
          reset_time: nodeData.reset_time ?? null,
          default_timeout: nodeData.default_timeout ?? 10,
          internal_timeout: nodeData.internal_timeout ?? 15
        });
        lastSyncedNodeRef.current = nodeData;
        setIsFetchingNodeData(false);
      } else {
        const fetchNodeData = async () => {
          setIsFetchingNodeData(true);
          try {
            const nodeData = await getNode(editingNodeId);
            const dataLimitBytes = nodeData.data_limit ?? null;
            const dataLimitGB = dataLimitBytes !== null && dataLimitBytes !== void 0 && dataLimitBytes > 0 ? dataLimitBytes / (1024 * 1024 * 1024) : 0;
            if (dataLimitGB > 0) {
              const formatted = parseFloat(dataLimitGB.toFixed(9));
              dataLimitInputRef.current = String(formatted);
            } else {
              dataLimitInputRef.current = "";
            }
            form.reset({
              name: nodeData.name,
              address: nodeData.address,
              port: nodeData.port,
              api_port: nodeData.api_port ?? null,
              usage_coefficient: nodeData.usage_coefficient,
              connection_type: nodeData.connection_type,
              server_ca: nodeData.server_ca,
              keep_alive: nodeData.keep_alive,
              keep_alive_unit: "seconds",
              api_key: nodeData.api_key || "",
              core_config_id: nodeData.core_config_id ?? cores?.cores?.[0]?.id,
              data_limit: dataLimitGB,
              data_limit_reset_strategy: nodeData.data_limit_reset_strategy ?? DataLimitResetStrategy.no_reset,
              reset_time: nodeData.reset_time ?? null,
              default_timeout: nodeData.default_timeout ?? 10,
              internal_timeout: nodeData.internal_timeout ?? 15
            });
            lastSyncedNodeRef.current = nodeData;
          } catch (error) {
            console.error("Error fetching node data:", error);
            toast.error(t("nodes.fetchFailed"));
          } finally {
            setIsFetchingNodeData(false);
          }
        };
        fetchNodeData();
      }
    } else {
      form.reset({
        name: "",
        address: "",
        port: 62050,
        api_port: 62051,
        usage_coefficient: 1,
        connection_type: NodeConnectionType.grpc,
        server_ca: "",
        keep_alive: 60,
        keep_alive_unit: "seconds",
        api_key: "",
        core_config_id: cores?.cores?.[0]?.id,
        data_limit: 0,
        data_limit_reset_strategy: DataLimitResetStrategy.no_reset,
        reset_time: -1,
        default_timeout: 10,
        internal_timeout: 15
      });
    }
  }, [editingNode, editingNodeId, isDialogOpen, cores, initialNodeData, form]);
  reactExports.useEffect(() => {
    if (isDialogOpen && cores?.cores?.[0]?.id) {
      const currentValue = form.getValues("core_config_id");
      if (!currentValue || currentValue < 1) {
        form.setValue("core_config_id", cores.cores[0].id, { shouldValidate: true });
      }
    }
  }, [isDialogOpen, cores, form]);
  reactExports.useEffect(() => {
    if (isDialogOpen) {
      const currentValue = form.getValues("data_limit_reset_strategy");
      if (currentValue === void 0 || currentValue === null) {
        form.setValue("data_limit_reset_strategy", DataLimitResetStrategy.no_reset, { shouldValidate: true });
      }
    }
  }, [isDialogOpen, form]);
  const checkNodeStatus = async () => {
    const values = form.getValues();
    if (!values.name || !values.address || !values.port) {
      return;
    }
    setStatusChecking(true);
    setErrorDetails(null);
    try {
      if (editingNode && editingNodeId) {
        await refetchNode();
      } else {
        setErrorDetails(t("nodeModal.statusMessages.checkUnavailableForNew"));
      }
    } catch (error) {
      console.error("Node status check failed:", error);
      setErrorDetails(error?.message || "Failed to connect to node. Please check your connection settings.");
    } finally {
      setStatusChecking(false);
    }
  };
  reactExports.useEffect(() => {
    if (currentNode?.status === "error") {
      setErrorDetails(currentNode.message || "Node has an error");
    } else if (currentNode?.status) {
      setErrorDetails(null);
    }
  }, [currentNode?.status, currentNode?.message]);
  const onSubmit = async (values) => {
    try {
      const keepAliveUnit = values.keep_alive_unit ?? "seconds";
      const keepAliveInSeconds = keepAliveUnit === "minutes" ? values.keep_alive * 60 : keepAliveUnit === "hours" ? values.keep_alive * 3600 : values.keep_alive;
      const baseData = {
        ...values,
        keep_alive: keepAliveInSeconds,
        keep_alive_unit: void 0,
        data_limit: gbToBytes(values.data_limit),
        reset_time: values.reset_time !== null && values.reset_time !== void 0 ? values.reset_time : -1,
        api_port: values.api_port ?? void 0
      };
      let nodeId;
      if (editingNode && editingNodeId) {
        const modifyData = {
          ...baseData,
          data_limit_reset_strategy: values.data_limit_reset_strategy !== void 0 ? values.data_limit_reset_strategy === null ? DataLimitResetStrategy.no_reset : values.data_limit_reset_strategy : void 0
        };
        await modifyNodeMutation.mutateAsync({
          nodeId: editingNodeId,
          data: modifyData
        });
        nodeId = editingNodeId;
        toast.success(
          t("nodes.editSuccess", {
            name: values.name,
            defaultValue: "Node «{name}» has been updated successfully"
          })
        );
      } else {
        const createData = {
          ...baseData,
          data_limit_reset_strategy: values.data_limit_reset_strategy ?? DataLimitResetStrategy.no_reset
        };
        const result = await addNodeMutation.mutateAsync({
          data: createData
        });
        nodeId = result?.id;
        toast.success(
          t("nodes.createSuccess", {
            name: values.name,
            defaultValue: "Node «{name}» has been created successfully"
          })
        );
      }
      if (nodeId && editingNode) {
        queryClient.invalidateQueries({ queryKey: [`/api/node/${nodeId}`] });
        lastSyncedNodeRef.current = null;
      }
      queryClient.invalidateQueries({ queryKey: ["/api/nodes"] });
      queryClient.invalidateQueries({ queryKey: ["/api/nodes/simple"] });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      const fields = ["name", "address", "port", "core_config_id", "api_key", "keep_alive_unit", "keep_alive", "server_ca", "connection_type", ""];
      handleError({ error, fields, form, contextKey: "nodes" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full max-w-full focus:outline-none sm:max-w-[90vw] lg:h-auto lg:max-w-[1000px]", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn("text-start text-base font-semibold sm:text-lg", dir === "rtl" && "sm:text-right"), children: editingNode ? t("editNode.title") : t("nodeModal.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-start text-xs text-muted-foreground", dir === "rtl" && "sm:text-right"), children: editingNode ? t("nodes.prompt") : t("nodeModal.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-2 w-2 rounded-full ${currentNode?.status === "connecting" || statusChecking && !currentNode?.status ? "bg-yellow-500 dark:bg-yellow-400" : currentNode?.status === "connected" ? "bg-green-500 dark:bg-green-400" : currentNode?.status === "error" ? "bg-red-500 dark:bg-red-400" : "bg-gray-500 dark:bg-gray-400"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: currentNode?.status === "connecting" || statusChecking && !currentNode?.status ? t("nodeModal.status.connecting") : currentNode?.status === "connected" ? t("nodeModal.status.connected") : currentNode?.status === "error" ? t("nodeModal.status.error") : t("nodeModal.status.disabled") }),
          currentNode?.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowErrorDetails(!showErrorDetails), className: "h-6 px-2 text-xs text-muted-foreground hover:text-foreground", children: showErrorDetails ? t("nodeModal.hideDetails") : t("nodeModal.showDetails") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: checkNodeStatus, disabled: statusChecking || !form.formState.isValid, className: "flex-shrink-0 px-2 text-xs", children: statusChecking ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t("nodeModal.statusChecking") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: t("nodeModal.statusCheck") })
        ] }) })
      ] }),
      showErrorDetails && currentNode?.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dir: "ltr",
          className: "max-h-32 overflow-y-auto whitespace-pre-wrap break-words rounded bg-red-50 p-3 text-xs text-red-500 dark:bg-red-900/20 dark:text-red-400",
          style: { whiteSpace: "pre-line" },
          children: errorDetails || currentNode?.message
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "-mr-2 overflow-y-auto px-1 pr-2 sm:-mr-4 sm:px-2 sm:pr-4",
            showErrorDetails && currentNode?.status === "error" ? "max-h-[55dvh] sm:max-h-[55dvh]" : "max-h-[65dvh] sm:max-h-[65dvh]",
            isFetchingNodeData && "pointer-events-none blur-sm"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-start gap-4 lg:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "name",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.name") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { isError: !!form.formState.errors.name, placeholder: t("nodeModal.namePlaceholder"), ...field }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "address",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.address") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { isError: !!form.formState.errors.address, placeholder: t("nodeModal.addressPlaceholder"), ...field }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "port",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.port") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          isError: !!form.formState.errors.port,
                          type: "number",
                          placeholder: t("nodeModal.portPlaceholder"),
                          ...field,
                          onChange: (e) => field.onChange(parseInt(e.target.value))
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "core_config_id",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.coreConfig") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        onValueChange: (value) => field.onChange(parseInt(value)),
                        value: field.value ? field.value.toString() : t("nodeModal.selectCoreConfig"),
                        disabled: isLoadingCores,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: isLoadingCores ? t("loading", { defaultValue: "Loading..." }) : t("nodeModal.selectCoreConfig") }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: isLoadingCores ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__loading_cores__", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
                            t("loading", { defaultValue: "Loading..." })
                          ] }) }) : cores?.cores?.map((core) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: core.id.toString(), children: core.name }, core.id)) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "api_key",
                  render: ({ field }) => {
                    const generateUUID = () => {
                      field.onChange(v4());
                    };
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "min-h-[100px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.apiKey") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            isError: !!form.formState.errors.api_key,
                            type: "text",
                            placeholder: t("nodeModal.apiKeyPlaceholder"),
                            autoComplete: "off",
                            ...field,
                            onChange: (e) => field.onChange(e.target.value)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center gap-0", dir === "rtl" && "flex-row-reverse"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: generateUUID, className: "h-10 rounded-l-none px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }) }) })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "!mt-0 mb-4 w-full pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "advanced-settings", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("settings.notifications.advanced.title") })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "usage_coefficient",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.usageRatio") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              isError: !!form.formState.errors.usage_coefficient,
                              type: "number",
                              step: "0.1",
                              placeholder: t("nodeModal.usageRatioPlaceholder"),
                              ...field,
                              onChange: (e) => field.onChange(parseFloat(e.target.value))
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
                        name: "api_port",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.apiPort") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              isError: !!form.formState.errors.api_port,
                              type: "number",
                              placeholder: t("nodeModal.apiPortPlaceholder"),
                              ...field,
                              value: field.value ?? "",
                              onChange: (e) => {
                                const value = e.target.value;
                                if (value === "") {
                                  field.onChange(null);
                                } else {
                                  const numValue = parseInt(value);
                                  if (!isNaN(numValue) && numValue > 0) {
                                    field.onChange(numValue);
                                  }
                                }
                              }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "connection_type",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "w-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.connectionType") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Rest" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: NodeConnectionType.grpc, children: "gRPC" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: NodeConnectionType.rest, children: "Rest" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "keep_alive",
                      render: ({ field }) => {
                        const [displayValue, setDisplayValue] = reactExports.useState(field.value?.toString() || "");
                        const [unit, setUnit] = reactExports.useState("seconds");
                        const convertToSeconds = (value, fromUnit) => {
                          switch (fromUnit) {
                            case "minutes":
                              return value * 60;
                            case "hours":
                              return value * 3600;
                            default:
                              return value;
                          }
                        };
                        const convertFromSeconds = (seconds, toUnit) => {
                          switch (toUnit) {
                            case "minutes":
                              return Math.floor(seconds / 60);
                            case "hours":
                              return Math.floor(seconds / 3600);
                            default:
                              return seconds;
                          }
                        };
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.keepAlive") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("nodeModal.keepAliveDescription") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  isError: !!form.formState.errors.keep_alive,
                                  type: "number",
                                  value: displayValue ?? "",
                                  onChange: (e) => {
                                    const value = e.target.value;
                                    setDisplayValue(value);
                                    const numValue = parseInt(value) || 0;
                                    field.onChange(convertToSeconds(numValue, unit));
                                  }
                                }
                              ) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Select,
                                {
                                  value: unit,
                                  onValueChange: (value) => {
                                    setUnit(value);
                                    const currentSeconds = field.value || 0;
                                    const newDisplayValue = convertFromSeconds(currentSeconds, value);
                                    setDisplayValue(newDisplayValue.toString());
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "seconds", children: t("nodeModal.seconds") }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "minutes", children: t("nodeModal.minutes") }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hours", children: t("nodeModal.hours") })
                                    ] })
                                  ]
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "data_limit",
                        render: ({ field }) => {
                          if (dataLimitInputRef.current === "" && field.value !== null && field.value !== void 0 && field.value > 0) {
                            const formatted = parseFloat(field.value.toFixed(9));
                            dataLimitInputRef.current = String(formatted);
                          } else if ((field.value === null || field.value === void 0) && dataLimitInputRef.current !== "") {
                            dataLimitInputRef.current = "";
                          }
                          const displayValue = dataLimitInputRef.current !== "" ? dataLimitInputRef.current : field.value !== null && field.value !== void 0 && field.value > 0 ? (() => {
                            const formatted = parseFloat(field.value.toFixed(9));
                            return String(formatted);
                          })() : "";
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "relative h-full flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.dataLimit") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                isError: !!form.formState.errors.data_limit,
                                type: "text",
                                inputMode: "decimal",
                                placeholder: t("nodeModal.dataLimitPlaceholder", { defaultValue: "e.g. 1" }),
                                value: displayValue,
                                onChange: (e) => {
                                  const rawValue = e.target.value.trim();
                                  dataLimitInputRef.current = rawValue;
                                  if (rawValue === "") {
                                    field.onChange(0);
                                    return;
                                  }
                                  const validNumberPattern = /^-?\d*\.?\d*$/;
                                  if (validNumberPattern.test(rawValue)) {
                                    if (rawValue.endsWith(".") && rawValue.length > 1) {
                                      const prevValue = field.value !== null && field.value !== void 0 ? field.value : 0;
                                      field.onChange(prevValue);
                                    } else if (rawValue === ".") {
                                      field.onChange(0);
                                    } else {
                                      const numValue = parseFloat(rawValue);
                                      if (!isNaN(numValue) && numValue >= 0) {
                                        field.onChange(numValue);
                                      }
                                    }
                                  }
                                },
                                onBlur: () => {
                                  const rawValue = dataLimitInputRef.current.trim();
                                  if (rawValue === "" || rawValue === "." || rawValue === "0") {
                                    dataLimitInputRef.current = "";
                                    field.onChange(0);
                                  } else {
                                    const numValue = parseFloat(rawValue);
                                    if (!isNaN(numValue) && numValue >= 0) {
                                      const finalValue = numValue;
                                      const formatted = parseFloat(finalValue.toFixed(9));
                                      dataLimitInputRef.current = formatted > 0 ? String(formatted) : "";
                                      field.onChange(formatted);
                                    } else {
                                      dataLimitInputRef.current = "";
                                      field.onChange(0);
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
                    form.watch("data_limit") !== null && form.watch("data_limit") !== void 0 && Number(form.watch("data_limit")) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "data_limit_reset_strategy",
                        render: ({ field }) => {
                          const selectValue = (field.value === null || field.value === void 0 || field.value === DataLimitResetStrategy.no_reset ? "none" : field.value) || "none";
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.dataLimitResetStrategy") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Select,
                              {
                                onValueChange: (value) => {
                                  field.onChange(value === "none" ? DataLimitResetStrategy.no_reset : value);
                                },
                                value: selectValue,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("nodeModal.selectDataLimitResetStrategy") }) }) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: t("nodeModal.noReset") }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy.day, children: t("nodeModal.day") }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy.week, children: t("nodeModal.week") }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy.month, children: t("nodeModal.month") }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: DataLimitResetStrategy.year, children: t("nodeModal.year") })
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] });
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "reset_time",
                        render: ({ field }) => {
                          const resetStrategy = form.watch("data_limit_reset_strategy");
                          const decodeResetTime = (value, strategy) => {
                            if (value === null || value === void 0 || value === -1 || !strategy || strategy === DataLimitResetStrategy.no_reset) {
                              return { time: null };
                            }
                            const SECONDS_PER_DAY = 86400;
                            let day;
                            let seconds;
                            switch (strategy) {
                              case DataLimitResetStrategy.day:
                                seconds = value;
                                break;
                              case DataLimitResetStrategy.week:
                                day = Math.floor(value / SECONDS_PER_DAY);
                                seconds = value % SECONDS_PER_DAY;
                                break;
                              case DataLimitResetStrategy.month:
                                day = Math.floor(value / SECONDS_PER_DAY);
                                seconds = value % SECONDS_PER_DAY;
                                break;
                              case DataLimitResetStrategy.year:
                                day = Math.floor(value / SECONDS_PER_DAY);
                                seconds = value % SECONDS_PER_DAY;
                                break;
                              default:
                                seconds = value;
                            }
                            const hours = Math.floor(seconds / 3600);
                            const minutes = Math.floor(seconds % 3600 / 60);
                            const date = /* @__PURE__ */ new Date();
                            date.setHours(hours, minutes, 0, 0);
                            return { day, time: date };
                          };
                          const encodeResetTime = (day, time, strategy) => {
                            if (!time || !strategy || strategy === DataLimitResetStrategy.no_reset) return -1;
                            const SECONDS_PER_DAY = 86400;
                            const hours = time.getHours();
                            const minutes = time.getMinutes();
                            const seconds = hours * 3600 + minutes * 60;
                            switch (strategy) {
                              case DataLimitResetStrategy.day:
                                return seconds;
                              case DataLimitResetStrategy.week:
                                return day !== void 0 ? day * SECONDS_PER_DAY + seconds : seconds;
                              case DataLimitResetStrategy.month:
                                return day !== void 0 ? day * SECONDS_PER_DAY + seconds : seconds;
                              case DataLimitResetStrategy.year:
                                return day !== void 0 ? day * SECONDS_PER_DAY + seconds : seconds;
                              default:
                                return seconds;
                            }
                          };
                          const decoded = decodeResetTime(field.value, resetStrategy);
                          const [useIntervalBased, setUseIntervalBased] = reactExports.useState(field.value === -1 || field.value === null || field.value === void 0);
                          const [selectedDay, setSelectedDay] = reactExports.useState(decoded.day);
                          const [selectedTime, setSelectedTime] = reactExports.useState(decoded.time);
                          const prevFieldValueRef = React.useRef(field.value);
                          const isUpdatingFromFieldRef = React.useRef(false);
                          const prevStateRef = React.useRef({
                            useIntervalBased,
                            selectedDay,
                            selectedTime: selectedTime?.getTime(),
                            resetStrategy: resetStrategy ?? void 0
                          });
                          reactExports.useEffect(() => {
                            if (isUpdatingFromFieldRef.current) {
                              isUpdatingFromFieldRef.current = false;
                              prevFieldValueRef.current = field.value;
                              return;
                            }
                            if (prevFieldValueRef.current === field.value && prevStateRef.current.resetStrategy === resetStrategy) {
                              return;
                            }
                            prevFieldValueRef.current = field.value;
                            const newDecoded = decodeResetTime(field.value, resetStrategy);
                            const newUseIntervalBased = field.value === -1 || field.value === null || field.value === void 0;
                            setUseIntervalBased(newUseIntervalBased);
                            setSelectedDay(newDecoded.day);
                            setSelectedTime(newDecoded.time);
                            prevStateRef.current = {
                              useIntervalBased: newUseIntervalBased,
                              selectedDay: newDecoded.day,
                              selectedTime: newDecoded.time?.getTime(),
                              resetStrategy: resetStrategy ?? void 0
                            };
                          }, [field.value, resetStrategy]);
                          reactExports.useEffect(() => {
                            if (!resetStrategy || resetStrategy === DataLimitResetStrategy.no_reset) {
                              return;
                            }
                            const stateChanged = prevStateRef.current.useIntervalBased !== useIntervalBased || prevStateRef.current.selectedDay !== selectedDay || prevStateRef.current.selectedTime !== selectedTime?.getTime() || prevStateRef.current.resetStrategy !== resetStrategy;
                            if (!stateChanged) {
                              return;
                            }
                            prevStateRef.current = { useIntervalBased, selectedDay, selectedTime: selectedTime?.getTime(), resetStrategy };
                            let newValue;
                            if (useIntervalBased) {
                              newValue = -1;
                            } else {
                              newValue = encodeResetTime(selectedDay, selectedTime, resetStrategy);
                            }
                            if (newValue !== null && newValue !== field.value) {
                              isUpdatingFromFieldRef.current = true;
                              field.onChange(newValue);
                            }
                          }, [useIntervalBased, selectedDay, selectedTime, resetStrategy, field.value]);
                          const getDayOptions = () => {
                            switch (resetStrategy) {
                              case DataLimitResetStrategy.week:
                                return [
                                  { value: 0, label: t("nodeModal.monday", { defaultValue: "Monday" }) },
                                  { value: 1, label: t("nodeModal.tuesday", { defaultValue: "Tuesday" }) },
                                  { value: 2, label: t("nodeModal.wednesday", { defaultValue: "Wednesday" }) },
                                  { value: 3, label: t("nodeModal.thursday", { defaultValue: "Thursday" }) },
                                  { value: 4, label: t("nodeModal.friday", { defaultValue: "Friday" }) },
                                  { value: 5, label: t("nodeModal.saturday", { defaultValue: "Saturday" }) },
                                  { value: 6, label: t("nodeModal.sunday", { defaultValue: "Sunday" }) }
                                ];
                              case DataLimitResetStrategy.month:
                                return Array.from({ length: 28 }, (_, i) => ({
                                  value: i + 1,
                                  label: String(i + 1)
                                }));
                              case DataLimitResetStrategy.year:
                                return Array.from({ length: 365 }, (_, i) => ({
                                  value: i + 1,
                                  label: `${i + 1}`
                                }));
                              default:
                                return [];
                            }
                          };
                          const dayOptions = getDayOptions();
                          const dataLimit = form.watch("data_limit");
                          if (!dataLimit || dataLimit === null || dataLimit === void 0 || Number(dataLimit) <= 0 || !resetStrategy || resetStrategy === DataLimitResetStrategy.no_reset) {
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
                          }
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.resetTime") }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: useIntervalBased ? t("nodeModal.intervalBased", { defaultValue: "Interval-based" }) : t("nodeModal.absoluteTime", { defaultValue: "Absolute time" }) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Switch,
                                    {
                                      checked: !useIntervalBased,
                                      onCheckedChange: (checked) => {
                                        const newUseIntervalBased = !checked;
                                        setUseIntervalBased(newUseIntervalBased);
                                        if (newUseIntervalBased) {
                                          isUpdatingFromFieldRef.current = true;
                                          field.onChange(-1);
                                        } else {
                                          const defaultDay = resetStrategy === DataLimitResetStrategy.week ? 0 : resetStrategy === DataLimitResetStrategy.month ? 1 : resetStrategy === DataLimitResetStrategy.year ? 1 : void 0;
                                          const defaultTime = /* @__PURE__ */ new Date();
                                          defaultTime.setHours(0, 0, 0, 0);
                                          setSelectedDay(defaultDay);
                                          setSelectedTime(defaultTime);
                                        }
                                      }
                                    }
                                  )
                                ] })
                              ] }),
                              !useIntervalBased && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                                dayOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  Select,
                                  {
                                    value: selectedDay?.toString() || "",
                                    onValueChange: (value) => {
                                      setSelectedDay(parseInt(value));
                                    },
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        SelectValue,
                                        {
                                          placeholder: resetStrategy === DataLimitResetStrategy.week ? t("nodeModal.selectDayOfWeek", { defaultValue: "Select day of week" }) : resetStrategy === DataLimitResetStrategy.month ? t("nodeModal.selectDayOfMonth", { defaultValue: "Select day of month" }) : t("nodeModal.selectDayOfYear", { defaultValue: "Select day of year" })
                                        }
                                      ) }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: dayOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: option.value.toString(), children: option.label }, option.value)) })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    type: "time",
                                    value: selectedTime ? `${String(selectedTime.getHours()).padStart(2, "0")}:${String(selectedTime.getMinutes()).padStart(2, "0")}` : "",
                                    onChange: (e) => {
                                      const [hours, minutes] = e.target.value.split(":");
                                      if (hours && minutes) {
                                        const newTime = /* @__PURE__ */ new Date();
                                        newTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
                                        setSelectedTime(newTime);
                                      } else {
                                        setSelectedTime(null);
                                      }
                                    },
                                    placeholder: t("nodeModal.resetTimePlaceholder", { defaultValue: "Select time" }),
                                    dir: "ltr"
                                  }
                                )
                              ] }),
                              useIntervalBased && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("nodeModal.intervalBasedDescription", {
                                defaultValue: "Reset will occur every period from the last reset time"
                              }) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] });
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "default_timeout",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.defaultTimeout") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                isError: !!form.formState.errors.default_timeout,
                                type: "number",
                                step: "1",
                                placeholder: t("nodeModal.defaultTimeoutPlaceholder"),
                                ...field,
                                onChange: (e) => field.onChange(parseInt(e.target.value))
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
                          name: "internal_timeout",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.internalTimeout") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                isError: !!form.formState.errors.internal_timeout,
                                type: "number",
                                step: "1",
                                placeholder: t("nodeModal.internalTimeoutPlaceholder"),
                                ...field,
                                onChange: (e) => field.onChange(parseInt(e.target.value))
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "server_ca",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "h-full w-full flex-1 pb-4 lg:mb-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("nodeModal.certificate") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      dir: "ltr",
                      placeholder: t("nodeModal.certificatePlaceholder"),
                      className: cn("h-[200px] font-mono text-xs lg:h-5/6", !!form.formState.errors.server_ca && "border-destructive"),
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: addNodeMutation.isPending || modifyNodeMutation.isPending, size: "sm", children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoaderButton,
          {
            type: "submit",
            disabled: addNodeMutation.isPending || modifyNodeMutation.isPending,
            isLoading: addNodeMutation.isPending || modifyNodeMutation.isPending,
            loadingText: editingNode ? t("modifying") : t("creating"),
            size: "sm",
            children: editingNode ? t("modify") : t("create")
          }
        )
      ] })
    ] }) })
  ] }) });
}
const nodeFormSchema = objectType({
  name: stringType().min(1, "Name is required"),
  address: stringType().min(1, "Address is required"),
  port: numberType().min(1, "Port is required"),
  api_port: numberType().min(1).optional().nullable(),
  usage_coefficient: numberType().optional(),
  connection_type: enumType([NodeConnectionType.grpc, NodeConnectionType.rest]),
  server_ca: stringType().min(1, "Server CA is required"),
  keep_alive: numberType().min(0, "Keep alive must be 0 or greater"),
  keep_alive_unit: enumType(["seconds", "minutes", "hours"]).default("seconds"),
  api_key: stringType().min(1, "API key is required"),
  core_config_id: numberType().min(1, "Core configuration is required"),
  data_limit: numberType().min(0).optional().nullable(),
  data_limit_reset_strategy: nativeEnumType(DataLimitResetStrategy).optional().nullable(),
  reset_time: unionType([nullType(), undefinedType(), numberType().min(-1)]),
  default_timeout: numberType().min(3, "Default timeout must be 3 or greater").max(60, "Default timeout must be 60 or lower").optional(),
  internal_timeout: numberType().min(3, "Internal timeout must be 3 or greater").max(60, "Internal timeout must be 60 or lower").optional()
});
const nodeFormDefaultValues = {
  name: "",
  address: "",
  port: 62050,
  usage_coefficient: 1,
  connection_type: NodeConnectionType.grpc,
  server_ca: "",
  keep_alive: 2e4,
  keep_alive_unit: "seconds",
  api_key: ""
};
export {
  NodeModal as N,
  nodeFormSchema as a,
  nodeFormDefaultValues as n
};
//# sourceMappingURL=node-form-BHepv1tn.js.map
