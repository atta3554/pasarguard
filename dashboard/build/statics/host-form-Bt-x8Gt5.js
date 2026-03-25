import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CvI_xa9s.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-BlwcMUxd.js";
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage } from "./form-BMBIU5T8.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem, d as SelectGroup, f as SelectLabel } from "./select-BbTZrRYf.js";
import { S as Switch } from "./switch-BtwGcSyQ.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-GailCAaU.js";
import { V as VariablesPopover, a as VariablesList } from "./variables-popover-YfVYY7Ed.js";
import { f as createLucideIcon, a as useDirDetection, c as cn, L as LoaderCircle, Q as UserStatus, q as queryClient, t as toast, Z as getInbounds, Y as getHosts } from "./index-C_i3x-Gf.js";
import { u as useQuery } from "./react-query-DMC2nZO-.js";
import { L as LoaderButton } from "./loader-button-C4leFJGU.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { I as Info } from "./info-DijVEiOM.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { L as Lock } from "./lock-D6SFqMLT.js";
import { X } from "./x-C6aLLO-Y.js";
import { N as Network } from "./network-BFIxiW-9.js";
import { C as Check } from "./check-ayw17ogi.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { o as objectType, b as booleanType, n as numberType, e as enumType, a as arrayType, s as stringType, d as unionType, l as literalType, r as recordType } from "./types-CANcSf0A.js";
const Cable = createLucideIcon("Cable", [
  [
    "path",
    {
      d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",
      key: "10bnsj"
    }
  ],
  ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9", key: "1eqmu1" }],
  ["path", { d: "M21 21v-2h-4", key: "14zm7j" }],
  ["path", { d: "M3 5h4V3", key: "z442eg" }],
  [
    "path",
    { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3", key: "ebdjd7" }
  ]
]);
const ChevronsLeftRightEllipsis = createLucideIcon("ChevronsLeftRightEllipsis", [
  ["path", { d: "m18 8 4 4-4 4", key: "1ak13k" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);
const GlobeLock = createLucideIcon("GlobeLock", [
  [
    "path",
    {
      d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
      key: "qkt0x6"
    }
  ],
  ["path", { d: "M2 12h8.5", key: "ovaggd" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]
]);
const Route = createLucideIcon("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);
const SquarePen = createLucideIcon("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
const statusOptions = [
  { value: UserStatus.active, label: "hostsDialog.status.active" },
  { value: UserStatus.disabled, label: "hostsDialog.status.disabled" },
  { value: UserStatus.limited, label: "hostsDialog.status.limited" },
  { value: UserStatus.expired, label: "hostsDialog.status.expired" },
  { value: UserStatus.on_hold, label: "hostsDialog.status.onHold" }
];
const NoiseItem = reactExports.memo(({ index, form, onRemove, onDuplicate, t }) => {
  const handleRemove = reactExports.useCallback(() => {
    onRemove(index);
  }, [index, onRemove]);
  const handleDuplicate = reactExports.useCallback(() => {
    onDuplicate(index);
  }, [index, onDuplicate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 rounded-md border p-2 md:grid-cols-[minmax(100px,120px),1fr,1fr,1fr,auto] md:border-none md:p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormField,
      {
        control: form.control,
        name: `noise_settings.xray.${index}.type`,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.noise.type") }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rand", children: "rand" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "str", children: "str" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "base64", children: "base64" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hex", children: "hex" })
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
        name: `noise_settings.xray.${index}.packet`,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "order-3 md:order-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.noise.packetPlaceholder"), ...field, value: field.value || "", className: "h-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormField,
      {
        control: form.control,
        name: `noise_settings.xray.${index}.delay`,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "order-4 md:order-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.noise.delayPlaceholder"), ...field, value: field.value || "", className: "h-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormField,
      {
        control: form.control,
        name: `noise_settings.xray.${index}.apply_to`,
        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "order-2 md:order-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.noise.applyTo") }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ip", children: "ip" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ipv4", children: "ipv4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ipv6", children: "ipv6" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-5 col-span-2 flex items-center justify-end gap-1 md:order-none md:col-auto md:justify-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-8 w-8 shrink-0 transition-colors hover:bg-muted/70", onClick: handleDuplicate, title: t("hostsDialog.noise.duplicateNoise"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8 shrink-0 border-red-500/20 transition-colors hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20",
          onClick: handleRemove,
          title: t("hostsDialog.noise.removeNoise"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" })
        }
      )
    ] })
  ] });
});
NoiseItem.displayName = "NoiseItem";
const ArrayInput = reactExports.memo(({ field, placeholder, label, infoContent }) => {
  const [inputValue, setInputValue] = reactExports.useState("");
  const [isPopoverOpen, setIsPopoverOpen] = reactExports.useState(false);
  const [editingIndex, setEditingIndex] = reactExports.useState(null);
  const [editingValue, setEditingValue] = reactExports.useState("");
  const { t } = useTranslation();
  const dir = useDirDetection();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addItem();
    } else if (e.key === "Escape") {
      setInputValue("");
      setIsPopoverOpen(false);
    }
  };
  const handleEditKeyDown = (e, index) => {
    if (e.key === "Enter" && editingValue.trim()) {
      e.preventDefault();
      saveEdit(index);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };
  const addItem = () => {
    if (inputValue.trim()) {
      const currentValue = field.value || [];
      const trimmedValue = inputValue.trim();
      if (!currentValue.includes(trimmedValue)) {
        const newValue = [...currentValue, trimmedValue];
        field.onChange(newValue);
        setInputValue("");
      } else {
        toast.error(t("arrayInput.duplicateError"));
      }
    }
  };
  const removeItem = (index) => {
    const currentValue = field.value || [];
    const newValue = currentValue.filter((_, i) => i !== index);
    field.onChange(newValue);
    setEditingIndex(null);
    setEditingValue("");
  };
  const startEdit = (index, currentValue) => {
    setEditingIndex(index);
    setEditingValue(currentValue);
  };
  const saveEdit = (index) => {
    if (editingValue.trim()) {
      const currentValue = field.value || [];
      const trimmedValue = editingValue.trim();
      const isDuplicate = currentValue.some((item, i) => i !== index && item === trimmedValue);
      if (!isDuplicate) {
        const newValue = [...currentValue];
        newValue[index] = trimmedValue;
        field.onChange(newValue);
        setEditingIndex(null);
        setEditingValue("");
      } else {
        toast.error(t("arrayInput.duplicateError"));
      }
    }
  };
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingValue("");
  };
  const displayValue = field.value && field.value.length > 0 ? field.value.length <= 3 ? field.value.join(", ") : `${field.value.slice(0, 3).join(", ")}... (+${field.value.length - 3} more)` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: label }),
      infoContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[280px] p-3 sm:w-[320px]", side: "top", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-[12px] font-medium", children: t("hostsDialog.variables.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[60vh] space-y-1 overflow-y-auto pr-1", children: infoContent })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Popover,
      {
        open: isPopoverOpen,
        onOpenChange: (open) => {
          if (!open && editingIndex === null) {
            setIsPopoverOpen(false);
          } else if (open) {
            setIsPopoverOpen(true);
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", role: "combobox", className: "h-auto w-full min-w-0 p-2 text-left", title: displayValue || placeholder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `max-w-[100px] flex-1 truncate sm:max-w-none ${displayValue ? "text-foreground" : "text-muted-foreground"}`, title: displayValue || placeholder, children: displayValue || placeholder }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-2 flex shrink-0 items-center gap-1", children: [
              field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "px-1.5 py-0.5 text-xs", children: field.value.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeftRightEllipsis, { className: "h-3 w-3 text-muted-foreground" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[min(90vw,400px)] p-3", align: dir === "rtl" ? "end" : "start", side: "bottom", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-64 space-y-3 overflow-y-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-1.5 flex flex-col gap-2 sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: t("arrayInput.addPlaceholder"),
                  value: inputValue,
                  onChange: (e) => setInputValue(e.target.value),
                  onKeyDown: handleKeyDown,
                  className: "min-w-0 flex-1 text-sm",
                  autoFocus: isPopoverOpen
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", size: "sm", variant: "default", onClick: addItem, disabled: !inputValue.trim(), className: "h-8 w-full shrink-0 px-3 py-1 sm:w-auto", title: t("arrayInput.addButton"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 sm:hidden", children: t("arrayInput.addButton") })
              ] })
            ] }),
            field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir: "ltr", className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "text-xs font-medium text-muted-foreground", children: [
                t("arrayInput.items"),
                " (",
                field.value.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 space-y-1 overflow-y-auto", children: field.value.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex min-w-0 items-center gap-2 rounded-md border p-2 transition-colors hover:bg-accent/50", onClick: (e) => e.stopPropagation(), children: [
                editingIndex === index ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: editingValue,
                    onChange: (e) => setEditingValue(e.target.value),
                    onKeyDown: (e) => handleEditKeyDown(e, index),
                    className: "h-7 min-w-0 flex-1 text-sm",
                    autoFocus: true,
                    onBlur: (e) => {
                      if (!e.relatedTarget || !e.relatedTarget.closest("button")) {
                        saveEdit(index);
                      }
                    },
                    dir: "ltr"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "min-w-0 flex-1 cursor-text truncate text-sm leading-tight transition-colors hover:text-primary",
                    onClick: () => startEdit(index, item),
                    title: t("arrayInput.clickToEdit"),
                    children: item
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center gap-1", children: editingIndex === index ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        saveEdit(index);
                      },
                      className: "h-6 w-6 p-0 transition-all duration-200 hover:scale-105",
                      title: t("arrayInput.saveEdit"),
                      disabled: !editingValue.trim(),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        cancelEdit();
                      },
                      className: "h-6 w-6 p-0 transition-all duration-200 hover:scale-105",
                      title: t("arrayInput.cancelEdit"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        startEdit(index, item);
                      },
                      className: "h-6 w-6 p-0 transition-all duration-200 hover:scale-105",
                      title: t("arrayInput.editItem"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeItem(index);
                      },
                      className: "h-6 w-6 p-0 transition-all duration-200 hover:scale-105",
                      title: t("arrayInput.removeItem"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
                    }
                  )
                ] }) })
              ] }, index)) })
            ] }),
            (!field.value || field.value.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6 text-center text-sm text-muted-foreground", children: t("arrayInput.noItems") })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
  ] });
});
ArrayInput.displayName = "ArrayInput";
const HostModal = ({ isDialogOpen, onOpenChange, onSubmit, editingHost, form }) => {
  const [openSection, setOpenSection] = reactExports.useState(void 0);
  const [isTransportOpen, setIsTransportOpen] = reactExports.useState(false);
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [_isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const xPaddingObfsEnabled = form.watch("transport_settings.xhttp_settings.x_padding_obfs_mode") === true;
  const addNoiseSetting = reactExports.useCallback(() => {
    const currentNoiseSettings = form.getValues("noise_settings.xray") || [];
    form.setValue(
      "noise_settings.xray",
      [
        ...currentNoiseSettings,
        {
          type: "rand",
          packet: "",
          delay: "",
          apply_to: "ip"
        }
      ],
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
  }, [form]);
  const removeNoiseSetting = reactExports.useCallback(
    (index) => {
      const currentNoiseSettings = form.getValues("noise_settings.xray") || [];
      const newNoiseSettings = currentNoiseSettings.filter((_, i) => i !== index);
      form.setValue("noise_settings.xray", newNoiseSettings, {
        shouldDirty: true,
        shouldTouch: true
      });
    },
    [form]
  );
  const duplicateNoiseSetting = reactExports.useCallback(
    (index) => {
      const currentNoiseSettings = form.getValues("noise_settings.xray") || [];
      const targetNoise = currentNoiseSettings[index];
      if (!targetNoise) {
        return;
      }
      const duplicatedNoise = { ...targetNoise };
      const newNoiseSettings = [...currentNoiseSettings.slice(0, index + 1), duplicatedNoise, ...currentNoiseSettings.slice(index + 1)];
      form.setValue("noise_settings.xray", newNoiseSettings, {
        shouldDirty: true,
        shouldTouch: true
      });
    },
    [form]
  );
  const noiseSettings = reactExports.useMemo(() => {
    return form.getValues("noise_settings.xray") || [];
  }, [form.watch("noise_settings.xray")]);
  const cleanPayload = (data) => {
    const cleanObject = (obj, path = []) => {
      const result = {};
      Object.entries(obj).forEach(([key, value]) => {
        const currentPath = [...path, key];
        if (key === "priority") {
          result[key] = value;
          return;
        }
        if (typeof value === "boolean") {
          result[key] = value;
          return;
        }
        if (value === null || value === void 0 || value === "") return;
        if (typeof value === "object" && !Array.isArray(value)) {
          const cleanedNested = cleanObject(value, currentPath);
          if (Object.keys(cleanedNested).length > 0) {
            result[key] = cleanedNested;
          }
        } else if (Array.isArray(value)) {
          if (value.length > 0) {
            result[key] = value;
          }
        } else {
          result[key] = value;
        }
      });
      return result;
    };
    return cleanObject(data);
  };
  const handleModalOpenChange = (open) => {
    if (!open) {
      setOpenSection(void 0);
    }
    onOpenChange(open);
  };
  const { data: inbounds = [], isLoading: isLoadingInbounds } = useQuery({
    queryKey: ["getInboundsQueryKey"],
    queryFn: () => getInbounds(),
    enabled: isDialogOpen
  });
  const { data: hosts = [], isLoading: isLoadingHosts } = useQuery({
    queryKey: ["getHostsQueryKey"],
    queryFn: () => getHosts(),
    enabled: isDialogOpen && isTransportOpen,
    select: (data) => data.filter((host) => host.id != null)
  });
  const handleAccordionChange = (value) => {
    if (value === "transport") {
      setIsTransportOpen(true);
    }
    setOpenSection((prevSection) => prevSection === value ? void 0 : value);
  };
  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = { ...data };
      if (!payload.fragment_settings?.sing_box?.fragment && payload.fragment_settings?.sing_box) {
        const singBox = payload.fragment_settings.sing_box;
        singBox.fragment_fallback_delay = void 0;
        singBox.record_fragment = void 0;
      }
      if (payload.fragment_settings?.sing_box?.fragment_fallback_delay) {
        const delay = payload.fragment_settings.sing_box.fragment_fallback_delay;
        if (/^\d+$/.test(delay)) {
          payload.fragment_settings.sing_box.fragment_fallback_delay = delay + "ms";
        }
      }
      const cleanedData = cleanPayload(payload);
      const response = await onSubmit(cleanedData);
      if (response.status >= 400) {
        throw new Error(`Operation failed with status: ${response.status}`);
      }
      handleModalOpenChange(false);
      queryClient.invalidateQueries({
        queryKey: ["getHostsQueryKey"]
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isDialogOpen, onOpenChange: handleModalOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "h-full w-full max-w-2xl sm:h-auto sm:py-4", onOpenAutoFocus: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: cn("mt-2", dir === "rtl" ? "text-right" : "text-left"), children: editingHost ? t("editHost.title") : t("hostsDialog.addHost") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: "Modify the host settings below" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(handleSubmit), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mr-4 max-h-[80dvh] space-y-4 overflow-y-auto px-2 pr-4 sm:max-h-[75dvh]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "inbound_tag",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("inbound") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { dir, onValueChange: field.onChange, value: field.value, disabled: isLoadingInbounds, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { className: cn(!!form.formState.errors.inbound_tag && "border-destructive"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: isLoadingInbounds ? t("loading", { defaultValue: "Loading..." }) : t("hostsDialog.selectInbound") }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir: "ltr", children: isLoadingInbounds ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { className: "px-4", value: "__loading_inbounds__", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
                  t("loading", { defaultValue: "Loading..." })
                ] }) }) : inbounds.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { className: "cursor-pointer px-4", value: tag, children: tag }, tag)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "status",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.status.label") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: field.value && field.value.length > 0 ? field.value.map((status) => {
                  const option = statusOptions.find((opt) => opt.value === status);
                  if (!option) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 rounded-md bg-muted/80 px-2 py-1 text-sm", children: [
                    t(option.label),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "hover:text-destructive",
                        onClick: () => {
                          field.onChange(field.value.filter((s) => s !== status));
                        },
                        children: "×"
                      }
                    )
                  ] }, status);
                }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("hostsDialog.noStatus") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: "",
                    onValueChange: (value) => {
                      if (!value) return;
                      const currentValue = field.value || [];
                      if (!currentValue.includes(value)) {
                        field.onChange([...currentValue, value]);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { dir, className: "w-full py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectStatus") }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { dir, className: "bg-background", children: statusOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: option.value,
                          className: "flex cursor-pointer items-center gap-2 px-4 py-2 focus:bg-accent",
                          disabled: field.value?.includes(option.value),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: field.value?.includes(option.value), className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: t(option.label) })
                          ] })
                        },
                        option.value
                      )) })
                    ]
                  }
                ),
                field.value && field.value.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => field.onChange([]), className: "w-full", children: t("hostsDialog.clearAllStatuses") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            control: form.control,
            name: "remark",
            render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("remark") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(VariablesPopover, { includeProtocolTransport: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Remark (e.g. PasarGuard-Host)", isError: !!form.formState.errors.remark, ...field }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "!mb-4 flex justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-[2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "address",
              render: ({ field }) => {
                const infoContent = /* @__PURE__ */ jsxRuntimeExports.jsx(VariablesList, { includeProtocolTransport: true });
                return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrayInput, { field, placeholder: "example.com", label: t("hostsDialog.address"), infoContent });
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "port",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.port") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.port.info") }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "443",
                    isError: !!form.formState.errors.port,
                    type: "number",
                    ...field,
                    onChange: (e) => {
                      const val = e.target.value;
                      field.onChange(val === "" ? "" : Number.parseInt(val, 10));
                    },
                    value: field.value === null || field.value === void 0 ? "" : field.value
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", collapsible: true, value: openSection, onValueChange: handleAccordionChange, className: "!mt-0 mb-6 flex w-full flex-col gap-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "network", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlobeLock, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.networkSettings") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "host",
                    render: ({ field }) => {
                      const infoContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.host.info") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.host.multiHost") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.host.wildcard") })
                      ] });
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrayInput, { field, placeholder: "example.com", label: t("hostsDialog.host"), infoContent });
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "path",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.path") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.path.info") }) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Path (e.g. /xray)", ...field }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "random_user_agent",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.randomUserAgent") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.httpHeaders") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "icon",
                      className: "h-6 w-6",
                      onClick: () => {
                        const currentHeaders = form.getValues("http_headers") || {};
                        const newKey = `header_${Object.keys(currentHeaders).length + 1}`;
                        form.setValue(
                          "http_headers",
                          {
                            ...currentHeaders,
                            [newKey]: ""
                          },
                          {
                            shouldDirty: true,
                            shouldTouch: true
                          }
                        );
                      },
                      title: t("hostsDialog.addHeader"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.entries(form.watch("http_headers") || {}).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(120px,1fr),1fr,auto] gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: t("hostsDialog.headersName"),
                      defaultValue: key,
                      onBlur: (e) => {
                        if (e.target.value !== key) {
                          const currentHeaders = { ...form.getValues("http_headers") };
                          const oldValue = currentHeaders[key];
                          delete currentHeaders[key];
                          currentHeaders[e.target.value] = oldValue;
                          form.setValue("http_headers", currentHeaders, {
                            shouldDirty: true,
                            shouldTouch: true
                          });
                        }
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: t("hostsDialog.headersValue"),
                      value: value || "",
                      onChange: (e) => {
                        const currentHeaders = { ...form.getValues("http_headers") };
                        currentHeaders[key] = e.target.value;
                        form.setValue("http_headers", currentHeaders, {
                          shouldDirty: true,
                          shouldTouch: true
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 shrink-0 border-red-500/20 transition-colors hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20",
                      onClick: () => {
                        const currentHeaders = { ...form.getValues("http_headers") };
                        delete currentHeaders[key];
                        form.setValue("http_headers", currentHeaders, {
                          shouldDirty: true,
                          shouldTouch: true
                        });
                      },
                      title: t("hostsDialog.removeHeader"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" })
                    }
                  )
                ] }, key)) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "security", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.securitySettings") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "security",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.security") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.security.info") }) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tls", children: "TLS" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inbound_default", children: "Inbound's default" })
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
                    name: "sni",
                    render: ({ field }) => {
                      const infoContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.sni.info") }) });
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrayInput, { field, placeholder: t("hostsDialog.sniPlaceholder"), label: t("hostsDialog.sni"), infoContent });
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "alpn",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.alpn") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", role: "combobox", className: "h-auto min-h-[40px] w-full justify-between p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-wrap gap-2", children: field.value && field.value.length > 0 ? field.value.map((protocol) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
                          protocol,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            X,
                            {
                              className: "h-3 w-3 cursor-pointer hover:text-destructive",
                              onClick: (e) => {
                                e.stopPropagation();
                                const newValue = (field.value || []).filter((p) => p !== protocol);
                                field.onChange(newValue);
                              }
                            }
                          )
                        ] }, protocol)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("hostsDialog.selectAlpn", "Select ALPN protocols") }) }) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-full p-1", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: ["h3", "h2", "http/1.1"].map((protocol) => {
                          const isSelected = field.value?.includes(protocol);
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              onClick: () => {
                                const currentValue = field.value || [];
                                const newValue = isSelected ? currentValue.filter((p) => p !== protocol) : [...currentValue, protocol];
                                field.onChange(newValue);
                              },
                              className: "flex cursor-pointer items-center gap-2 rounded-sm p-2 hover:bg-accent",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border", isSelected ? "border-primary bg-primary" : "border-muted"), children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 text-primary-foreground" }) }),
                                protocol
                              ]
                            },
                            protocol
                          );
                        }) }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "fingerprint",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.fingerprint") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "default" ? "" : value), value: field.value || "default", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.fingerprint") }) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "default", children: t("default") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "chrome", children: t("chrome") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "firefox", children: t("firefox") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "safari", children: t("safari") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ios", children: t("ios") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "android", children: t("android") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "edge", children: t("edge") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "360", children: t("360") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "qq", children: t("qq") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "random", children: t("random") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "randomized", children: t("randomized") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "randomizednoalpn", children: t("randomizednoalpn") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unsafe", children: t("unsafe") })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "allowinsecure",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.allowInsecure") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "use_sni_as_host",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.useSniAsHost") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "ech_config_list",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.echConfigList") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.echConfigList.info") }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.echConfigListPlaceholder"), ...field }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "pinned_peer_cert_sha256",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.pinnedPeerCertSha256", { defaultValue: "Pinned Peer Cert SHA256" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.pinnedPeerCertSha256.info", {
                          defaultValue: "Optional certificate public key pin (SHA-256) used for TLS peer pinning."
                        }) }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { maxLength: 128, placeholder: t("hostsDialog.pinnedPeerCertSha256Placeholder", { defaultValue: "Enter SHA-256 pin" }), ...field, value: field.value ?? "" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "verify_peer_cert_by_name",
                  render: ({ field }) => {
                    const infoContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.verifyPeerCertByName.info", {
                      defaultValue: "Optional names that must match the peer certificate during TLS verification."
                    }) }) });
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrayInput,
                      {
                        field,
                        placeholder: t("hostsDialog.verifyPeerCertByNamePlaceholder", { defaultValue: "example.com" }),
                        label: t("hostsDialog.verifyPeerCertByName", { defaultValue: "Verify Peer Cert By Name" }),
                        infoContent
                      }
                    );
                  }
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "routing", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.routingSettings") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FormField,
              {
                control: form.control,
                name: "vless_route",
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.vlessRoute") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.vlessRoute.info") }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: t("hostsDialog.vlessRoutePlaceholder"),
                      maxLength: 4,
                      value: field.value ?? "",
                      onChange: (e) => {
                        const normalized = e.target.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 4);
                        field.onChange(normalized);
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                ] })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "transport", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.transportSettingsAccordion") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "xhttp", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 flex h-auto w-full flex-wrap gap-1 overflow-x-auto px-1 sm:w-fit sm:flex-nowrap sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { className: "flex-1 px-1 text-xs sm:flex-none sm:px-2 sm:text-sm", value: "xhttp", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "XHTTP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] sm:hidden", children: "XHTTP" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { className: "flex-1 px-1 text-xs sm:flex-none sm:px-2 sm:text-sm", value: "grpc", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "gRPC" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] sm:hidden", children: "gRPC" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { className: "flex-1 px-1 text-xs sm:flex-none sm:px-2 sm:text-sm", value: "kcp", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "KCP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] sm:hidden", children: "KCP" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { className: "flex-1 px-1 text-xs sm:flex-none sm:px-2 sm:text-sm", value: "tcp", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "TCP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] sm:hidden", children: "TCP" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { className: "flex-1 px-1 text-xs sm:flex-none sm:px-2 sm:text-sm", value: "websocket", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "WebSocket" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] sm:hidden", children: "WS" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { dir, value: "xhttp", className: "space-y-4 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "transport_settings.xhttp_settings.mode",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.mode") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "auto", children: "Auto" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "packet-up", children: "Packet Up" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stream-up", children: "Stream Up" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stream-one", children: "Stream One" })
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
                      name: "transport_settings.xhttp_settings.no_grpc_header",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.xhttp.noGrpcHeader") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.xhttp_settings.x_padding_obfs_mode",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.xhttp.xPaddingObfsMode") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "transport_settings.xhttp_settings.x_padding_bytes",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.xPaddingBytes") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "transport_settings.xhttp_settings.sc_max_each_post_bytes",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.scMaxEachPostBytes") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "transport_settings.xhttp_settings.sc_min_posts_interval_ms",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.scMinPostsIntervalMs") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  )
                ] }),
                xPaddingObfsEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 rounded-lg border border-dashed p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.xhttp.xPaddingAdvanced") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("hostsDialog.xhttp.xPaddingAdvancedHint", { defaultValue: "Shown only when X-Padding Obfs Mode is enabled." }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.x_padding_key",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.xPaddingKey") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.x_padding_header",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.xPaddingHeader") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.x_padding_placement",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.xPaddingPlacement") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "queryInHeader", children: "Query In Header" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "query", children: "Query" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "header", children: "Header" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cookie", children: "Cookie" })
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
                        name: "transport_settings.xhttp_settings.x_padding_method",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.xPaddingMethod") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "repeat-x", children: "Repeat-X" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tokenish", children: "Tokenish" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] })
                ] }) : null,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.xhttp.uplinkSettings") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.uplink_http_method",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.uplinkHttpMethod") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.uplink_data_placement",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.uplinkDataPlacement") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "body", children: "Body" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "header", children: "Header" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cookie", children: "Cookie" })
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
                        name: "transport_settings.xhttp_settings.uplink_data_key",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.uplinkDataKey") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.uplink_chunk_size",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.uplinkChunkSize") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "number",
                              ...field,
                              value: field.value ?? "",
                              onChange: (e) => {
                                const value = e.target.value;
                                field.onChange(value === "" ? null : parseInt(value, 10));
                              }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.xhttp.sessionSettings") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.session_placement",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.sessionPlacement") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "path", children: "Path" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "query", children: "Query" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "header", children: "Header" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cookie", children: "Cookie" })
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
                        name: "transport_settings.xhttp_settings.session_key",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.sessionKey") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.seq_placement",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.seqPlacement") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? void 0 : value), value: field.value ?? "__default", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.xhttp.defaultMode", { defaultValue: "Use default" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "path", children: "Path" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "query", children: "Query" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "header", children: "Header" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cookie", children: "Cookie" })
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
                        name: "transport_settings.xhttp_settings.seq_key",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.seqKey") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.xhttp.xmux") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.max_concurrency",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.maxConcurrency") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.max_connections",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.maxConnections") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.c_max_reuse_times",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.cMaxReuseTimes") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.h_max_reusable_secs",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.hMaxReusableSecs") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.h_max_request_times",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.hMaxRequestTimes") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "transport_settings.xhttp_settings.xmux.h_keep_alive_period",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 md:col-span-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.hKeepAlivePeriod") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "number",
                              ...field,
                              value: field.value ?? "",
                              onChange: (e) => {
                                const value = e.target.value;
                                field.onChange(value === "" ? null : parseInt(value, 10));
                              }
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
                        name: "transport_settings.xhttp_settings.download_settings",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2 w-full", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xhttp.downloadSettings") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.xhttp.downloadSettingsInfo") }) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Select,
                            {
                              onValueChange: (value) => field.onChange(value ? parseInt(value) : 0),
                              value: field.value?.toString() ?? "0",
                              disabled: isLoadingHosts,
                              onOpenChange: (open) => {
                                if (open) {
                                  queryClient.invalidateQueries({
                                    queryKey: ["getHostsQueryKey"]
                                  });
                                }
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: isLoadingHosts ? t("loading", { defaultValue: "Loading..." }) : t("hostsDialog.xhttp.selectDownloadSettings") }) }) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "w-full", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: t("none") }),
                                  isLoadingHosts ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__loading_hosts__", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
                                    t("loading", { defaultValue: "Loading..." })
                                  ] }) }) : hosts.map((host) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: host.id?.toString() ?? "", children: host.remark }, host.id))
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "grpc", className: "space-y-4 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.grpc_settings.multi_mode",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.grpc.multiMode") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.grpc_settings.idle_timeout",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.grpc.idleTimeout") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.grpc_settings.health_check_timeout",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.grpc.healthCheckTimeout") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.grpc_settings.permit_without_stream",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.grpc.permitWithoutStream") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: Boolean(field.value), onCheckedChange: field.onChange }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.grpc_settings.initial_windows_size",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.grpc.initialWindowsSize") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "kcp", className: "space-y-4 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.mtu",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.mtu") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.tti",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.tti") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.uplink_capacity",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.uplinkCapacity") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.downlink_capacity",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.downlinkCapacity") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.congestion",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.congestion") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: Boolean(field.value), onCheckedChange: field.onChange }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.read_buffer_size",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.readBufferSize") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.kcp_settings.write_buffer_size",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.kcp.writeBufferSize") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { dir, value: "tcp", className: "space-y-4 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "transport_settings.tcp_settings.header",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.header") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "__default" ? "" : value), value: field.value === "" || field.value == null ? "__default" : field.value, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__default", children: t("hostsDialog.tcp.defaultHeader", { defaultValue: "Use default" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "http", children: "HTTP" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                    ] })
                  }
                ) }),
                form.watch("transport_settings.tcp_settings.header") === "http" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.tcp.request.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "transport_settings.tcp_settings.request.version",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.request.version") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1.0", children: "HTTP/1.0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1.1", children: "HTTP/1.1" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2.0", children: "HTTP/2.0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3.0", children: "HTTP/3.0" })
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
                          name: "transport_settings.tcp_settings.request.method",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.request.method") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "GET", children: "GET" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "POST", children: "POST" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "PUT", children: "PUT" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DELETE", children: "DELETE" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HEAD", children: "HEAD" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "OPTIONS", children: "OPTIONS" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "PATCH", children: "PATCH" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "TRACE", children: "TRACE" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CONNECT", children: "CONNECT" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.tcp.requestHeaders") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "outline",
                            size: "icon",
                            className: "h-6 w-6",
                            onClick: () => {
                              const currentHeaders = form.getValues("transport_settings.tcp_settings.request.headers") || {};
                              const newKey = `header_${Object.keys(currentHeaders).length}`;
                              form.setValue(
                                "transport_settings.tcp_settings.request.headers",
                                {
                                  ...currentHeaders,
                                  [newKey]: [""]
                                },
                                {
                                  shouldDirty: true,
                                  shouldTouch: true
                                }
                              );
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                          }
                        )
                      ] }),
                      Object.entries(form.watch("transport_settings.tcp_settings.request.headers") || {}).map(([key, values]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(120px,1fr),1fr,auto] gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: t("hostsDialog.tcp.headerName"),
                            defaultValue: key,
                            onBlur: (e) => {
                              if (e.target.value !== key) {
                                const currentHeaders = { ...form.getValues("transport_settings.tcp_settings.request.headers") };
                                const oldValues = currentHeaders[key];
                                delete currentHeaders[key];
                                currentHeaders[e.target.value] = oldValues;
                                form.setValue("transport_settings.tcp_settings.request.headers", currentHeaders, {
                                  shouldDirty: true,
                                  shouldTouch: true
                                });
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: t("hostsDialog.tcp.headerValue"),
                            value: Array.isArray(values) ? values.join(", ") : "",
                            onChange: (e) => {
                              const tcpHeaderValues = e.target.value.split(",").map((v) => v.trim());
                              const tcpHeaders = { ...form.getValues("transport_settings.tcp_settings.request.headers") };
                              tcpHeaders[key] = tcpHeaderValues;
                              form.setValue("transport_settings.tcp_settings.request.headers", tcpHeaders, {
                                shouldDirty: true,
                                shouldTouch: true
                              });
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 shrink-0 border-red-500/20 transition-colors hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20",
                            onClick: () => {
                              const currentHeaders = { ...form.getValues("transport_settings.tcp_settings.request.headers") };
                              delete currentHeaders[key];
                              form.setValue("transport_settings.tcp_settings.request.headers", currentHeaders, {
                                shouldDirty: true,
                                shouldTouch: true
                              });
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" })
                          }
                        )
                      ] }, key))
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.tcp.response.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "transport_settings.tcp_settings.response.version",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.response.version") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1.0", children: "HTTP/1.0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1.1", children: "HTTP/1.1" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2.0", children: "HTTP/2.0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3.0", children: "HTTP/3.0" })
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
                          name: "transport_settings.tcp_settings.response.status",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.response.status") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...field, placeholder: "200", pattern: "[1-5]\\d{2}" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "transport_settings.tcp_settings.response.reason",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.tcp.response.reason") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: field.onChange, value: field.value || "", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectReason") }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "1xx Information" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Continue", children: t("hostsDialog.httpReasons.100") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Switching Protocols", children: t("hostsDialog.httpReasons.101") })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "2xx Success" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "OK", children: t("hostsDialog.httpReasons.200") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Created", children: t("hostsDialog.httpReasons.201") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Accepted", children: t("hostsDialog.httpReasons.202") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Non-Authoritative Information", children: t("hostsDialog.httpReasons.203") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "No Content", children: t("hostsDialog.httpReasons.204") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Reset Content", children: t("hostsDialog.httpReasons.205") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Partial Content", children: t("hostsDialog.httpReasons.206") })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "3xx Redirection" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Multiple Choices", children: t("hostsDialog.httpReasons.300") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Moved Permanently", children: t("hostsDialog.httpReasons.301") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Found", children: t("hostsDialog.httpReasons.302") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "See Other", children: t("hostsDialog.httpReasons.303") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Not Modified", children: t("hostsDialog.httpReasons.304") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Use Proxy", children: t("hostsDialog.httpReasons.305") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Temporary Redirect", children: t("hostsDialog.httpReasons.307") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Permanent Redirect", children: t("hostsDialog.httpReasons.308") })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "4xx Client Error" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Bad Request", children: t("hostsDialog.httpReasons.400") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unauthorized", children: t("hostsDialog.httpReasons.401") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Payment Required", children: t("hostsDialog.httpReasons.402") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Forbidden", children: t("hostsDialog.httpReasons.403") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Not Found", children: t("hostsDialog.httpReasons.404") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Method Not Allowed", children: t("hostsDialog.httpReasons.405") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Not Acceptable", children: t("hostsDialog.httpReasons.406") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Proxy Authentication Required", children: t("hostsDialog.httpReasons.407") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Request Timeout", children: t("hostsDialog.httpReasons.408") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Conflict", children: t("hostsDialog.httpReasons.409") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Gone", children: t("hostsDialog.httpReasons.410") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Length Required", children: t("hostsDialog.httpReasons.411") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Precondition Failed", children: t("hostsDialog.httpReasons.412") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Payload Too Large", children: t("hostsDialog.httpReasons.413") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "URI Too Long", children: t("hostsDialog.httpReasons.414") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unsupported Media Type", children: t("hostsDialog.httpReasons.415") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Range Not Satisfiable", children: t("hostsDialog.httpReasons.416") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Expectation Failed", children: t("hostsDialog.httpReasons.417") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "I'm a teapot", children: t("hostsDialog.httpReasons.418") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Misdirected Request", children: t("hostsDialog.httpReasons.421") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unprocessable Entity", children: t("hostsDialog.httpReasons.422") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Locked", children: t("hostsDialog.httpReasons.423") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Failed Dependency", children: t("hostsDialog.httpReasons.424") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Too Early", children: t("hostsDialog.httpReasons.425") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Upgrade Required", children: t("hostsDialog.httpReasons.426") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Precondition Required", children: t("hostsDialog.httpReasons.428") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Too Many Requests", children: t("hostsDialog.httpReasons.429") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Request Header Fields Too Large", children: t("hostsDialog.httpReasons.431") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Unavailable For Legal Reasons", children: t("hostsDialog.httpReasons.451") })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel, { children: "5xx Server Error" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Internal Server Error", children: t("hostsDialog.httpReasons.500") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Not Implemented", children: t("hostsDialog.httpReasons.501") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Bad Gateway", children: t("hostsDialog.httpReasons.502") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Service Unavailable", children: t("hostsDialog.httpReasons.503") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Gateway Timeout", children: t("hostsDialog.httpReasons.504") }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HTTP Version Not Supported", children: t("hostsDialog.httpReasons.505") })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.tcp.responseHeaders") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "outline",
                            size: "icon",
                            className: "h-6 w-6",
                            onClick: () => {
                              const currentHeaders = form.getValues("transport_settings.tcp_settings.response.headers") || {};
                              const newKey = `header_${Object.keys(currentHeaders).length}`;
                              form.setValue(
                                "transport_settings.tcp_settings.response.headers",
                                {
                                  ...currentHeaders,
                                  [newKey]: [""]
                                },
                                {
                                  shouldDirty: true,
                                  shouldTouch: true
                                }
                              );
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                          }
                        )
                      ] }),
                      Object.entries(form.watch("transport_settings.tcp_settings.response.headers") || {}).map(([key, values]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(120px,1fr),1fr,auto] gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: t("hostsDialog.tcp.headerName"),
                            defaultValue: key,
                            onBlur: (e) => {
                              if (e.target.value !== key) {
                                const currentHeaders = { ...form.getValues("transport_settings.tcp_settings.response.headers") };
                                const oldValues = currentHeaders[key];
                                delete currentHeaders[key];
                                currentHeaders[e.target.value] = oldValues;
                                form.setValue("transport_settings.tcp_settings.response.headers", currentHeaders, {
                                  shouldDirty: true,
                                  shouldTouch: true
                                });
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: t("hostsDialog.tcp.headerValue"),
                            value: values.join(", "),
                            onChange: (e) => {
                              const currentHeaders = { ...form.getValues("transport_settings.tcp_settings.response.headers") };
                              currentHeaders[key] = e.target.value.split(",").map((v) => v.trim());
                              form.setValue("transport_settings.tcp_settings.response.headers", currentHeaders, {
                                shouldDirty: true,
                                shouldTouch: true
                              });
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8 shrink-0 border-red-500/20 transition-colors hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20",
                            onClick: () => {
                              const currentHeaders = { ...form.getValues("transport_settings.tcp_settings.response.headers") };
                              delete currentHeaders[key];
                              form.setValue("transport_settings.tcp_settings.response.headers", currentHeaders, {
                                shouldDirty: true,
                                shouldTouch: true
                              });
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" })
                          }
                        )
                      ] }, key))
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "websocket", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  control: form.control,
                  name: "transport_settings.websocket_settings.heartbeatPeriod",
                  render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.websocket.heartbeatPeriod") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, onChange: (e) => field.onChange(e.target.value ? Number(e.target.value) : 0), value: field.value }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                  ] })
                }
              ) }) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "camouflag", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeftRightEllipsis, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.camouflagSettings") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "xray", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 grid w-full grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "xray", children: "Xray" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "singbox", children: "SingBox" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "xray", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 text-sm font-medium", children: [
                    t("hostsDialog.fragment.title"),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.fragment.info") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.fragment.info.attention") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.fragment.info.examples") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "overflow-hidden text-[11px] text-muted-foreground", children: "100-200,10-20,tlshello 100-200,10-20,1-3" })
                      ] }) })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "fragment_settings.xray.packets",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.fragment.packets") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.fragment.packetsPlaceholder"), ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "fragment_settings.xray.length",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.fragment.length") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.fragment.lengthPlaceholder"), ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "fragment_settings.xray.interval",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.fragment.interval") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("hostsDialog.fragment.intervalPlaceholder"), ...field, value: field.value || "" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.noise.title") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", className: "h-4 w-4 p-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" }) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-[320px] p-3", side: "right", align: "start", sideOffset: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.noise.info") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.noise.info.attention") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: t("hostsDialog.noise.info.examples") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "overflow-hidden text-[11px] text-muted-foreground", children: "rand:10-20,10-20 rand:10-20,10-20 &base64:7nQBAAABAAAAAAAABnQtcmluZwZtc2VkZ2UDbmV0AAABAAE=,10-25" })
                        ] }) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "icon", className: "h-6 w-6", onClick: addNoiseSetting, title: t("hostsDialog.noise.addNoise"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    noiseSettings.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(NoiseItem, { index, form, onRemove: removeNoiseSetting, onDuplicate: duplicateNoiseSetting, t }, index)),
                    noiseSettings.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center text-sm text-muted-foreground", children: t("hostsDialog.noise.noNoiseSettings") })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "singbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "flex items-center gap-2 text-sm font-medium", children: t("hostsDialog.fragment.title") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "fragment_settings.sing_box.fragment",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.fragment.fragment") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  ),
                  form.watch("fragment_settings.sing_box.fragment") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "fragment_settings.sing_box.fragment_fallback_delay",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.fragment.fallbackDelay") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. 100",
                              ...field,
                              value: field.value ? field.value.replace("ms", "") : "",
                              onChange: (e) => {
                                const value = e.target.value;
                                field.onChange(value);
                              },
                              title: "Enter a number (e.g., 100)"
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
                        name: "fragment_settings.sing_box.record_fragment",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.fragment.recordFragment") }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) }) })
                        ] })
                      }
                    )
                  ] })
                ] })
              ] }) }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { className: "rounded-sm border px-4 [&_[data-state=closed]]:no-underline [&_[data-state=open]]:no-underline", value: "mux", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cable, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("hostsDialog.muxSettings") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "xray", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 grid grid-cols-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "xray", children: "Xray" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "sing_box", children: "Sing-box" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "clash", children: "Clash" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "xray", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "mux_settings.xray.enabled",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.enableMux") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          checked: field.value || false,
                          onCheckedChange: (checked) => {
                            field.onChange(checked);
                            if (checked) {
                              form.setValue("mux_settings.sing_box.enable", false);
                              form.setValue("mux_settings.clash.enable", false);
                            }
                          }
                        }
                      ) }) })
                    ] })
                  }
                ),
                form.watch("mux_settings.xray.enabled") === true ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.xray.concurrency",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.concurrency") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.xray.xudp_concurrency",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xudpConcurrency") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.xray.xudp_proxy_443",
                      render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.xudpProxy443") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Select,
                          {
                            value: form.watch("mux_settings.xray.xudp_proxy_443") ?? "reject",
                            onValueChange: (value) => {
                              form.setValue("mux_settings.xray.xudp_proxy_443", value);
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("host.xudp_proxy_443") }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "reject", children: t("host.reject") }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "allow", children: t("host.allow") }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "skip", children: t("host.skip") })
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  )
                ] }) : null
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "sing_box", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "mux_settings.sing_box.enable",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.enableMux") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          checked: field.value || false,
                          onCheckedChange: (checked) => {
                            field.onChange(checked);
                            if (checked) {
                              form.setValue("mux_settings.xray.enabled", false);
                              form.setValue("mux_settings.clash.enable", false);
                            }
                          }
                        }
                      ) }) })
                    ] })
                  }
                ),
                form.watch("mux_settings.sing_box.enable") === true ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.sing_box.protocol",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.protocol") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "null" ? void 0 : value), value: field.value ?? "smux", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectProtocol") }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "smux", children: "smux" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yamux", children: "yamux" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "h2mux", children: "h2mux" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.sing_box.max_connections",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.maxConnections") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value || "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.sing_box.min_streams",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.minStreams") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value || "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.sing_box.max_streams",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.maxStreams") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value || "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.brutal.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.sing_box.brutal.enable",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.brutal.enable") }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value || false, onCheckedChange: field.onChange }) }) })
                        ] })
                      }
                    ),
                    form.watch("mux_settings.sing_box.brutal.enable") === true ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "mux_settings.sing_box.brutal.up_mbps",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.brutal.upMbps") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value || "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "mux_settings.sing_box.brutal.down_mbps",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.brutal.downMbps") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value || "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      )
                    ] }) : null
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.sing_box.padding",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.padding") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value || false, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  )
                ] }) : null
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { dir, value: "clash", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "mux_settings.clash.enable",
                    render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.enableMux") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          checked: field.value || false,
                          onCheckedChange: (checked) => {
                            field.onChange(checked);
                            if (checked) {
                              form.setValue("mux_settings.xray.enabled", false);
                              form.setValue("mux_settings.sing_box.enable", false);
                            }
                          }
                        }
                      ) }) })
                    ] })
                  }
                ),
                form.watch("mux_settings.clash.enable") === true ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.clash.protocol",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.protocol") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => field.onChange(value === "null" ? void 0 : value), value: field.value ?? "smux", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("hostsDialog.selectProtocol") }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "smux", children: "smux" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yamux", children: "yamux" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "h2mux", children: "h2mux" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.clash.max_connections",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.maxConnections") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.clash.min_streams",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.minStreams") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.clash.max_streams",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.maxStreams") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                        ] })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: t("hostsDialog.brutal.title") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FormField,
                      {
                        control: form.control,
                        name: "mux_settings.clash.brutal.enable",
                        render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.brutal.enable") }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value || false, onCheckedChange: field.onChange }) }) })
                        ] })
                      }
                    ),
                    form.watch("mux_settings.clash.brutal.enable") === true ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "mux_settings.clash.brutal.up_mbps",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.brutal.upMbps") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FormField,
                        {
                          control: form.control,
                          name: "mux_settings.clash.brutal.down_mbps",
                          render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: t("hostsDialog.brutal.downMbps") }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", ...field, value: field.value ?? "", onChange: (e) => field.onChange(e.target.value ? parseInt(e.target.value) : null) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
                          ] })
                        }
                      )
                    ] }) : null
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.clash.padding",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.padding") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value ?? false, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.clash.statistic",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.statistic") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value ?? false, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    FormField,
                    {
                      control: form.control,
                      name: "mux_settings.clash.only_tcp",
                      render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { className: "flex cursor-pointer flex-row items-center justify-between rounded-lg border p-4", onClick: () => field.onChange(!field.value), children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-base", children: t("hostsDialog.onlyTcp") }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: field.value ?? false, onCheckedChange: field.onChange }) }) })
                      ] })
                    }
                  )
                ] }) : null
              ] }) })
            ] }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => handleModalOpenChange(false), children: t("cancel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderButton, { type: "submit", disabled: form.formState.isSubmitting, isLoading: form.formState.isSubmitting, loadingText: editingHost ? t("modifying") : t("creating"), children: editingHost ? t("modify") : t("create") })
      ] })
    ] }) })
  ] }) });
};
const transportSettingsSchema = objectType({
  xhttp_settings: objectType({
    mode: enumType(["", "auto", "packet-up", "stream-up", "stream-one"]).nullish().optional(),
    no_grpc_header: booleanType().nullish().optional(),
    x_padding_bytes: stringType().nullish().optional(),
    x_padding_obfs_mode: booleanType().nullish().optional(),
    x_padding_key: stringType().nullish().optional(),
    x_padding_header: stringType().nullish().optional(),
    x_padding_placement: stringType().nullish().optional(),
    x_padding_method: stringType().nullish().optional(),
    uplink_http_method: stringType().nullish().optional(),
    session_placement: stringType().nullish().optional(),
    session_key: stringType().nullish().optional(),
    seq_placement: stringType().nullish().optional(),
    seq_key: stringType().nullish().optional(),
    uplink_data_placement: stringType().nullish().optional(),
    uplink_data_key: stringType().nullish().optional(),
    uplink_chunk_size: numberType().nullish().optional(),
    sc_max_each_post_bytes: stringType().nullish().optional(),
    sc_min_posts_interval_ms: stringType().nullish().optional(),
    download_settings: numberType().nullish().optional(),
    xmux: objectType({
      max_concurrency: stringType().nullish().optional(),
      max_connections: stringType().nullish().optional(),
      c_max_reuse_times: stringType().nullish().optional(),
      h_max_reusable_secs: stringType().nullish().optional(),
      h_max_request_times: stringType().nullish().optional(),
      h_keep_alive_period: numberType().nullish().optional()
    }).nullish().optional()
  }).nullish().optional(),
  grpc_settings: objectType({
    multi_mode: booleanType().nullish().optional(),
    idle_timeout: numberType().nullish().optional(),
    health_check_timeout: numberType().nullish().optional(),
    permit_without_stream: booleanType().nullish().optional(),
    initial_windows_size: numberType().nullish().optional()
  }).nullish().optional(),
  kcp_settings: objectType({
    mtu: numberType().nullish().optional(),
    tti: numberType().nullish().optional(),
    uplink_capacity: numberType().nullish().optional(),
    downlink_capacity: numberType().nullish().optional(),
    congestion: booleanType().nullish().optional(),
    read_buffer_size: numberType().nullish().optional(),
    write_buffer_size: numberType().nullish().optional()
  }).nullish().optional(),
  tcp_settings: objectType({
    header: enumType(["none", "http", ""]).nullish().optional(),
    request: objectType({
      version: enumType(["1.0", "1.1", "2.0", "3.0"]).nullish().optional(),
      method: enumType(["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH", "TRACE", "CONNECT"]).nullish().optional(),
      headers: recordType(arrayType(stringType())).nullish().optional()
    }).nullish().optional(),
    response: objectType({
      version: enumType(["1.0", "1.1", "2.0", "3.0"]).nullish().optional(),
      status: stringType().regex(/^[1-5]\d{2}$/).nullish().optional(),
      reason: enumType([
        "Continue",
        "Switching Protocols",
        "OK",
        "Created",
        "Accepted",
        "Non-Authoritative Information",
        "No Content",
        "Reset Content",
        "Partial Content",
        "Multiple Choices",
        "Moved Permanently",
        "Found",
        "See Other",
        "Not Modified",
        "Use Proxy",
        "Temporary Redirect",
        "Permanent Redirect",
        "Bad Request",
        "Unauthorized",
        "Payment Required",
        "Forbidden",
        "Not Found",
        "Method Not Allowed",
        "Not Acceptable",
        "Proxy Authentication Required",
        "Request Timeout",
        "Conflict",
        "Gone",
        "Length Required",
        "Precondition Failed",
        "Payload Too Large",
        "URI Too Long",
        "Unsupported Media Type",
        "Range Not Satisfiable",
        "Expectation Failed",
        "I'm a teapot",
        "Misdirected Request",
        "Unprocessable Entity",
        "Locked",
        "Failed Dependency",
        "Too Early",
        "Upgrade Required",
        "Precondition Required",
        "Too Many Requests",
        "Request Header Fields Too Large",
        "Unavailable For Legal Reasons",
        "Internal Server Error",
        "Not Implemented",
        "Bad Gateway",
        "Service Unavailable",
        "Gateway Timeout",
        "HTTP Version Not Supported"
      ]).nullish().optional(),
      headers: recordType(arrayType(stringType())).nullish().optional()
    }).nullish().optional()
  }).nullish().optional(),
  websocket_settings: objectType({
    heartbeatPeriod: numberType().nullish().optional()
  }).nullish().optional()
}).nullish().optional();
const HostFormSchema = objectType({
  remark: stringType().min(1, "Remark is required"),
  address: arrayType(stringType()).min(1, "At least one address is required"),
  port: numberType().min(1, "Port must be at least 1").max(65535, "Port must be at most 65535").optional().or(literalType("")),
  inbound_tag: stringType().min(1, "Inbound tag is required"),
  status: arrayType(stringType()).default([]),
  host: arrayType(stringType()).default([]),
  sni: arrayType(stringType()).default([]),
  path: stringType().default(""),
  http_headers: recordType(stringType()).default({}),
  security: enumType(["inbound_default", "tls", "none"]).default("inbound_default"),
  alpn: arrayType(stringType()).default([]),
  fingerprint: stringType().default(""),
  allowinsecure: booleanType().default(false),
  random_user_agent: booleanType().default(false),
  use_sni_as_host: booleanType().default(false),
  vless_route: unionType([literalType(""), stringType().regex(/^[0-9a-fA-F]{4}$/, "VLESS route must be exactly 4 hex characters")]).optional(),
  priority: numberType().default(0),
  is_disabled: booleanType().default(false),
  ech_config_list: stringType().optional(),
  pinned_peer_cert_sha256: stringType().max(128, "Pinned peer cert SHA256 must be at most 128 characters").optional(),
  verify_peer_cert_by_name: arrayType(stringType()).default([]),
  fragment_settings: objectType({
    xray: objectType({
      packets: stringType().optional(),
      length: stringType().optional(),
      interval: stringType().optional()
    }).optional(),
    sing_box: objectType({
      fragment: booleanType().optional(),
      fragment_fallback_delay: stringType().optional(),
      record_fragment: booleanType().optional()
    }).optional()
  }).optional(),
  noise_settings: objectType({
    xray: arrayType(
      objectType({
        type: stringType().regex(/^(?:rand|str|base64|hex)$/).optional(),
        packet: stringType().optional(),
        delay: stringType().optional().refine((val) => !val || /^\d{1,16}(-\d{1,16})?$/.test(val), {
          message: "Delay must be in format like '10-20' or '10'"
        }),
        apply_to: enumType(["ip", "ipv4", "ipv6"]).default("ip")
      })
    ).optional()
  }).optional(),
  mux_settings: objectType({
    xray: objectType({
      enabled: booleanType().optional(),
      concurrency: numberType().nullable().optional(),
      xudp_concurrency: numberType().nullable().optional(),
      xudp_proxy_443: enumType(["reject", "allow", "skip"]).nullable().optional()
    }).optional(),
    sing_box: objectType({
      enable: booleanType().optional(),
      protocol: enumType(["none", "smux", "yamux", "h2mux"]).default("smux"),
      max_connections: numberType().nullable().optional(),
      max_streams: numberType().nullable().optional(),
      min_streams: numberType().nullable().optional(),
      padding: booleanType().nullable().optional(),
      brutal: objectType({
        enable: booleanType().optional(),
        up_mbps: numberType().nullable().optional(),
        down_mbps: numberType().nullable().optional()
      }).nullable().optional()
    }).optional(),
    clash: objectType({
      enable: booleanType().optional(),
      protocol: enumType(["none", "smux", "yamux", "h2mux"]).default("smux"),
      max_connections: numberType().nullable().optional(),
      max_streams: numberType().nullable().optional(),
      min_streams: numberType().nullable().optional(),
      padding: booleanType().nullable().optional(),
      brutal: objectType({
        enable: booleanType().optional(),
        up_mbps: numberType().nullable().optional(),
        down_mbps: numberType().nullable().optional()
      }).nullable().optional(),
      statistic: booleanType().nullable().optional(),
      only_tcp: booleanType().nullable().optional()
    }).optional()
  }).optional(),
  transport_settings: transportSettingsSchema
});
const hostFormDefaultValues = {
  remark: "",
  address: [],
  port: void 0,
  inbound_tag: "",
  status: [],
  host: [],
  sni: [],
  path: "",
  http_headers: {},
  security: "inbound_default",
  alpn: [],
  fingerprint: "",
  allowinsecure: false,
  is_disabled: false,
  random_user_agent: false,
  use_sni_as_host: false,
  vless_route: "",
  priority: 0,
  ech_config_list: void 0,
  pinned_peer_cert_sha256: void 0,
  verify_peer_cert_by_name: [],
  fragment_settings: void 0
};
export {
  ChevronsLeftRightEllipsis as C,
  HostFormSchema as H,
  HostModal as a,
  hostFormDefaultValues as h
};
//# sourceMappingURL=host-form-Bt-x8Gt5.js.map
