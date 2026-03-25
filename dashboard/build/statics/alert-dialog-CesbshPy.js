import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { v as Root2, w as Trigger2, x as Portal2, y as Content2, z as Title2, D as Description2, A as Cancel, B as Action, E as Overlay2 } from "./radix-3Azqn93X.js";
import { c as cn, a as useDirDetection } from "./index-C_i3x-Gf.js";
import { b as buttonVariants } from "./button-BOH66nN-.js";
const AlertDialog = Root2;
const AlertDialogTrigger = Trigger2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
      ...props,
      ref
    }
  )
);
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        ),
        ...props
      }
    )
  ] })
);
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => {
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir, className: cn("flex flex-col space-y-2", dir === "rtl" ? "text-center sm:text-right" : "text-center sm:text-left", className), ...props });
};
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => {
  const dir = useDirDetection();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dir, className: cn("flex flex-col-reverse sm:flex-row sm:justify-end", dir === "rtl" ? "sm:space-x-2 sm:space-x-reverse" : "sm:space-x-2", className), ...props });
};
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title2, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description2, { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), props.variant && buttonVariants({ variant: props.variant }), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cancel, { ref, className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className), ...props }));
AlertDialogCancel.displayName = Cancel.displayName;
export {
  AlertDialog as A,
  AlertDialogContent as a,
  AlertDialogHeader as b,
  AlertDialogTitle as c,
  AlertDialogDescription as d,
  AlertDialogFooter as e,
  AlertDialogCancel as f,
  AlertDialogAction as g,
  AlertDialogTrigger as h
};
//# sourceMappingURL=alert-dialog-CesbshPy.js.map
