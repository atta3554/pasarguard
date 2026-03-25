import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { A as Alert, b as AlertDescription } from "./alert-ttU4wGEU.js";
import { A as AlertDialog, h as AlertDialogTrigger, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-D4N4v88d.js";
import { B as Button } from "./button-BOH66nN-.js";
import { C as Card, b as CardHeader, c as CardTitle, d as CardDescription, a as CardContent } from "./card-5ZQOfa_i.js";
import { C as Command, a as CommandInput, e as CommandList, b as CommandEmpty, d as CommandItem } from "./command-AnChkD8Y.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, e as SelectItem } from "./select-BbTZrRYf.js";
import { D as DatePicker, f as formatDateByLocale } from "./date-picker-R6TlQCrv.js";
import { a as useDirDetection, ai as useGetCurrentAdmin, n as useGetAdmins, aj as useDeleteExpiredUsers, ak as useResetUsersDataUsage, al as useClearUsageData, c as cn, L as LoaderCircle, t as toast } from "./index-C_i3x-Gf.js";
import { u as useDebouncedSearch } from "./use-debounced-search-CgdykSdk.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { D as Database } from "./database-Ym3sipoZ.js";
import { U as UserCog } from "./user-cog-DuWOXNmv.js";
import { U as UserRound } from "./user-round-3wZ7ngKm.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { C as Check } from "./check-ayw17ogi.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { T as TriangleAlert } from "./triangle-alert-BIvtHAaj.js";
import { R as RotateCcw } from "./rotate-ccw-DRnRH3H4.js";
import { S as Server } from "./server-B7Dz_76B.js";
import "./radix-3Azqn93X.js";
import "./dialog-BlwcMUxd.js";
import "./x-C6aLLO-Y.js";
import "./search-DGfkalst.js";
import "./chevron-left-Bre8eEMe.js";
import "./chevron-right-DkXHvvEa.js";
import "./input-BtfO4I3L.js";
import "./use-mobile-mll3IbV8.js";
import "./userPreferenceStorage-DH2hTFsa.js";
import "./calendar-BM3jGkln.js";
import "./react-query-DMC2nZO-.js";
import "./react-router-C8FEAJQh.js";
import "./recharts-B0278qLa.js";
import "./debounce-DDhqqvFm.js";
const PAGE_SIZE = 20;
function CleanupSettings() {
  const { t, i18n } = useTranslation();
  const dir = useDirDetection();
  const isPersianLocale = i18n.language === "fa";
  const [deleteTarget, setDeleteTarget] = reactExports.useState("expired");
  const [expiredAfter, setExpiredAfter] = reactExports.useState();
  const [expiredBefore, setExpiredBefore] = reactExports.useState();
  const [selectedTable, setSelectedTable] = reactExports.useState("");
  const [clearDataAfter, setClearDataAfter] = reactExports.useState();
  const [clearDataBefore, setClearDataBefore] = reactExports.useState();
  const { data: currentAdmin } = useGetCurrentAdmin();
  const is_sudo = currentAdmin?.is_sudo || false;
  const [selectedAdmin, setSelectedAdmin] = reactExports.useState();
  const [offset, setOffset] = reactExports.useState(0);
  const [admins, setAdmins] = reactExports.useState([]);
  const [hasMore, setHasMore] = reactExports.useState(true);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const listRef = reactExports.useRef(null);
  const { debouncedSearch: adminSearch, setSearch: setAdminSearchInput } = useDebouncedSearch("", 300);
  reactExports.useEffect(() => {
    setOffset(0);
    setAdmins([]);
    setHasMore(true);
  }, [adminSearch]);
  let usernameParam = void 0;
  if (adminSearch && adminSearch !== "system" && adminSearch !== currentAdmin?.username) {
    usernameParam = adminSearch;
  }
  const { data: fetchedAdminsResponse } = useGetAdmins(
    {
      limit: PAGE_SIZE,
      offset,
      ...usernameParam ? { username: usernameParam } : {}
    },
    {
      query: {
        enabled: is_sudo
      }
    }
  );
  reactExports.useEffect(() => {
    if (fetchedAdminsResponse) {
      const fetchedAdmins = fetchedAdminsResponse.admins || [];
      setAdmins((prev) => offset === 0 ? fetchedAdmins : [...prev, ...fetchedAdmins]);
      setHasMore(fetchedAdmins.length === PAGE_SIZE);
      setIsLoading(false);
    }
  }, [fetchedAdminsResponse, offset]);
  const handleScroll = reactExports.useCallback(() => {
    if (!listRef.current || isLoading || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop - clientHeight < 100) {
      setIsLoading(true);
      setOffset((prev) => prev + PAGE_SIZE);
    }
  }, [isLoading, hasMore]);
  reactExports.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const deleteExpiredUsersMutation = useDeleteExpiredUsers();
  const resetUsersDataUsageMutation = useResetUsersDataUsage();
  const clearUsageDataMutation = useClearUsageData();
  const usageDataTables = [
    { value: "node_user_usages", label: t("settings.cleanup.clearUsageData.tables.nodeUserUsages") },
    { value: "node_usages", label: t("settings.cleanup.clearUsageData.tables.nodeUsages") }
  ];
  const handleDeleteExpired = async () => {
    const target = deleteTarget;
    const params = { target };
    if (target === "expired") {
      if (expiredAfter) params.expired_after = expiredAfter.toISOString();
      if (expiredBefore) params.expired_before = expiredBefore.toISOString();
    }
    if (selectedAdmin) params.admin_username = selectedAdmin.username;
    deleteExpiredUsersMutation.mutate(
      { params: Object.keys(params).length > 0 ? params : void 0 },
      {
        onSuccess: (response) => {
          const count = response?.count || 0;
          toast.success(
            target === "limited" ? t("settings.cleanup.expiredUsers.deleteLimitedSuccess", { count }) : t("settings.cleanup.expiredUsers.deleteSuccess", { count })
          );
        },
        onError: (error) => {
          const failureMessageKey = target === "limited" ? "settings.cleanup.expiredUsers.deleteLimitedFailed" : "settings.cleanup.expiredUsers.deleteFailed";
          let errorMessage = t(failureMessageKey);
          if (error?.data?.detail) {
            const detail = error.data.detail;
            if (typeof detail === "string") {
              errorMessage = detail;
            } else if (typeof detail === "object" && !Array.isArray(detail)) {
              const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
              errorMessage = fieldErrors;
            }
          } else if (error?.response?.data?.detail) {
            const detail = error.response.data.detail;
            if (typeof detail === "string") {
              errorMessage = detail;
            } else if (typeof detail === "object" && !Array.isArray(detail)) {
              const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
              errorMessage = fieldErrors;
            }
          } else if (error?.message) {
            errorMessage = error.message;
          }
          toast.error(t(failureMessageKey), {
            description: errorMessage
          });
        }
      }
    );
  };
  const formatDate = (date) => {
    return formatDateByLocale(date, isPersianLocale, false);
  };
  const handleResetUsage = async () => {
    resetUsersDataUsageMutation.mutate(void 0, {
      onSuccess: () => {
        toast.success(t("settings.cleanup.resetUsage.resetSuccess"));
      },
      onError: (error) => {
        let errorMessage = t("settings.cleanup.resetUsage.resetFailed");
        if (error?.data?.detail) {
          const detail = error.data.detail;
          if (typeof detail === "string") {
            errorMessage = detail;
          } else if (typeof detail === "object" && !Array.isArray(detail)) {
            const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
            errorMessage = fieldErrors;
          }
        } else if (error?.response?.data?.detail) {
          const detail = error.response.data.detail;
          if (typeof detail === "string") {
            errorMessage = detail;
          } else if (typeof detail === "object" && !Array.isArray(detail)) {
            const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
            errorMessage = fieldErrors;
          }
        } else if (error?.message) {
          errorMessage = error.message;
        }
        toast.error(t("settings.cleanup.resetUsage.resetFailed"), {
          description: errorMessage
        });
      }
    });
  };
  const handleClearUsageData = async () => {
    if (!selectedTable) {
      toast.error(t("settings.cleanup.clearUsageData.noTableSelected"));
      return;
    }
    const params = {};
    if (clearDataAfter) params.start = clearDataAfter.toISOString();
    if (clearDataBefore) params.end = clearDataBefore.toISOString();
    clearUsageDataMutation.mutate(
      {
        table: selectedTable,
        params: Object.keys(params).length > 0 ? params : void 0
      },
      {
        onSuccess: () => {
          toast.success(t("settings.cleanup.clearUsageData.clearSuccess", { table: selectedTable }));
        },
        onError: (error) => {
          let errorMessage = t("settings.cleanup.clearUsageData.clearFailed");
          if (error?.data?.detail) {
            const detail = error.data.detail;
            if (typeof detail === "string") {
              errorMessage = detail;
            } else if (typeof detail === "object" && !Array.isArray(detail)) {
              const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
              errorMessage = fieldErrors;
            }
          } else if (error?.response?.data?.detail) {
            const detail = error.response.data.detail;
            if (typeof detail === "string") {
              errorMessage = detail;
            } else if (typeof detail === "object" && !Array.isArray(detail)) {
              const fieldErrors = Object.entries(detail).map(([field, message]) => `${field}: ${message}`).join(", ");
              errorMessage = fieldErrors;
            }
          } else if (error?.message) {
            errorMessage = error.message;
          }
          toast.error(t("settings.cleanup.clearUsageData.clearFailed"), {
            description: errorMessage
          });
        }
      }
    );
  };
  const filteredAdmins = admins.filter((admin) => admin.username !== "system");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-5 w-5" }),
          t("settings.cleanup.expiredUsers.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("settings.cleanup.expiredUsers.description") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-3 w-full max-w-xs sm:mb-4 sm:max-w-sm lg:max-w-md", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: dropdownOpen, onOpenChange: setDropdownOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: cn("h-8 w-full justify-between px-2 transition-colors hover:bg-muted/50 sm:h-9 sm:px-3", "min-w-0 text-xs font-medium sm:text-sm"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex min-w-0 flex-1 items-center gap-1 sm:gap-2", dir === "rtl" ? "flex-row-reverse" : "flex-row"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: selectedAdmin?.username?.charAt(0).toUpperCase() || "?" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-xs sm:text-sm", children: selectedAdmin?.username || t("advanceSearch.selectAdmin") }),
              selectedAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: selectedAdmin.is_sudo ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-3 w-3 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-3 w-3 text-primary" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "ml-1 h-3 w-3 flex-shrink-0 text-muted-foreground" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-64 p-1 sm:w-72 lg:w-80", sideOffset: 4, align: dir === "rtl" ? "end" : "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Command, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: t("search"), onValueChange: setAdminSearchInput, className: "mb-1 h-7 text-xs sm:h-8 sm:text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { ref: listRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 text-center text-xs text-muted-foreground sm:py-4 sm:text-sm", children: t("noAdminsFound") || "No admins found" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                CommandItem,
                {
                  onSelect: () => {
                    setSelectedAdmin(void 0);
                    setDropdownOpen(false);
                  },
                  className: cn("flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm", dir === "rtl" ? "flex-row-reverse" : "flex-row"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary/10 text-xs font-medium", children: "N" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: "All" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center gap-1", children: !selectedAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" }) })
                  ]
                }
              ),
              filteredAdmins.map((admin) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                CommandItem,
                {
                  onSelect: () => {
                    setSelectedAdmin(admin);
                    setDropdownOpen(false);
                  },
                  className: cn("flex min-w-0 items-center gap-2 px-2 py-1.5 text-xs sm:text-sm", dir === "rtl" ? "flex-row-reverse" : "flex-row"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-muted text-xs font-medium", children: admin.username.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: admin.username }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 items-center gap-1", children: [
                      admin.is_sudo ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-3 w-3 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-3 w-3 text-primary" }),
                      selectedAdmin?.username === admin.username && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary" })
                    ] })
                  ]
                },
                admin.username
              )),
              isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin text-muted-foreground" }) })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: t("settings.cleanup.expiredUsers.target") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: deleteTarget, onValueChange: (value) => setDeleteTarget(value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("settings.cleanup.expiredUsers.targetPlaceholder") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "expired", children: t("settings.cleanup.expiredUsers.targets.expired") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "limited", children: t("settings.cleanup.expiredUsers.targets.limited") })
            ] })
          ] })
        ] }),
        deleteTarget === "expired" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DatePicker,
              {
                mode: "single",
                date: expiredAfter,
                onDateChange: setExpiredAfter,
                label: t("settings.cleanup.expiredUsers.expiredAfter"),
                placeholder: t("settings.cleanup.expiredUsers.expiredAfterPlaceholder"),
                minDate: /* @__PURE__ */ new Date("1900-01-01"),
                maxDate: /* @__PURE__ */ new Date(),
                formatDate,
                side: "bottom",
                align: "center"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DatePicker,
              {
                mode: "single",
                date: expiredBefore,
                onDateChange: setExpiredBefore,
                label: t("settings.cleanup.expiredUsers.expiredBefore"),
                placeholder: t("settings.cleanup.expiredUsers.expiredBeforePlaceholder"),
                minDate: /* @__PURE__ */ new Date("1900-01-01"),
                maxDate: /* @__PURE__ */ new Date(),
                formatDate,
                side: "bottom",
                align: "center"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("settings.cleanup.expiredUsers.selectDateRange") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("settings.cleanup.expiredUsers.selectLimitedInfo") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", disabled: deleteExpiredUsersMutation.isPending, className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
            deleteExpiredUsersMutation.isPending ? t("settings.cleanup.expiredUsers.deleting") : deleteTarget === "limited" ? t("settings.cleanup.expiredUsers.deleteLimited") : t("settings.cleanup.expiredUsers.deleteExpired")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive" }),
                deleteTarget === "limited" ? t("settings.cleanup.expiredUsers.confirmDeleteLimited") : t("settings.cleanup.expiredUsers.confirmDelete")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: cn(dir === "rtl" ? "text-right" : "text-left", "text-sm"), children: deleteTarget === "limited" ? t("settings.cleanup.expiredUsers.confirmDeleteLimitedMessage") : t("settings.cleanup.expiredUsers.confirmDeleteMessage") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: t("cancel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleDeleteExpired, disabled: deleteExpiredUsersMutation.isPending, className: "!m-0 bg-destructive text-destructive-foreground hover:bg-destructive/90", children: deleteTarget === "limited" ? t("settings.cleanup.expiredUsers.deleteLimited") : t("settings.cleanup.expiredUsers.deleteExpired") })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-5 w-5" }),
          t("settings.cleanup.resetUsage.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("settings.cleanup.resetUsage.description") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: t("settings.cleanup.resetUsage.warning") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", disabled: resetUsersDataUsageMutation.isPending, className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-2 h-4 w-4" }),
            resetUsersDataUsageMutation.isPending ? t("settings.cleanup.resetUsage.resetting") : t("settings.cleanup.resetUsage.resetAll")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { dir, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive" }),
                t("settings.cleanup.resetUsage.confirmReset")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: cn(dir === "rtl" ? "text-right" : "text-left"), children: t("settings.cleanup.resetUsage.confirmResetMessage") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: t("cancel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleResetUsage, disabled: resetUsersDataUsageMutation.isPending, className: "!m-0 bg-destructive text-destructive-foreground hover:bg-destructive/90", children: t("settings.cleanup.resetUsage.resetAll") })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "h-5 w-5" }),
          t("settings.cleanup.clearUsageData.title")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: t("settings.cleanup.clearUsageData.description") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: t("settings.cleanup.clearUsageData.selectTable") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedTable, onValueChange: setSelectedTable, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: t("settings.cleanup.clearUsageData.selectTablePlaceholder") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: usageDataTables.map((table) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: table.value, children: table.label }, table.value)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DatePicker,
            {
              mode: "single",
              date: clearDataAfter,
              onDateChange: setClearDataAfter,
              label: t("settings.cleanup.clearUsageData.dataAfter"),
              placeholder: t("settings.cleanup.clearUsageData.dataAfterPlaceholder"),
              minDate: /* @__PURE__ */ new Date("1900-01-01"),
              maxDate: /* @__PURE__ */ new Date(),
              formatDate
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DatePicker,
            {
              mode: "single",
              date: clearDataBefore,
              onDateChange: setClearDataBefore,
              label: t("settings.cleanup.clearUsageData.dataBefore"),
              placeholder: t("settings.cleanup.clearUsageData.dataBeforePlaceholder"),
              minDate: /* @__PURE__ */ new Date("1900-01-01"),
              maxDate: /* @__PURE__ */ new Date(),
              formatDate
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("settings.cleanup.clearUsageData.selectDateRange") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: t("settings.cleanup.clearUsageData.warning") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", disabled: !selectedTable || clearUsageDataMutation.isPending, className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "mr-2 h-4 w-4" }),
            clearUsageDataMutation.isPending ? t("settings.cleanup.clearUsageData.clearing") : t("settings.cleanup.clearUsageData.clearData")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { dir, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive" }),
                t("settings.cleanup.clearUsageData.confirmClear")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: cn(dir === "rtl" ? "text-right" : "text-left"), children: t("settings.cleanup.clearUsageData.confirmClearMessage", { table: selectedTable }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: t("cancel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: handleClearUsageData, disabled: clearUsageDataMutation.isPending, className: "!m-0 bg-destructive text-destructive-foreground hover:bg-destructive/90", children: t("settings.cleanup.clearUsageData.clearData") })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  CleanupSettings as default
};
//# sourceMappingURL=_dashboard.settings.cleanup-CbSJRXyQ.js.map
