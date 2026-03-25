import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { f as createLucideIcon, a as useDirDetection, U as UsernameGenerationStrategy, z as useGetUserTemplates, A as useBulkCreateUsersFromTemplate, c as cn, t as toast } from "./index-C_i3x-Gf.js";
import { d as useNavigate } from "./react-router-C8FEAJQh.js";
import { B as Button } from "./button-BOH66nN-.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { L as Label } from "./label-D6GrbpFd.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle, d as CardDescription } from "./card-5ZQOfa_i.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { T as Textarea } from "./textarea-DCwXPG8n.js";
import { C as CopyButton } from "./copy-button-w-Carjcl.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BlwcMUxd.js";
import { S as ScanQrCode, Q as QRCodeCanvas, a as QrCode } from "./index-q_7POt-d.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { u as useClipboard } from "./use-clipboard-C58gzIEw.js";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { A as Alert, a as AlertTitle, b as AlertDescription } from "./alert-ttU4wGEU.js";
import { f as formatBytes } from "./formatByte-CB667FGk.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { F as FileText } from "./file-text-Bc5F7-8C.js";
import { A as ArrowLeft } from "./arrow-left-DMT5rtcc.js";
import { C as CircleCheck } from "./circle-check-CPuiTWET.js";
import { C as Check } from "./check-ayw17ogi.js";
import { C as Copy } from "./copy-yeuAYUwv.js";
import { U as UserPlus } from "./user-plus-DhrLAmNz.js";
import { U as Users } from "./users-CleGz3MO.js";
import { S as Sparkles } from "./sparkles-Dy4LjvEF.js";
import { T as TriangleAlert } from "./triangle-alert-BIvtHAaj.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
import "./radix-3Azqn93X.js";
import "./chevron-down-CYTM5oAI.js";
import "./link-DcyOR6Xn.js";
import "./x-C6aLLO-Y.js";
const FileQuestion = createLucideIcon("FileQuestion", [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
]);
const Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
const QRCodeModal = reactExports.memo(({ subscribeUrl, username, onCloseModal }) => {
  const isOpen = subscribeUrl !== null;
  const { t } = useTranslation();
  const dir = useDirDetection();
  const subscribeQrLink = String(subscribeUrl).startsWith("/") ? window.location.origin + subscribeUrl : String(subscribeUrl);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: onCloseModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[100dvh] max-w-[425px] overflow-y-auto overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScanQrCode, { className: "h-8 w-8" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "flex w-full justify-center overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-center justify-center gap-y-4 py-4 px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center overflow-hidden max-w-[calc(100vw-80px)] sm:max-w-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        QRCodeCanvas,
        {
          value: subscribeQrLink,
          size: 300,
          className: "rounded-md bg-white p-2 w-full max-w-full h-auto"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center", children: t("qrcodeDialog.sublink", { username, defaultValue: "{{username}}'s Subscribe Link" }) })
    ] }) })
  ] }) });
});
function BulkCreateUsersPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dir = useDirDetection();
  const isRTL = dir === "rtl";
  const [selectedTemplateId, setSelectedTemplateId] = reactExports.useState();
  const [baseUsername, setBaseUsername] = reactExports.useState("");
  const [userCount, setUserCount] = reactExports.useState("1");
  const [strategy, setStrategy] = reactExports.useState(
    UsernameGenerationStrategy.sequence
  );
  const [startNumber, setStartNumber] = reactExports.useState("1");
  const [note, setNote] = reactExports.useState("");
  const [touchedFields, setTouchedFields] = reactExports.useState(/* @__PURE__ */ new Set());
  const [createdUrls, setCreatedUrls] = reactExports.useState([]);
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [selectedQRUrl, setSelectedQRUrl] = reactExports.useState(null);
  const [selectedQRUsername, setSelectedQRUsername] = reactExports.useState("");
  const [previewUsernames, setPreviewUsernames] = reactExports.useState([]);
  const { data: templatesData, isLoading: templatesLoading } = useGetUserTemplates({ limit: 100, offset: 0 });
  const createMutation = useBulkCreateUsersFromTemplate();
  const templates = templatesData || [];
  const selectedTemplate = templates.find((t2) => t2.id === selectedTemplateId);
  reactExports.useEffect(() => {
    if (templates.length > 0 && !selectedTemplateId) {
      setSelectedTemplateId(templates[0].id);
    }
  }, [templates, selectedTemplateId]);
  const handleCreate = () => {
    setTouchedFields(/* @__PURE__ */ new Set(["userCount", "baseUsername", "startNumber"]));
    if (!selectedTemplateId) {
      toast.error(t("error"), { description: t("bulk.create.selectTemplateError") });
      return;
    }
    const parsedUserCount = parseInt(userCount) || 0;
    if (!userCount || parsedUserCount < 1 || parsedUserCount > 500) {
      toast.error(t("error"), { description: t("bulk.create.invalidCount") });
      return;
    }
    if (strategy === UsernameGenerationStrategy.sequence && !baseUsername) {
      toast.error(t("error"), { description: t("bulk.create.baseUsernameRequired") });
      return;
    }
    const parsedStartNumber = parseInt(startNumber) || 1;
    const payload = {
      user_template_id: selectedTemplateId,
      count: parsedUserCount,
      // When strategy is 'random', username must be null
      username: strategy === UsernameGenerationStrategy.random ? null : baseUsername || void 0,
      strategy,
      start_number: strategy === UsernameGenerationStrategy.sequence && parsedStartNumber > 1 ? parsedStartNumber : void 0,
      note: note || void 0
    };
    createMutation.mutate(
      { data: payload },
      {
        onSuccess: (response) => {
          const urls = response.subscription_urls || [];
          const createdCount = response.created || 0;
          if (createdCount === 0) {
            toast.error(
              t("bulk.create.failed"),
              { description: t("bulk.create.allUsersExist") }
            );
            return;
          }
          setCreatedUrls(urls);
          setShowSuccess(true);
          toast.success(
            t("bulk.create.success"),
            {
              description: t("bulk.create.created", {
                count: createdCount
              })
            }
          );
          setBaseUsername("");
          setUserCount("1");
          setStartNumber("1");
          setNote("");
        },
        onError: (error) => {
          toast.error(
            t("bulk.create.failed"),
            { description: error?.message || JSON.stringify(error) }
          );
        }
      }
    );
  };
  const { copy: copyAll, copied: allCopied } = useClipboard({ timeout: 2e3 });
  const copyAllUrls = async () => {
    const text = createdUrls.join("\n");
    await copyAll(text);
  };
  const getStrategyLabel = (strat) => {
    switch (strat) {
      case UsernameGenerationStrategy.sequence:
        return t("bulk.create.strategy.sequence");
      case UsernameGenerationStrategy.random:
        return t("bulk.create.strategy.random");
      default:
        return strat;
    }
  };
  reactExports.useEffect(() => {
    const previews = [];
    const parsedUserCount = parseInt(userCount) || 0;
    const parsedStartNumber = parseInt(startNumber) || 1;
    const prefix = selectedTemplate?.username_prefix || "";
    const suffix = selectedTemplate?.username_suffix || "";
    if (strategy === UsernameGenerationStrategy.sequence) {
      if (!baseUsername || parsedUserCount === 0) {
        setPreviewUsernames([]);
        return;
      }
      for (let i = 0; i < Math.min(3, parsedUserCount); i++) {
        const username = `${prefix}${baseUsername}${parsedStartNumber + i}${suffix}`;
        previews.push(username);
      }
    } else if (strategy === UsernameGenerationStrategy.random) {
      if (parsedUserCount === 0) {
        setPreviewUsernames([]);
        return;
      }
      for (let i = 0; i < Math.min(3, parsedUserCount); i++) {
        const stableSeed = `preview-${i}-${parsedUserCount}`.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const randomPart = stableSeed.toString(36).substring(0, 6).padStart(6, "0");
        const username = `${prefix}user-${randomPart}${suffix}`;
        previews.push(username);
      }
    }
    setPreviewUsernames(previews);
  }, [baseUsername, userCount, strategy, startNumber, selectedTemplate]);
  if (!templatesLoading && templates.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-1 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center justify-center space-y-4 py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-muted p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestion, { className: "h-10 w-10 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: t("bulk.create.noTemplates") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("bulk.create.noTemplatesDesc") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate("/templates"), size: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: cn("h-4 w-4", isRTL ? "ml-2" : "mr-2") }),
        t("bulk.create.createTemplate")
      ] })
    ] }) }) });
  }
  if (showSuccess && createdUrls.length > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            setShowSuccess(false);
            setCreatedUrls([]);
          },
          className: "mb-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: cn("h-4 w-4", isRTL ? "ml-2 rotate-180" : "mr-2") }),
            t("back")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 dark:text-green-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { className: "text-green-800 dark:text-green-200", children: t("bulk.create.successTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-green-700 dark:text-green-300", children: t("bulk.create.successDescription", {
          count: createdUrls.length
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base sm:text-lg", children: t("bulk.create.subscriptionUrls") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: t("bulk.create.subscriptionUrlsDesc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { open: allCopied ? true : void 0, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: copyAllUrls, variant: "outline", size: "sm", className: "w-full sm:w-auto", children: allCopied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: cn("h-4 w-4", isRTL ? "ml-2" : "mr-2") }),
              t("copied")
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: cn("h-4 w-4", isRTL ? "ml-2" : "mr-2") }),
              t("copyAll")
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: allCopied ? t("copied") : t("copyAll") }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir: "ltr", className: "max-h-[60vh] space-y-2 overflow-y-auto rounded-md border p-3", children: createdUrls.map((url, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group flex items-center gap-2 rounded-md border bg-muted/50 p-2 transition-colors hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs", children: url }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CopyButton,
                {
                  value: url,
                  className: "h-8 w-8 shrink-0",
                  copiedMessage: "copied",
                  defaultMessage: "clickToCopy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => {
                    setSelectedQRUrl(url);
                    setSelectedQRUsername(t("bulk.create.user", { number: index + 1, defaultValue: "User {{number}}" }));
                  },
                  className: "h-8 w-8 shrink-0",
                  title: t("qrcodeDialog.sublink"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-4 w-4" })
                }
              )
            ]
          },
          index
        )) }) })
      ] }),
      selectedQRUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        QRCodeModal,
        {
          subscribeUrl: selectedQRUrl,
          username: selectedQRUsername,
          onCloseModal: () => {
            setSelectedQRUrl(null);
            setSelectedQRUsername("");
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base sm:text-lg", children: t("bulk.create.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs sm:text-sm", children: t("bulk.create.description") })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 relative", children: [
        createMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t("bulk.create.creating") })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "template", className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }),
            t("bulk.create.selectTemplate")
          ] }),
          templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: selectedTemplateId?.toString(),
              onValueChange: (value) => setSelectedTemplateId(Number(value)),
              disabled: createMutation.isPending,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("bulk.create.selectTemplatePlaceholder") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: templates.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: template.id.toString(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: template.name || t("unnamed") }),
                  template.is_disabled && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: t("disabled") })
                ] }) }, template.id)) })
              ]
            }
          ),
          templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-muted/50 p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
          ] }) : selectedTemplate ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-muted/50 p-3 text-xs sm:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            selectedTemplate.username_prefix && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("templates.prefix"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium font-mono", children: selectedTemplate.username_prefix })
            ] }),
            selectedTemplate.username_suffix && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("templates.suffix"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium font-mono", children: selectedTemplate.username_suffix })
            ] }),
            selectedTemplate.data_limit !== null && selectedTemplate.data_limit !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("userDialog.dataLimit"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", dir: "ltr", children: formatBytes(selectedTemplate.data_limit) })
            ] }),
            selectedTemplate.expire_duration !== null && selectedTemplate.expire_duration !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("expire"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                Math.floor(selectedTemplate.expire_duration / 86400),
                t("dateInfo.day")
              ] })
            ] }),
            selectedTemplate.group_ids && selectedTemplate.group_ids.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                t("groups"),
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                selectedTemplate.group_ids.length,
                " ",
                i18n.language === "fa" ? "گروه" : t("groups")
              ] })
            ] })
          ] }) }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-muted-foreground" }),
            t("bulk.create.userConfiguration")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "count", className: "text-sm", children: t("bulk.create.userCount") }),
              templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "count",
                    type: "number",
                    min: "1",
                    max: "500",
                    value: userCount,
                    onChange: (e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setUserCount("");
                      } else {
                        const numValue = parseInt(value);
                        if (!isNaN(numValue) && numValue > 0) {
                          setUserCount(String(Math.min(500, Math.max(1, numValue))));
                        }
                      }
                      setTouchedFields((prev) => new Set(prev).add("userCount"));
                    },
                    onBlur: () => setTouchedFields((prev) => new Set(prev).add("userCount")),
                    className: cn("h-10", !userCount && touchedFields.has("userCount") && "border-destructive"),
                    disabled: createMutation.isPending
                  }
                ),
                !userCount && touchedFields.has("userCount") ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: t("validation.required", { field: t("bulk.create.userCount"), defaultValue: "User count is required" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("bulk.create.maxUsers") })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "strategy", className: "text-sm", children: t("bulk.create.usernameStrategy") }),
              templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: strategy,
                  onValueChange: (value) => {
                    setStrategy(value);
                    if (value === UsernameGenerationStrategy.random) {
                      setBaseUsername("");
                    }
                  },
                  disabled: createMutation.isPending,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.values(UsernameGenerationStrategy).map((strat) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: strat, children: getStrategyLabel(strat) }, strat)) })
                  ]
                }
              )
            ] })
          ] }),
          strategy === UsernameGenerationStrategy.sequence && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "baseUsername", className: "text-sm", children: t("bulk.create.baseUsername") }),
            templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "baseUsername",
                  value: baseUsername,
                  onChange: (e) => {
                    setBaseUsername(e.target.value);
                    setTouchedFields((prev) => new Set(prev).add("baseUsername"));
                  },
                  onBlur: () => setTouchedFields((prev) => new Set(prev).add("baseUsername")),
                  placeholder: t("bulk.create.baseUsernamePlaceholder"),
                  className: cn("h-10", !baseUsername && touchedFields.has("baseUsername") && "border-destructive"),
                  disabled: createMutation.isPending
                }
              ),
              !baseUsername && touchedFields.has("baseUsername") ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: t("validation.required", { field: t("bulk.create.baseUsername"), defaultValue: "Base username is required" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("bulk.create.baseUsernameHelp") })
            ] })
          ] }),
          strategy === UsernameGenerationStrategy.sequence && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "startNumber", className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3.5 w-3.5" }),
              t("bulk.create.startNumber")
            ] }),
            templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "startNumber",
                  type: "number",
                  min: "1",
                  value: startNumber,
                  onChange: (e) => {
                    const value = e.target.value;
                    if (value === "") {
                      setStartNumber("");
                    } else {
                      const numValue = parseInt(value);
                      if (!isNaN(numValue) && numValue > 0) {
                        setStartNumber(String(Math.max(1, numValue)));
                      }
                    }
                    setTouchedFields((prev) => new Set(prev).add("startNumber"));
                  },
                  onBlur: () => setTouchedFields((prev) => new Set(prev).add("startNumber")),
                  className: cn("h-10", !startNumber && touchedFields.has("startNumber") && "border-destructive"),
                  disabled: createMutation.isPending
                }
              ),
              !startNumber && touchedFields.has("startNumber") ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: t("validation.required", { field: t("bulk.create.startNumber"), defaultValue: "Start number is required" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t("bulk.create.startNumberHelp") })
            ] })
          ] }),
          previewUsernames.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-primary/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t("bulk.create.preview") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              previewUsernames.map((username, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-mono text-xs", children: username }, index)),
              parseInt(userCount) > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                "+",
                parseInt(userCount) - 3,
                " ",
                t("more")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "note", className: "text-sm", children: t("bulk.create.note") }),
          templatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "note",
              value: note,
              onChange: (e) => setNote(e.target.value),
              placeholder: t("bulk.create.notePlaceholder"),
              rows: 3,
              className: "resize-none",
              disabled: createMutation.isPending
            }
          )
        ] }),
        strategy === UsernameGenerationStrategy.sequence && !baseUsername && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { className: "text-sm", children: t("error") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-xs", children: t("bulk.create.baseUsernameRequired") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: handleCreate,
        disabled: createMutation.isPending || !selectedTemplateId || !userCount || parseInt(userCount) < 1 || parseInt(userCount) > 500 || strategy === UsernameGenerationStrategy.sequence && !baseUsername,
        size: "lg",
        className: cn(
          "w-full sm:w-auto sm:min-w-[200px]",
          createMutation.isPending && "animate-pulse"
        ),
        children: createMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent", isRTL ? "ml-2" : "mr-2") }),
          t("bulk.create.creating")
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: cn("h-4 w-4", isRTL ? "ml-2" : "mr-2") }),
          t("bulk.create.createUsers", { count: parseInt(userCount) || 0 })
        ] })
      }
    ) })
  ] });
}
export {
  BulkCreateUsersPage as default
};
//# sourceMappingURL=_dashboard.bulk.create-D5d62zyk.js.map
