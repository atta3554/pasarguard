import { j as jsxRuntimeExports, r as reactExports } from "./react-D6OUsQqF.js";
import { R as REPO_URL } from "./Project-De_VC6al.js";
import { B as Button } from "./button-BOH66nN-.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from "./dropdown-menu-B4MHnVyu.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-BXLf6-bP.js";
import { u as useTranslation } from "./i18n-C0-IFBIH.js";
import { L as Languages, S as Sun, M as Moon } from "./sun-C1kX90iq.js";
import { f as createLucideIcon, c as cn, a$ as cva, a as useDirDetection, g as useTheme } from "./index-C_i3x-Gf.js";
import { h as Root, i as Portal, j as Content, Y as Close, Z as Title, _ as Description, O as Overlay, N as Slot } from "./radix-3Azqn93X.js";
import { I as Input } from "./input-BtfO4I3L.js";
import { S as Separator } from "./separator-BXI4Bz0S.js";
import { X } from "./x-C6aLLO-Y.js";
import { S as Skeleton } from "./skeleton-BQXgKF1e.js";
import { c as TooltipProvider, T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./tooltip-BT7me4NQ.js";
import { u as useIsMobile } from "./use-mobile-mll3IbV8.js";
import { M as Monitor } from "./monitor-ZPkozcYt.js";
const Menu = createLucideIcon("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const FooterContent = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-block flex-grow text-center text-xs text-gray-500", children: [
    "Made with ❤️ by  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-blue-400", href: REPO_URL, children: "PasarGuard" }),
    " ",
    "Team"
  ] });
};
const Footer = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex w-full pb-3 pt-1", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FooterContent, {}) });
};
const Sheet = Root;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = Description.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_LOCALSTORAGE_KEY = "sidebar:state";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = reactExports.createContext(null);
function useSidebar() {
  const context = reactExports.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = reactExports.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = reactExports.useState(false);
  const getInitialState = () => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(SIDEBAR_LOCALSTORAGE_KEY);
        if (stored !== null) {
          return stored === "true";
        }
      } catch (error) {
        console.warn("Failed to read sidebar state from localStorage:", error);
      }
    }
    return defaultOpen;
  };
  const [_open, _setOpen] = reactExports.useState(getInitialState);
  const open = openProp ?? _open;
  const setOpen = reactExports.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      try {
        localStorage.setItem(SIDEBAR_LOCALSTORAGE_KEY, openState.toString());
      } catch (error) {
        console.warn("Failed to save sidebar state to localStorage:", error);
      }
    },
    [setOpenProp, open]
  );
  const toggleSidebar = reactExports.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  reactExports.useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === SIDEBAR_LOCALSTORAGE_KEY && event.newValue !== null) {
        const newState = event.newValue === "true";
        if (newState !== open && !openProp) {
          _setOpen(newState);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [open, openProp]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = reactExports.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
      ref,
      dir,
      ...props,
      children
    }
  ) }) });
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = reactExports.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className), ref, ...props, children });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] max-w-[90vw] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden top-0 h-[100svh] before:absolute before:inset-x-0 before:top-0 before:h-[env(safe-area-inset-top)] before:bg-sidebar before:content-['']",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "sr-only", children: "Navigation Menu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { className: "sr-only", children: "Main navigation menu for the application" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full flex-col pt-[env(safe-area-inset-top)]", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "group peer hidden text-sidebar-foreground lg:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children
              }
            )
          }
        )
      ]
    }
  );
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = reactExports.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "outline",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar, state } = useSidebar();
  const { t } = useTranslation();
  const dir = useDirDetection();
  const isRTL = dir === "rtl";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        tabIndex: 0,
        onClick: toggleSidebar,
        className: cn(
          "absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
          // Positioning for left side (LTR) or right side (RTL)
          isRTL ? "group-data-[side=right]:-left-4 group-data-[side=left]:right-0 translate-x-1/2 after:right-1/2" : "group-data-[side=left]:-right-4 group-data-[side=right]:left-0 -translate-x-1/2 after:left-1/2",
          // Cursor styles - RTL-aware
          isRTL ? "[[data-side=right]_&]:cursor-w-resize [[data-side=left]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-e-resize [[data-side=left][data-state=collapsed]_&]:cursor-w-resize" : "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize [[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          // Offcanvas mode
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          isRTL ? "group-data-[collapsible=offcanvas]:after:right-full [[data-side=right][data-collapsible=offcanvas]_&]:-left-2 [[data-side=left][data-collapsible=offcanvas]_&]:-right-2" : "group-data-[collapsible=offcanvas]:after:left-full [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          // Icon mode
          "group-data-[collapsible=icon]:translate-x-0 group-data-[collapsible=icon]:after:w-[1px]",
          isRTL ? "group-data-[collapsible=icon]:after:right-full [[data-side=right][data-collapsible=icon]_&]:left-0 [[data-side=left][data-collapsible=icon]_&]:right-0" : "group-data-[collapsible=icon]:after:left-full [[data-side=left][data-collapsible=icon]_&]:right-0 [[data-side=right][data-collapsible=icon]_&]:left-0",
          // Hover effects
          "hover:after:w-[4px] hover:after:bg-sidebar-accent",
          "group-data-[collapsible=icon]:hover:after:w-[2px]",
          "after:transition-all after:duration-200",
          "hover:bg-sidebar/5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          "active:bg-sidebar/10",
          className
        ),
        ...props
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TooltipContent,
      {
        className: "font-semibold",
        side: isRTL ? state === "collapsed" ? "left" : "right" : state === "collapsed" ? "right" : "left",
        align: "center",
        children: state === "collapsed" ? t("sidebar.expand") : t("sidebar.collapse")
      }
    )
  ] });
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex min-h-svh min-w-0 flex-1 flex-col overflow-x-hidden bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref, "data-sidebar": "input", className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className), ...props });
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { ref, "data-sidebar": "separator", className: cn("mx-2 w-auto bg-sidebar-border", className), ...props });
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, "data-sidebar": "content", className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className), ...props });
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, "data-sidebar": "group", className: cn("relative flex w-full min-w-0 flex-col p-2", className), ...props });
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:lg:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props }));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props }));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props }));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:ltr:pr-8 group-has-[[data-sidebar=menu-action]]/menu-item:rtl:pl-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = reactExports.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ref, "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: cn(sidebarMenuButtonVariants({ variant, size }), className), ...props });
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
      side: state === "collapsed" ? "right" : "left",
      align: "center",
      sideOffset: 5
    };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { hidden: state !== "collapsed" || isMobile, ...tooltip })
  ] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = reactExports.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground ltr:right-1 rtl:left-1 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:lg:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = reactExports.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = reactExports.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, "data-sidebar": "menu-skeleton", className: cn("flex h-8 items-center gap-2 rounded-md px-2", className), ...props, children: [
    showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton,
      {
        className: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      }
    )
  ] });
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border px-2.5 py-0.5 ltr:border-l rtl:border-r", "group-data-[collapsible=icon]:hidden", className),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = reactExports.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = reactExports.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarSubButton";
const Language = () => {
  const { i18n, t } = useTranslation();
  const sidebarContext = reactExports.useContext(SidebarContext);
  const sidebarState = sidebarContext?.state ?? "expanded";
  const isMobile = sidebarContext?.isMobile ?? false;
  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("dir", i18n.dir());
  };
  if (sidebarState === "collapsed" && !isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-48 p-2", side: "right", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1.5 text-sm font-semibold", children: t("language.title", { defaultValue: "Language" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => changeLanguage("en"), children: "English" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => changeLanguage("fa"), children: "فارسی" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => changeLanguage("zh"), children: "简体中文" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => changeLanguage("ru"), children: "Русский" })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "start", side: "top", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => changeLanguage("en"), children: "English" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => changeLanguage("fa"), children: "فارسی" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => changeLanguage("zh"), children: "简体中文" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => changeLanguage("ru"), children: "Русский" })
    ] })
  ] });
};
function ThemeToggle() {
  const { setTheme } = useTheme();
  const { t } = useTranslation();
  const sidebarContext = reactExports.useContext(SidebarContext);
  const sidebarState = sidebarContext?.state ?? "expanded";
  const isMobile = sidebarContext?.isMobile ?? false;
  const toggleTheme = reactExports.useCallback(
    (theme) => {
      setTheme(theme);
    },
    [setTheme]
  );
  if (sidebarState === "collapsed" && !isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "icon", className: "h-8 w-8 transition-colors duration-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "transition-all duration-300 ease-in-out dark:hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "hidden transition-all duration-300 ease-in-out dark:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: t("theme.toggle") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-48 p-2", side: "right", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1.5 text-sm font-semibold", children: t("theme.title", { defaultValue: "Theme" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => toggleTheme("light"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "mr-2 h-4 w-4" }),
          t("theme.light")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => toggleTheme("dark"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "mr-2 h-4 w-4" }),
          t("theme.dark")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "w-full justify-start", onClick: () => toggleTheme("system"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "mr-2 h-4 w-4" }),
          t("theme.system")
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "icon", className: "transition-colors duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "transition-all duration-300 ease-in-out dark:hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "hidden transition-all duration-300 ease-in-out dark:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: t("theme.toggle") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "start", side: "top", className: "transition-all duration-200 ease-in-out", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => toggleTheme("light"), className: "transition-colors duration-150 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "mr-2 h-4 w-4 transition-transform duration-200 hover:scale-110" }),
        t("theme.light")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => toggleTheme("dark"), className: "transition-colors duration-150 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "mr-2 h-4 w-4 transition-transform duration-200 hover:scale-110" }),
        t("theme.dark")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => toggleTheme("system"), className: "transition-colors duration-150 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "mr-2 h-4 w-4 transition-transform duration-200 hover:scale-110" }),
        t("theme.system")
      ] })
    ] })
  ] });
}
export {
  Footer as F,
  Language as L,
  SidebarGroup as S,
  ThemeToggle as T,
  SidebarGroupLabel as a,
  SidebarMenu as b,
  SidebarMenuItem as c,
  SidebarMenuButton as d,
  SidebarMenuAction as e,
  SidebarMenuSub as f,
  SidebarMenuSubItem as g,
  SidebarGroupContent as h,
  SidebarTrigger as i,
  Sidebar as j,
  SidebarRail as k,
  SidebarHeader as l,
  SidebarContent as m,
  SidebarFooter as n,
  SidebarProvider as o,
  SidebarInset as p,
  useSidebar as u
};
//# sourceMappingURL=theme-toggle-_TSuQHPu.js.map
