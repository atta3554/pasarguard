import { j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { B as Button } from "./button-BOH66nN-.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { a as useDirDetection, N as useCreateGroup, K as useModifyGroup, O as useGetInbounds, c as cn, L as LoaderCircle, t as toast, q as queryClient } from "./index-C_i3x-Gf.js";
import { C as Command, a as CommandInput, b as CommandEmpty, c as CommandGroup, d as CommandItem } from "./command-AnChkD8Y.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { X } from "./x-C6aLLO-Y.js";
import { o as objectType, b as booleanType, a as arrayType, s as stringType } from "./types-CANcSf0A.js";
function GroupModal({ isDialogOpen, onOpenChange, form, editingGroup, editingGroupId }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const handleError = useDynamicErrorHandler();
  const addGroupMutation = useCreateGroup();
  const modifyGroupMutation = useModifyGroup();
  const { data: inbounds, isLoading: isLoadingInbounds } = useGetInbounds({
    query: {
      enabled: isDialogOpen
    }
  });
  const onSubmit = async (values) => {
    try {
      if (editingGroup && editingGroupId) {
        await modifyGroupMutation.mutateAsync({
          groupId: editingGroupId,
          data: values
        });
        toast.success(
          t("group.editSuccess", {
            name: values.name
          })
        );
      } else {
        await addGroupMutation.mutateAsync({
          data: values
        });
        toast.success(
          t("group.createSuccess", {
            name: values.name
          })
        );
      }
      queryClient.invalidateQueries({ queryKey: ["/api/groups"] });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      const fields = ["name", "inbound_tags"];
      handleError({ error, fields, form, contextKey: "groups" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn(dir === "rtl" && "text-right"), children: editingGroup ? t("editGroup", { defaultValue: "Edit Group" }) : t("createGroup") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: "Modify the group settings below" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          control: form.control,
          name: "name",
          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("name") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { isError: !!form.formState.errors.name, ...field }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          control: form.control,
          name: "inbound_tags",
          render: ({ field }) => {
            const currentTags = field.value || [];
            const allSelected = inbounds && inbounds.length > 0 && inbounds.every((inbound) => currentTags.includes(inbound));
            const handleSelectAll = () => {
              if (allSelected) {
                field.onChange([]);
              } else {
                field.onChange(inbounds || []);
              }
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("inboundTags") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                inbounds && inbounds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: handleSelectAll, className: "h-7 text-xs", disabled: isLoadingInbounds, children: allSelected ? t("deselectAll") : t("selectAll") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { className: "mb-3 rounded-md border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: t("searchInbounds"), disabled: isLoadingInbounds }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: isLoadingInbounds ? t("loading", { defaultValue: "Loading..." }) : t("noInboundsFound") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { dir: "ltr", className: "max-h-40 overflow-auto", children: isLoadingInbounds ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 px-2 py-3 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("loading", { defaultValue: "Loading..." }) })
                  ] }) : inbounds?.map((inbound) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    CommandItem,
                    {
                      onSelect: () => {
                        const newTags = currentTags.includes(inbound) ? currentTags.filter((tag) => tag !== inbound) : [...currentTags, inbound];
                        field.onChange(newTags);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("mr-2 h-4 w-4 rounded-sm border", currentTags.includes(inbound) ? "border-primary bg-primary" : "border-muted") }),
                        inbound
                      ]
                    },
                    inbound
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: currentTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
                  tag,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    X,
                    {
                      className: "h-3 w-3 cursor-pointer",
                      onClick: () => {
                        field.onChange(currentTags.filter((t2) => t2 !== tag));
                      }
                    }
                  )
                ] }, tag)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoaderButton,
          {
            type: "submit",
            isLoading: addGroupMutation.isPending || modifyGroupMutation.isPending,
            loadingText: editingGroup ? t("modifying") : t("creating"),
            className: "bg-primary hover:bg-primary/90",
            children: editingGroup ? t("edit") : t("create")
          }
        )
      ] })
    ] }) })
  ] }) });
}
const groupFormSchema = objectType({
  name: stringType().min(1, "Name is required"),
  inbound_tags: arrayType(stringType()),
  is_disabled: booleanType().optional()
});
const groupFormDefaultValues = {
  name: "",
  inbound_tags: [],
  is_disabled: false
};
export {
  GroupModal as G,
  groupFormSchema as a,
  groupFormDefaultValues as g
};
//# sourceMappingURL=group-form-Bv0qIaCU.js.map
