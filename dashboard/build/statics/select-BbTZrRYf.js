import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { $ as Root2, a0 as Value, a1 as Trigger, a2 as Icon, a3 as Portal, a4 as Content2, a5 as Viewport, a6 as Item, a7 as ItemIndicator, a8 as ItemText, a9 as Group, aa as ScrollUpButton, ab as ScrollDownButton, ac as Label, ad as Separator } from "./radix-3Azqn93X.js";
import { f as createLucideIcon, c as cn } from "./index-C_i3x-Gf.js";
import { C as ChevronDown } from "./chevron-down-CYTM5oAI.js";
import { C as Check } from "./check-ayw17ogi.js";
const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
const Select = Root2;
const SelectGroup = Group;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(
  ({ className, children, icon = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    {
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    }
  )
);
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollUpButton, { ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) })
);
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollDownButton, { ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
);
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[5rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    }
  ) })
);
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = Label.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = Separator.displayName;
export {
  Select as S,
  SelectTrigger as a,
  SelectValue as b,
  SelectContent as c,
  SelectGroup as d,
  SelectItem as e,
  SelectLabel as f
};
//# sourceMappingURL=select-BbTZrRYf.js.map
