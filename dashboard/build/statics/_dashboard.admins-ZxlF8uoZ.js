import { r as reactExports, j as jsxRuntimeExports, b as React } from "./react-D6OUsQqF.js";
import { u as useForm } from "./types-CANcSf0A.js";
import { P as PageHeader } from "./page-header-C5rLxqcj.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { f as createLucideIcon, a as useDirDetection, L as LoaderCircle, c as cn, n as useGetAdmins, o as useDisableAllActiveUsers, p as useActivateAllDisabledUsers, s as useRemoveAllUsers, t as toast, q as queryClient, v as useRemoveAdmin, w as useModifyAdmin, x as useResetAdminUsage } from "./index-C_i3x-Gf.js";
import { u as useReactTable, T as TableRow, a as TableCell, b as Table, c as TableHeader, d as TableHead, f as flexRender, e as TableBody, g as getCoreRowModel, C as CountUp } from "./count-up-eVhrh8Uj.js";
import { B as Button } from "./button-BOH66nN-.js";
import { B as Badge } from "./badge-kZEbyuDf.js";
import { s as statusColors, P as Pagination, a as PaginationContent, b as PaginationItem, c as PaginationPrevious, d as PaginationEllipsis, e as PaginationLink, f as PaginationNext } from "./pagination-CoM3MD2Q.js";
import { u as useIsMobile } from "./use-mobile-mll3IbV8.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, e as DropdownMenuSeparator } from "./dropdown-menu-B4MHnVyu.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { U as UserRound } from "./user-round-3wZ7ngKm.js";
import { U as User } from "./user-CdCUmzOL.js";
import { P as Pen } from "./pen-YKcucSn2.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-Cj-SnnWR.js";
import { P as Power } from "./power-DV897bjg.js";
import { R as RefreshCw } from "./refresh-cw-BfHhC0kO.js";
import { U as UserCheck, a as adminFormDefaultValues, A as AdminModal, b as adminFormSchema } from "./admin-form-G_2D6FmG.js";
import { T as Trash2 } from "./trash-2-BF-d9AHB.js";
import { f as formatBytes } from "./formatByte-CB667FGk.js";
import { S as Shield } from "./shield-B15rcL-H.js";
import { C as ChartPie } from "./chart-pie-Gl5BnZge.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectGroup, e as SelectItem } from "./select-BbTZrRYf.js";
import { d as debounce } from "./debounce-DDhqqvFm.js";
import { S as Search } from "./search-DGfkalst.js";
import { X } from "./x-C6aLLO-Y.js";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-CesbshPy.js";
import { C as Checkbox } from "./checkbox-v1bxVO-h.js";
import { a as getAdminsPerPageLimitSize, b as setAdminsPerPageLimitSize } from "./userPreferenceStorage-DH2hTFsa.js";
import { C as Card, c as CardTitle } from "./card-5ZQOfa_i.js";
import { a } from "./zod-JrdXrq0M.js";
import { u as useDynamicErrorHandler } from "./use-dynamic-errors-C0Fignr8.js";
import { P as Plus } from "./plus-H2QM6nQ9.js";
import "./tooltip-BT7me4NQ.js";
import "./radix-3Azqn93X.js";
import "./Project-De_VC6al.js";
import "./snowfall-e8fCp20i.js";
import "./react-router-C8FEAJQh.js";
import "./react-query-DMC2nZO-.js";
import "./recharts-B0278qLa.js";
import "./circle-alert-40y1kNqq.js";
import "./clock-BCHdn894.js";
import "./wifi-YUIK0HhE.js";
import "./chevron-left-Bre8eEMe.js";
import "./chevron-right-DkXHvvEa.js";
import "./circle-CMQZw6eB.js";
import "./check-ayw17ogi.js";
import "./dialog-BlwcMUxd.js";
import "./form-BMBIU5T8.js";
import "./label-D6GrbpFd.js";
import "./switch-BtwGcSyQ.js";
import "./password-input-RJqY0JKY.js";
import "./eye-BsrIbFi5.js";
import "./loader-button-C4leFJGU.js";
import "./variables-popover-YfVYY7Ed.js";
import "./popover-BXLf6-bP.js";
import "./use-clipboard-C58gzIEw.js";
import "./info-DijVEiOM.js";
import "./collapsible-DpL07KM4.js";
import "./user-cog-DuWOXNmv.js";
import "./isEmptyObject-Ce3qPfrc.js";
const PowerOff = createLucideIcon("PowerOff", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const UserMinus = createLucideIcon("UserMinus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
const UserX = createLucideIcon("UserX", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
]);
const ExpandedRowContent = reactExports.memo(
  ({
    row,
    onEdit,
    onDelete,
    onToggleStatus,
    onResetUsage,
    onDisableAllActiveUsers,
    onActivateAllDisabledUsers,
    onRemoveAllUsers
  }) => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    const isSudo = row.is_sudo;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: cn(
              "pointer-events-none flex w-fit max-w-[150px] items-center justify-center gap-x-2 rounded-full px-0.5 py-0.5 sm:px-1",
              isSudo ? statusColors["active"].statusColor : statusColors["disabled"].statusColor,
              isMobile && "h-6 px-1 py-2.5"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-nowrap text-xs font-medium capitalize", children: isSudo ? t(`sudo`) : t("admin") }) })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.total_users ? row.total_users : 0 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => onEdit(row), title: t("edit"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleStatus(row);
                },
                children: [
                  row.is_disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PowerOff, { className: "mr-2 h-4 w-4" }),
                  row.is_disabled ? t("enable") : t("disable")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onResetUsage(row.username);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
                  t("admins.reset")
                ]
              }
            ),
            onDisableAllActiveUsers && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDisableAllActiveUsers(row.username);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { className: "mr-2 h-4 w-4" }),
                  t("admins.disableAllActiveUsers")
                ]
              }
            ),
            onActivateAllDisabledUsers && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onActivateAllDisabledUsers(row.username);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "mr-2 h-4 w-4" }),
                  t("admins.activateAllDisabledUsers")
                ]
              }
            ),
            onRemoveAllUsers && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                className: "text-destructive",
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onRemoveAllUsers(row.username);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "mr-2 h-4 w-4" }),
                  t("admins.removeAllUsers")
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuItem,
              {
                className: "text-destructive",
                onSelect: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(row);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
                  t("delete")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] });
  }
);
function DataTable({
  columns,
  data,
  onEdit,
  onDelete,
  onToggleStatus,
  onResetUsage,
  onDisableAllActiveUsers,
  onActivateAllDisabledUsers,
  onRemoveAllUsers,
  isLoading = false,
  isFetching = false
}) {
  const [expandedRow, setExpandedRow] = reactExports.useState(null);
  const { t } = useTranslation();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  const dir = useDirDetection();
  const isRTL = dir === "rtl";
  const isLoadingData = isLoading || isFetching;
  const LoadingState = reactExports.useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: columns.length, className: "h-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "flex flex-col items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t("loading") })
    ] }) }) }),
    [columns.length, dir, t]
  );
  const EmptyState = reactExports.useMemo(
    () => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("noResults") }) }) }),
    [columns.length, t]
  );
  const handleRowToggle = reactExports.useCallback(
    (rowId) => {
      setExpandedRow(expandedRow === rowId ? null : rowId);
    },
    [expandedRow]
  );
  const handleEditModal = reactExports.useCallback(
    (cellId, rowData) => {
      const isChevron = cellId === "chevron";
      const isSmallScreen = window.innerWidth < 768;
      if (!isSmallScreen && !isChevron) {
        onEdit(rowData);
      }
    },
    [onEdit]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { dir: cn(isRTL && "rtl"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: "relative", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "uppercase", children: headerGroup.headers.map((header, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableHead,
      {
        className: cn(
          "sticky z-10 overflow-visible text-xs",
          isRTL && "text-right",
          index === 0 && "w-[270px] md:w-auto",
          index === 1 && "min-w-[70px] md:w-auto",
          index === 2 && "min-w-[70px] md:w-auto",
          index === 3 && "min-w-[70px] md:w-auto",
          index === 4 && "min-w-[70px] md:w-[120px]",
          index >= 3 && "hidden md:table-cell",
          header.id === "chevron" && "table-cell md:hidden"
        ),
        children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
      },
      header.id
    )) }, headerGroup.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: isLoadingData ? LoadingState : table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableRow,
        {
          className: cn("cursor-pointer border-b hover:!bg-inherit md:cursor-default md:hover:!bg-muted/50", expandedRow === row.id && "border-transparent"),
          onClick: () => window.innerWidth < 768 && handleRowToggle(row.id),
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              onClick: (e) => {
                const target = e.target;
                if (target.closest("button") || target.closest('[role="menuitem"]')) return;
                handleEditModal(cell.column.id, row.original);
              },
              className: cn(
                "py-2 text-sm",
                index === 5 && "hidden md:w-[85px]",
                index >= 3 && "hidden md:table-cell",
                cell.column.id === "chevron" && "table-cell md:hidden",
                dir === "rtl" ? "pl-3" : "pr-3"
              ),
              children: cell.column.id === "chevron" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex cursor-pointer items-center justify-center", onClick: () => handleRowToggle(row.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4", expandedRow === row.id && "rotate-180") }) }) : flexRender(cell.column.columnDef.cell, cell.getContext())
            },
            cell.id
          ))
        }
      ),
      expandedRow === row.id && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "border-b hover:!bg-inherit md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: columns.length, className: "p-0 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExpandedRowContent,
        {
          row: row.original,
          onEdit,
          onDelete,
          onToggleStatus,
          onResetUsage,
          onDisableAllActiveUsers,
          onActivateAllDisabledUsers,
          onRemoveAllUsers
        }
      ) }) })
    ] }, row.id)) : EmptyState })
  ] }) });
}
const AdminStatusBadge = ({ isSudo, isDisabled }) => {
  const { t } = useTranslation();
  const getStatusInfo = () => {
    if (isDisabled) {
      return {
        color: statusColors["disabled"]?.statusColor,
        icon: null,
        text: t("disabled")
      };
    }
    if (isSudo) {
      return {
        color: "bg-violet-500 text-white",
        icon: Shield,
        text: t("sudo")
      };
    }
    return {
      color: statusColors["active"]?.statusColor,
      icon: UserRound,
      text: t("admin")
    };
  };
  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: cn("pointer-events-none flex w-fit items-center justify-center gap-x-2 rounded-full px-2 py-1", statusInfo.color, "h-6 px-1.5 py-2.5 sm:h-auto sm:px-1 sm:py-0.5"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 sm:px-1", children: [
    StatusIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: "h-4 w-4 sm:h-3 sm:w-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-nowrap text-xs font-medium capitalize", children: statusInfo.text })
  ] }) });
};
const createSortButton = (column, label, t, handleSort, filters) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSort(column);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleClick, className: "flex w-full items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: t(label) }),
    filters.sort && (filters.sort === column || filters.sort === "-" + column) && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `transition-transform duration-300 ${filters.sort === column ? "rotate-180" : ""} ${filters.sort === "-" + column ? "rotate-0" : ""} ` })
  ] });
};
const setupColumns = ({
  t,
  handleSort,
  filters,
  onEdit,
  onDelete,
  toggleStatus,
  onResetUsage,
  onDisableAllActiveUsers,
  onActivateAllDisabledUsers,
  onRemoveAllUsers
}) => [
  {
    accessorKey: "username",
    header: () => createSortButton("username", "username", t, handleSort, filters),
    cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden text-ellipsis whitespace-nowrap py-1.5 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: row.original.is_disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[10px] min-w-[10px] rounded-full border border-gray-400 shadow-sm dark:border-gray-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[10px] min-w-[10px] rounded-full bg-green-500 shadow-sm" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col overflow-hidden text-ellipsis whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium", children: row.getValue("username") }) })
    ] }) })
  },
  {
    accessorKey: "used_traffic",
    header: () => createSortButton("used_traffic", "admins.used.traffic", t, handleSort, filters),
    cell: ({ row }) => {
      const traffic = row.getValue("used_traffic");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "hidden h-4 w-4 sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-xs", children: traffic ? formatBytes(traffic) : "0 B" })
      ] });
    }
  },
  {
    accessorKey: "lifetime_used_traffic",
    header: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center text-xs capitalize", children: t("admins.lifetime.used.traffic") }),
    cell: ({ row }) => {
      const total = row.getValue("lifetime_used_traffic");
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", className: "text-xs", children: formatBytes(total || 0) }) });
    }
  },
  {
    accessorKey: "is_sudo",
    header: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center text-xs capitalize", children: t("admins.role") }),
    cell: ({ row }) => {
      const isSudo = row.getValue("is_sudo");
      const isDisabled = row.original.is_disabled;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminStatusBadge, { isSudo: !!isSudo, isDisabled: !!isDisabled }) });
    }
  },
  {
    accessorKey: "total_users",
    header: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center text-xs capitalize", children: t("admins.total.users") }),
    cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.getValue("total_users") || 0 })
    ] })
  },
  {
    id: "actions",
    cell: ({ row }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit(row.original);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "mr-2 h-4 w-4" }),
              t("edit")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleStatus(row.original);
            },
            children: [
              row.original.is_disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "mr-2 h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PowerOff, { className: "mr-2 h-4 w-4" }),
              row.original.is_disabled ? t("enable") : t("disable")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onResetUsage(row.original.username);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
              t("admins.reset")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onDisableAllActiveUsers(row.original.username);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { className: "mr-2 h-4 w-4" }),
              t("admins.disableAllActiveUsers")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onActivateAllDisabledUsers(row.original.username);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "mr-2 h-4 w-4" }),
              t("admins.activateAllDisabledUsers")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            className: "text-destructive",
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemoveAllUsers(row.original.username);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "mr-2 h-4 w-4" }),
              t("admins.removeAllUsers")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DropdownMenuItem,
          {
            className: "text-destructive",
            onSelect: (e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete(row.original);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
              t("delete")
            ]
          }
        )
      ] })
    ] }) })
  },
  {
    id: "chevron",
    cell: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-between" })
  }
];
function Filters({ filters, onFilterChange }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const { refetch } = useGetAdmins(filters);
  const [search, setSearch] = reactExports.useState(filters.username || "");
  const onFilterChangeRef = reactExports.useRef(onFilterChange);
  onFilterChangeRef.current = onFilterChange;
  const setSearchField = reactExports.useCallback(
    debounce((value) => {
      onFilterChangeRef.current({
        username: value || void 0,
        offset: 0
        // Reset to first page when search is updated
      });
    }, 300),
    []
  );
  reactExports.useEffect(() => {
    return () => {
      setSearchField.cancel();
    };
  }, [setSearchField]);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchField(e.target.value);
  };
  const clearSearch = () => {
    setSearch("");
    setSearchField.cancel();
    onFilterChangeRef.current({
      username: void 0,
      offset: 0
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { dir, className: "flex items-center gap-4 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-[calc(100%/3-10px)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: cn("absolute", dir === "rtl" ? "right-2" : "left-2", "top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 text-input-placeholder") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("search"), value: search, onChange: handleSearchChange, className: "pl-8 pr-10" }),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearSearch, className: cn("absolute", dir === "rtl" ? "left-2" : "right-2", "top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon-md", onClick: () => refetch(), variant: "ghost", className: "flex items-center gap-2 border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }) }) })
  ] });
}
const PaginationControls = ({ currentPage, totalPages, itemsPerPage, isLoading, onPageChange, onItemsPerPageChange }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const getPaginationRange = (currentPage2, totalPages2) => {
    const delta = 2;
    const range = [];
    if (totalPages2 <= 5) {
      for (let i = 0; i < totalPages2; i++) {
        range.push(i);
      }
      return range;
    }
    range.push(0);
    let start = Math.max(1, currentPage2 - delta);
    let end = Math.min(totalPages2 - 2, currentPage2 + delta);
    if (currentPage2 - delta <= 1) {
      end = Math.min(totalPages2 - 2, start + 2 * delta);
    }
    if (currentPage2 + delta >= totalPages2 - 2) {
      start = Math.max(1, totalPages2 - 3 - 2 * delta);
    }
    if (start > 1) {
      range.push(-1);
    }
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    if (end < totalPages2 - 2) {
      range.push(-1);
    }
    if (totalPages2 > 1) {
      range.push(totalPages2 - 1);
    }
    return range;
  };
  const paginationRange = getPaginationRange(currentPage, totalPages);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col-reverse items-center justify-between gap-4 md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: itemsPerPage.toString(), onValueChange: (value) => onItemsPerPageChange(parseInt(value, 10)), disabled: isLoading, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[70px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", children: "30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "40", children: "40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "50", children: "50" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm text-muted-foreground", children: t("itemsPerPage") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { dir: "ltr", className: `md:justify-end ${dir === "rtl" ? "flex-row-reverse" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationContent, { className: "max-w-[300px] overflow-x-auto sm:max-w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationPrevious, { onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 0 || isLoading }) }),
      paginationRange.map(
        (pageNumber, i) => pageNumber === -1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationEllipsis, {}) }, `ellipsis-${i}`) : /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          PaginationLink,
          {
            isActive: currentPage === pageNumber,
            onClick: () => onPageChange(pageNumber),
            disabled: isLoading,
            className: isLoading && currentPage === pageNumber ? "opacity-70" : "",
            children: isLoading && currentPage === pageNumber ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }),
              pageNumber + 1
            ] }) : pageNumber + 1
          }
        ) }, pageNumber)
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationNext, { onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages - 1 || totalPages === 0 || isLoading }) })
    ] }) })
  ] });
};
const DeleteAlertDialog = ({ admin, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("admins.deleteAdmin") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("deleteAdmin.prompt", { name: admin.username }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("delete") })
    ] })
  ] }) });
};
const ToggleAdminStatusModal = ({ admin, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [adminUsersToggle, setAdminUsersToggle] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isOpen) {
      setAdminUsersToggle(false);
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t(admin.is_disabled ? "admin.enable" : "admin.disable") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: adminUsersToggle, onCheckedChange: () => setAdminUsersToggle(!adminUsersToggle) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t(admin.is_disabled ? "activeUsers.prompt" : "disableUsers.prompt", { name: admin.username }) } })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: cn(dir === "rtl" && "sm:flex-row-reverse sm:gap-x-2"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => onConfirm(adminUsersToggle), children: t("confirm") })
    ] })
  ] }) });
};
const ResetUsersUsageConfirmationDialog = ({ adminUsername, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("admins.resetUsersUsage") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("resetUsersUsage.prompt", { name: adminUsername }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onConfirm, children: t("confirm") })
    ] })
  ] }) });
};
const RemoveAllUsersConfirmationDialog = ({ adminUsername, isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t("admins.removeAllUsers") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t("removeAllUsers.prompt", { name: adminUsername }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { variant: "destructive", onClick: onConfirm, children: t("confirm") })
    ] })
  ] }) });
};
const BulkUsersStatusConfirmationDialog = ({
  adminUsername,
  actionType,
  isOpen,
  onClose,
  onConfirm
}) => {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const titleKey = actionType === "disable" ? "admins.disableAllActiveUsers" : "admins.activateAllDisabledUsers";
  const promptKey = actionType === "disable" ? "disableUsers.prompt" : "activeUsers.prompt";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: cn(dir === "rtl" && "sm:text-right"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: t(titleKey) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir, dangerouslySetInnerHTML: { __html: t(promptKey, { name: adminUsername }) } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: onClose, children: t("cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: onConfirm, children: t("confirm") })
    ] })
  ] }) });
};
function AdminsTable({ onEdit, onDelete, onToggleStatus, onResetUsage, onTotalAdminsChange }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = reactExports.useState(0);
  const [itemsPerPage, setItemsPerPage] = reactExports.useState(getAdminsPerPageLimitSize());
  const [isChangingPage, setIsChangingPage] = reactExports.useState(false);
  const isFirstLoadRef = reactExports.useRef(true);
  const isAutoRefreshingRef = reactExports.useRef(false);
  const [filters, setFilters] = reactExports.useState({
    limit: itemsPerPage,
    offset: 0
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [statusToggleDialogOpen, setStatusToggleDialogOpen] = reactExports.useState(false);
  const [resetUsersUsageDialogOpen, setResetUsersUsageDialogOpen] = reactExports.useState(false);
  const [bulkUsersStatusDialogOpen, setBulkUsersStatusDialogOpen] = reactExports.useState(false);
  const [removeAllUsersDialogOpen, setRemoveAllUsersDialogOpen] = reactExports.useState(false);
  const [adminToDelete, setAdminToDelete] = reactExports.useState(null);
  const [adminToToggleStatus, setAdminToToggleStatus] = reactExports.useState(null);
  const [adminToReset, setAdminToReset] = reactExports.useState(null);
  const [bulkUsersStatusAction, setBulkUsersStatusAction] = reactExports.useState(null);
  const [adminToRemoveAllUsers, setAdminToRemoveAllUsers] = reactExports.useState(null);
  const {
    data: adminsResponse,
    isLoading,
    isFetching
  } = useGetAdmins(filters, {
    query: {
      staleTime: 0,
      gcTime: 0,
      retry: 1
    }
  });
  const adminsData = adminsResponse?.admins || [];
  reactExports.useEffect(() => {
    if (onTotalAdminsChange) {
      if (adminsResponse) {
        onTotalAdminsChange({
          total: adminsResponse.total,
          active: adminsResponse.active,
          disabled: adminsResponse.disabled
        });
      } else {
        onTotalAdminsChange(null);
      }
    }
  }, [adminsResponse, onTotalAdminsChange]);
  const disableAllActiveUsersMutation = useDisableAllActiveUsers();
  const activateAllDisabledUsersMutation = useActivateAllDisabledUsers();
  const removeAllUsersMutation = useRemoveAllUsers();
  reactExports.useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      limit: itemsPerPage,
      offset: currentPage * itemsPerPage
    }));
  }, [currentPage, itemsPerPage]);
  reactExports.useEffect(() => {
    if (adminsData && isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
    }
  }, [adminsData]);
  reactExports.useEffect(() => {
    if (!isFetching && isAutoRefreshingRef.current) {
      isAutoRefreshingRef.current = false;
    }
    if (!isFetching && isChangingPage) {
      setIsChangingPage(false);
    }
  }, [isFetching, isChangingPage]);
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => {
      const resetPage = newFilters.username !== void 0 && newFilters.username !== prev.username;
      const updatedFilters = {
        ...prev,
        ...newFilters,
        offset: resetPage ? 0 : newFilters.offset !== void 0 ? newFilters.offset : prev.offset
      };
      if ("username" in newFilters && newFilters.username === void 0) {
        delete updatedFilters.username;
      }
      return updatedFilters;
    });
    if (newFilters.username !== void 0 && newFilters.username !== filters.username) {
      setCurrentPage(0);
    }
  };
  const handleDeleteClick = (admin) => {
    setAdminToDelete(admin);
    setDeleteDialogOpen(true);
  };
  const handleStatusToggleClick = (admin) => {
    setAdminToToggleStatus(admin);
    setStatusToggleDialogOpen(true);
  };
  const handleResetUsersUsageClick = (adminUsername) => {
    setAdminToReset(adminUsername);
    setResetUsersUsageDialogOpen(true);
  };
  const handleConfirmResetUsersUsage = async () => {
    if (adminToReset) {
      onResetUsage(adminToReset);
      setResetUsersUsageDialogOpen(false);
      setAdminToReset(null);
    }
  };
  const handleRemoveAllUsersClick = (adminUsername) => {
    setAdminToRemoveAllUsers(adminUsername);
    setRemoveAllUsersDialogOpen(true);
  };
  const handleDisableAllActiveUsersClick = (adminUsername) => {
    setBulkUsersStatusAction({ username: adminUsername, actionType: "disable" });
    setBulkUsersStatusDialogOpen(true);
  };
  const handleActivateAllDisabledUsersClick = (adminUsername) => {
    setBulkUsersStatusAction({ username: adminUsername, actionType: "activate" });
    setBulkUsersStatusDialogOpen(true);
  };
  const closeBulkUsersStatusDialog = () => {
    setBulkUsersStatusDialogOpen(false);
    setBulkUsersStatusAction(null);
  };
  const handleConfirmBulkUsersStatusAction = async () => {
    if (!bulkUsersStatusAction) return;
    const { username, actionType } = bulkUsersStatusAction;
    try {
      if (actionType === "disable") {
        await disableAllActiveUsersMutation.mutateAsync({ username });
      } else {
        await activateAllDisabledUsersMutation.mutateAsync({ username });
      }
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t(actionType === "disable" ? "admins.disableAllActiveUsersSuccess" : "admins.activateAllDisabledUsersSuccess", {
          name: username,
          defaultValue: actionType === "disable" ? `All active users under admin "${username}" have been disabled successfully` : `All disabled users under admin "${username}" have been activated successfully`
        })
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admins"] });
      closeBulkUsersStatusDialog();
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t(actionType === "disable" ? "admins.disableAllActiveUsersFailed" : "admins.activateAllDisabledUsersFailed", {
          name: username,
          defaultValue: actionType === "disable" ? `Failed to disable all active users under admin "${username}"` : `Failed to activate all disabled users under admin "${username}"`
        })
      });
    }
  };
  const handleConfirmRemoveAllUsers = async () => {
    if (adminToRemoveAllUsers) {
      try {
        await removeAllUsersMutation.mutateAsync({
          username: adminToRemoveAllUsers
        });
        toast.success(t("success", { defaultValue: "Success" }), {
          description: t("admins.removeAllUsersSuccess", {
            name: adminToRemoveAllUsers,
            defaultValue: `All users under admin "{name}" have been removed successfully`
          })
        });
        queryClient.invalidateQueries({ queryKey: ["/api/admins"] });
        setRemoveAllUsersDialogOpen(false);
        setAdminToRemoveAllUsers(null);
      } catch (error) {
        toast.error(t("error", { defaultValue: "Error" }), {
          description: t("admins.removeAllUsersFailed", {
            name: adminToRemoveAllUsers,
            defaultValue: `Failed to remove all users under admin "{name}"`
          })
        });
      }
    }
  };
  const handleConfirmDelete = async () => {
    if (adminToDelete) {
      onDelete(adminToDelete);
      setDeleteDialogOpen(false);
      setAdminToDelete(null);
    }
  };
  const handleConfirmStatusToggle = async (clicked) => {
    if (adminToToggleStatus) {
      onToggleStatus(adminToToggleStatus, clicked);
      setStatusToggleDialogOpen(false);
      setAdminToToggleStatus(null);
    }
  };
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || isChangingPage) return;
    setIsChangingPage(true);
    setCurrentPage(newPage);
  };
  const handleItemsPerPageChange = (value) => {
    setIsChangingPage(true);
    setItemsPerPage(value);
    setCurrentPage(0);
    setAdminsPerPageLimitSize(value.toString());
    setIsChangingPage(false);
  };
  const handleSort = (column) => {
    const currentSort = filters.sort;
    if (currentSort === column) {
      setFilters((prev) => ({ ...prev, sort: "-" + column }));
    } else if (currentSort === "-" + column) {
      setFilters((prev) => {
        const { sort, ...restFilters } = prev;
        return restFilters;
      });
    } else {
      setFilters((prev) => ({ ...prev, sort: column }));
    }
  };
  const columns = setupColumns({
    t,
    handleSort,
    filters,
    onEdit,
    onDelete: handleDeleteClick,
    toggleStatus: handleStatusToggleClick,
    onResetUsage: handleResetUsersUsageClick,
    onDisableAllActiveUsers: handleDisableAllActiveUsersClick,
    onActivateAllDisabledUsers: handleActivateAllDisabledUsersClick,
    onRemoveAllUsers: handleRemoveAllUsersClick
  });
  const isCurrentlyLoading = isLoading || isFetching && !adminsResponse;
  const isPageLoading = isChangingPage || isFetching && !isFirstLoadRef.current && !isAutoRefreshingRef.current;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, { filters, onFilterChange: handleFilterChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DataTable,
      {
        columns,
        data: adminsData || [],
        onEdit,
        onDelete: handleDeleteClick,
        onToggleStatus: handleStatusToggleClick,
        onResetUsage: handleResetUsersUsageClick,
        onDisableAllActiveUsers: handleDisableAllActiveUsersClick,
        onActivateAllDisabledUsers: handleActivateAllDisabledUsersClick,
        onRemoveAllUsers: handleRemoveAllUsersClick,
        setStatusToggleDialogOpen,
        isLoading: isCurrentlyLoading && isFirstLoadRef.current,
        isFetching: isFetching && !isFirstLoadRef.current && !isAutoRefreshingRef.current
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaginationControls,
      {
        currentPage,
        totalPages: Math.ceil((adminsResponse?.total || 0) / itemsPerPage),
        itemsPerPage,
        totalItems: adminsResponse?.total || 0,
        isLoading: isPageLoading,
        onPageChange: handlePageChange,
        onItemsPerPageChange: handleItemsPerPageChange
      }
    ),
    adminToDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAlertDialog, { admin: adminToDelete, isOpen: deleteDialogOpen, onClose: () => setDeleteDialogOpen(false), onConfirm: handleConfirmDelete }),
    adminToToggleStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleAdminStatusModal, { admin: adminToToggleStatus, isOpen: statusToggleDialogOpen, onClose: () => setStatusToggleDialogOpen(false), onConfirm: handleConfirmStatusToggle }),
    adminToReset && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResetUsersUsageConfirmationDialog,
      {
        adminUsername: adminToReset,
        onConfirm: handleConfirmResetUsersUsage,
        isOpen: resetUsersUsageDialogOpen,
        onClose: () => setResetUsersUsageDialogOpen(false)
      }
    ),
    bulkUsersStatusAction && /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkUsersStatusConfirmationDialog,
      {
        adminUsername: bulkUsersStatusAction.username,
        actionType: bulkUsersStatusAction.actionType,
        onConfirm: handleConfirmBulkUsersStatusAction,
        isOpen: bulkUsersStatusDialogOpen,
        onClose: closeBulkUsersStatusDialog
      }
    ),
    adminToRemoveAllUsers && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RemoveAllUsersConfirmationDialog,
      {
        adminUsername: adminToRemoveAllUsers,
        onConfirm: handleConfirmRemoveAllUsers,
        isOpen: removeAllUsersDialogOpen,
        onClose: () => setRemoveAllUsersDialogOpen(false)
      }
    )
  ] });
}
function AdminStatisticsSection({ counts }) {
  const { t } = useTranslation();
  const dir = useDirDetection();
  const [prevStats, setPrevStats] = reactExports.useState(null);
  const [isIncreased, setIsIncreased] = reactExports.useState({});
  const total = counts?.total || 0;
  const active = counts?.active || 0;
  const disabled = counts?.disabled || 0;
  const currentStats = { total, active, disabled };
  reactExports.useEffect(() => {
    if (prevStats) {
      setIsIncreased({
        total: currentStats.total > prevStats.total,
        active: currentStats.active > prevStats.active,
        disabled: currentStats.disabled > prevStats.disabled
      });
    }
    setPrevStats(currentStats);
  }, [counts]);
  const stats = [
    {
      icon: User,
      label: t("admins.total"),
      value: total,
      color: "",
      key: "total"
    },
    {
      icon: UserCheck,
      label: t("admins.active"),
      value: active,
      color: "",
      key: "active"
    },
    {
      icon: UserX,
      label: t("admins.disable"),
      value: disabled,
      color: "",
      key: "disabled"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col items-center justify-between gap-x-4 gap-y-4 lg:flex-row", dir === "rtl" && "lg:flex-row-reverse"), children: stats.map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      dir,
      className: cn("group relative w-full animate-fade-in overflow-hidden rounded-md transition-all duration-500"),
      style: {
        animationDuration: "600ms",
        animationDelay: `${(idx + 1) * 100}ms`,
        animationFillMode: "both"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-500",
              "dark:from-primary/5 dark:to-transparent",
              "group-hover:opacity-100"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "relative z-10 flex items-center justify-between gap-x-4 px-4 py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-x-4", children: [
            React.createElement(stat.icon, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: stat.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mx-2 text-3xl transition-all duration-500", isIncreased[stat.key] ? "animate-zoom-out" : ""), style: { animationDuration: "400ms" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { end: stat.value }) })
        ] })
      ]
    },
    stat.label
  )) });
}
function AdminsPage() {
  const { t } = useTranslation();
  const [editingAdmin, setEditingAdmin] = reactExports.useState(null);
  const [isDialogOpen, setIsDialogOpen] = reactExports.useState(false);
  const [adminCounts, setAdminCounts] = reactExports.useState(null);
  const form = useForm({
    resolver: a(adminFormSchema),
    defaultValues: adminFormDefaultValues
  });
  const removeAdminMutation = useRemoveAdmin();
  const modifyAdminMutation = useModifyAdmin();
  const modifyDisableAllAdminUsers = useDisableAllActiveUsers();
  const modifyActivateAllAdminUsers = useActivateAllDisabledUsers();
  const resetUsageMutation = useResetAdminUsage();
  const handleError = useDynamicErrorHandler();
  const handleDelete = async (admin) => {
    try {
      await removeAdminMutation.mutateAsync({
        username: admin.username
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("admins.deleteSuccess", {
          name: admin.username,
          defaultValue: "Admin «{{name}}» has been deleted successfully"
        })
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admins"] });
    } catch (error) {
      handleError({
        error,
        fields: [],
        form,
        contextKey: "admins"
      });
    }
  };
  const handleToggleStatus = async (admin, checked) => {
    try {
      if (!admin.is_disabled && checked) {
        await modifyDisableAllAdminUsers.mutateAsync({
          username: admin.username
        });
      }
      if (admin.is_disabled && checked) {
        await modifyActivateAllAdminUsers.mutateAsync({
          username: admin.username
        });
      }
      await modifyAdminMutation.mutateAsync({
        username: admin.username,
        data: {
          is_sudo: admin.is_sudo,
          is_disabled: !admin.is_disabled,
          discord_webhook: admin.discord_webhook,
          sub_template: admin.sub_template,
          telegram_id: admin.telegram_id,
          support_url: admin.support_url,
          profile_title: admin.profile_title,
          sub_domain: admin.sub_domain,
          discord_id: admin.discord_id
        }
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t(admin.is_disabled ? "admins.enableSuccess" : "admins.disableSuccess", {
          name: admin.username,
          defaultValue: `Admin "{name}" has been ${admin.is_disabled ? "enabled" : "disabled"} successfully`
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/admins"]
      });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t(admin.is_disabled ? "admins.enableFailed" : "admins.disableFailed", {
          name: admin.username,
          defaultValue: `Failed to ${admin.is_disabled ? "enable" : "disable"} admin "{name}"`
        })
      });
    }
  };
  const handleEdit = (admin) => {
    setEditingAdmin(admin);
    form.reset({
      username: admin.username,
      is_sudo: admin.is_sudo,
      is_disabled: admin.is_disabled || void 0,
      discord_webhook: admin.discord_webhook || "",
      sub_template: admin.sub_template || "",
      telegram_id: admin.telegram_id || void 0,
      support_url: admin.support_url || "",
      profile_title: admin.profile_title || "",
      sub_domain: admin.sub_domain || "",
      discord_id: admin.discord_id || void 0,
      password: void 0,
      notification_enable: admin.notification_enable || {
        create: false,
        modify: false,
        delete: false,
        status_change: false,
        reset_data_usage: false,
        data_reset_by_next: false,
        subscription_revoked: false
      }
    });
    setIsDialogOpen(true);
  };
  const resetUsage = async (adminUsername) => {
    try {
      await resetUsageMutation.mutateAsync({
        username: adminUsername
      });
      toast.success(t("success", { defaultValue: "Success" }), {
        description: t("admins.resetUsageSuccess", {
          name: adminUsername,
          defaultValue: `Admin "{name}" user usage has been reset successfully`
        })
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/admins"]
      });
    } catch (error) {
      toast.error(t("error", { defaultValue: "Error" }), {
        description: t("admins.resetUsageFailed", {
          name: adminUsername,
          defaultValue: `Failed to reset admin "{name}" user usage`
        })
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full transform-gpu animate-fade-in", style: { animationDuration: "400ms" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageHeader,
        {
          title: "admins.title",
          description: "admins.description",
          buttonIcon: Plus,
          buttonText: "admins.createAdmin",
          onButtonClick: () => {
            setEditingAdmin(null);
            form.reset(adminFormDefaultValues);
            setIsDialogOpen(true);
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-4 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "100ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminStatisticsSection, { counts: adminCounts }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transform-gpu animate-slide-up", style: { animationDuration: "500ms", animationDelay: "250ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminsTable, { onEdit: handleEdit, onDelete: handleDelete, onToggleStatus: handleToggleStatus, onResetUsage: resetUsage, onTotalAdminsChange: setAdminCounts }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdminModal,
        {
          isDialogOpen,
          onOpenChange: (open) => {
            if (!open) {
              setEditingAdmin(null);
              form.reset(adminFormDefaultValues);
            }
            setIsDialogOpen(open);
          },
          form,
          editingAdmin: !!editingAdmin,
          editingAdminUserName: editingAdmin?.username || ""
        }
      )
    ] })
  ] });
}
export {
  AdminsPage as default
};
//# sourceMappingURL=_dashboard.admins-ZxlF8uoZ.js.map
