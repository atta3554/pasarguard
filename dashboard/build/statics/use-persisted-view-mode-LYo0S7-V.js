import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { T as ToggleGroup, a as ToggleGroupItem } from "./toggle-group-DO2v6P71.js";
import { f as createLucideIcon, c as cn, a as useDirDetection } from "./index-C_i3x-Gf.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { G as GripVertical, u as useSortable, C as CSS } from "./sortable.esm-BR-nak9Z.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
const LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
const List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
function ViewToggle({ value, onChange, className }) {
  const { t } = useTranslation();
  const viewModeLabel = t("viewMode");
  const gridViewLabel = t("gridView");
  const listViewLabel = t("listView");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ToggleGroup,
    {
      type: "single",
      value,
      onValueChange: (next) => {
        if (next) onChange(next);
      },
      variant: "default",
      size: "sm",
      className: cn("inline-flex h-9 items-center rounded-xl border bg-background p-0.5 shadow-sm", className),
      "aria-label": viewModeLabel,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToggleGroupItem,
          {
            value: "grid",
            "aria-label": gridViewLabel,
            title: gridViewLabel,
            className: "h-8 min-w-8 rounded-lg border-0 px-2 text-muted-foreground shadow-none transition-colors data-[state=on]:bg-accent data-[state=on]:text-foreground data-[state=on]:shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToggleGroupItem,
          {
            value: "list",
            "aria-label": listViewLabel,
            title: listViewLabel,
            className: "h-8 min-w-8 rounded-lg border-0 px-2 text-muted-foreground shadow-none transition-colors data-[state=on]:bg-accent data-[state=on]:text-foreground data-[state=on]:shadow-sm",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
}
function SortableListRow({ rowId, sortingDisabled, renderRow }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: rowId,
    disabled: sortingDisabled
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setNodeRef, children: renderRow({ attributes, listeners, style }) });
}
const getAlignClass = (align) => {
  switch (align) {
    case "center":
      return "justify-center";
    case "end":
      return "justify-end";
    default:
      return "justify-start";
  }
};
function ListGenerator({
  data,
  columns,
  getRowId,
  isLoading = false,
  loadingRows = 6,
  emptyState,
  showEmptyState = true,
  className,
  headerClassName,
  rowClassName,
  hideHeader = false,
  onRowClick,
  mode = "list",
  gridClassName,
  gridStyle,
  renderGridItem,
  renderGridSkeleton,
  enableSorting = false,
  sortingDisabled = false
}) {
  const templateColumns = reactExports.useMemo(() => columns.map((column) => column.width ?? "minmax(0, 1fr)").join(" "), [columns]);
  const [expandedRowId, setExpandedRowId] = reactExports.useState(null);
  const renderRowClassName = (item, index) => {
    if (typeof rowClassName === "function") {
      return rowClassName(item, index);
    }
    return rowClassName;
  };
  const hasData = data.length > 0;
  const shouldShowEmptyState = showEmptyState && !isLoading && !hasData;
  const showRows = !isLoading && hasData;
  const mobileDetailsColumns = reactExports.useMemo(() => columns.filter((column) => column.hideOnMobile), [columns]);
  const mobileDetailDataColumns = reactExports.useMemo(() => mobileDetailsColumns.filter((column) => !!column.header), [mobileDetailsColumns]);
  const mobileDetailActionColumns = reactExports.useMemo(() => mobileDetailsColumns.filter((column) => !column.header), [mobileDetailsColumns]);
  const hasMobileExpandableDetails = mobileDetailDataColumns.length > 0;
  const hasMobileTrailingWidth = mobileDetailsColumns.length > 0;
  const mobileTemplateColumns = reactExports.useMemo(() => {
    const visibleColumns = columns.filter((column) => !column.hideOnMobile).map((column) => column.width ?? "minmax(0, 1fr)");
    if (hasMobileTrailingWidth) {
      visibleColumns.push(mobileDetailActionColumns.length > 0 ? "max-content" : "32px");
    }
    return visibleColumns.join(" ");
  }, [columns, hasMobileTrailingWidth, mobileDetailActionColumns.length]);
  const listTemplateColumnsDesktop = reactExports.useMemo(() => enableSorting ? `24px ${templateColumns}` : templateColumns, [enableSorting, templateColumns]);
  const listTemplateColumnsMobile = reactExports.useMemo(
    () => enableSorting ? `24px ${mobileTemplateColumns}` : mobileTemplateColumns,
    [enableSorting, mobileTemplateColumns]
  );
  const listTemplateStyleVars = reactExports.useMemo(
    () => ({
      "--list-cols-mobile": listTemplateColumnsMobile,
      "--list-cols-desktop": listTemplateColumnsDesktop
    }),
    [listTemplateColumnsMobile, listTemplateColumnsDesktop]
  );
  const listTemplateClassName = "grid [grid-template-columns:var(--list-cols-mobile)] md:[grid-template-columns:var(--list-cols-desktop)]";
  const dir = useDirDetection();
  const gridContent = (showRows || isLoading) && renderGridItem;
  if (mode === "grid") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex w-full flex-col gap-2", className), children: [
      gridContent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", gridClassName), style: gridStyle, children: [
        isLoading && Array.from({ length: loadingRows }).map(
          (_, index) => renderGridSkeleton ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderGridSkeleton(index) }, `grid-skeleton-${index}`) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-background p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-4/5" })
          ] }) }, `grid-skeleton-${index}`)
        ),
        showRows && data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderGridItem(item, index) }, getRowId(item)))
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-background px-3 py-6 text-center text-sm text-muted-foreground", children: "Provide `renderGridItem` to render grid mode." }),
      shouldShowEmptyState && (emptyState ?? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-background px-3 py-6 text-center text-sm text-muted-foreground", children: "No results." }))
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex w-full flex-col gap-2", className), children: [
    !hideHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(listTemplateClassName, "gap-3 px-3 text-xs font-semibold uppercase text-muted-foreground", headerClassName),
        style: listTemplateStyleVars,
        children: [
          enableSorting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true" }),
          columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              dir,
              className: cn(
                "min-w-0 truncate",
                getAlignClass(column.align),
                column.hideOnMobile && "hidden md:block",
                column.headerClassName
              ),
              children: column.header
            },
            column.id
          ))
        ]
      }
    ),
    isLoading && Array.from({ length: loadingRows }).map((_, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(listTemplateClassName, "gap-3 rounded-md border bg-background px-3 py-3"),
        style: listTemplateStyleVars,
        children: [
          enableSorting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true" }),
          columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "flex min-w-0 items-center",
                getAlignClass(column.align),
                column.hideOnMobile && "hidden md:flex",
                column.className
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: cn("h-4 w-full", column.skeletonClassName) })
            },
            `${column.id}-${rowIndex}`
          ))
        ]
      },
      `list-skeleton-${rowIndex}`
    )),
    showRows && data.map((item, index) => {
      const rowId = getRowId(item);
      const isExpanded = hasMobileExpandableDetails && expandedRowId === rowId;
      const RowContent = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            listTemplateClassName,
            "gap-3 overflow-hidden rounded-md border bg-background px-3 py-3",
            onRowClick && "cursor-pointer transition-colors hover:bg-muted/40",
            renderRowClassName(item, index)
          ),
          style: { ...listTemplateStyleVars, ...props?.style },
          onClick: () => onRowClick?.(item),
          ...props?.attributes,
          children: [
            enableSorting && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: cn(
                  "flex items-center justify-center text-muted-foreground touch-none",
                  sortingDisabled ? "cursor-not-allowed opacity-40" : "cursor-grab z-50"
                ),
                onClick: (event) => event.stopPropagation(),
                ...props?.listeners,
                "aria-label": "Drag to reorder",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Drag to reorder" })
                ]
              }
            ),
            columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "flex min-w-0 items-center justify-end",
                  getAlignClass(column.align),
                  column.hideOnMobile && "hidden md:flex",
                  column.className
                ),
                children: column.cell(item)
              },
              `${column.id}-${rowId}`
            )),
            hasMobileTrailingWidth && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center justify-end gap-1 md:hidden", dir === "rtl" && "justify-start"), children: [
              mobileDetailActionColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: column.cell(item) }, `mobile-inline-actions-${column.id}-${rowId}`)),
              hasMobileExpandableDetails && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/80 transition-all hover:text-foreground active:scale-95",
                  onClick: (event) => {
                    event.stopPropagation();
                    setExpandedRowId((prev) => prev === rowId ? null : rowId);
                  },
                  "aria-label": isExpanded ? "Collapse details" : "Expand details",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", isExpanded && "rotate-180") })
                }
              )
            ] }),
            hasMobileExpandableDetails && isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full mt-2 space-y-1.5 md:hidden", children: mobileDetailDataColumns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: mobileDetailDataColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: cn("flex items-start justify-between gap-3 px-1.5 py-1.5", dir === "rtl" && "flex-row-reverse"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-[10px] font-medium uppercase tracking-wide text-muted-foreground", children: column.header }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("min-w-0 text-sm leading-5", dir === "rtl" ? "text-left" : "text-right"), children: column.cell(item) })
                ]
              },
              `mobile-${column.id}-${rowId}`
            )) }) })
          ]
        }
      );
      if (!enableSorting) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RowContent, {}, rowId);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SortableListRow, { rowId, sortingDisabled, renderRow: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(RowContent, { ...props }) }, rowId);
    }),
    shouldShowEmptyState && (emptyState ?? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-background px-3 py-6 text-center text-sm text-muted-foreground", children: "No results." }))
  ] });
}
function usePersistedViewMode(storageKey, defaultMode = "grid") {
  const [viewMode, setViewModeState] = reactExports.useState(() => {
    if (typeof window === "undefined") return defaultMode;
    const savedMode = window.localStorage.getItem(storageKey);
    return savedMode === "list" || savedMode === "grid" ? savedMode : defaultMode;
  });
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, viewMode);
  }, [storageKey, viewMode]);
  const setViewMode = reactExports.useCallback((mode) => {
    setViewModeState(mode);
  }, []);
  return [viewMode, setViewMode];
}
export {
  ListGenerator as L,
  ViewToggle as V,
  usePersistedViewMode as u
};
//# sourceMappingURL=use-persisted-view-mode-LYo0S7-V.js.map
