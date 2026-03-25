import { r as reactExports, j as jsxRuntimeExports } from "./react-D6OUsQqF.js";
import { c as cn, L as LoaderCircle, a$ as cva } from "./index-C_i3x-Gf.js";
import { N as Slot } from "./radix-3Azqn93X.js";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-1 items-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 [&>svg]:w-5 [&>svg]:h-5",
        lg: "h-11 rounded-md px-8",
        icon: "h-7 w-7 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1.5px] rounded-sm",
        "icon-md": "h-9 w-9 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1.5px] rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(({ className, variant, size, asChild = false, isLoading = false, loadingText, children, ...rest }, ref) => {
  const Comp = isLoading ? "button" : asChild ? Slot : "button";
  const content = isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }),
    loadingText
  ] }) : children;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...rest, children: content });
});
Button.displayName = "Button";
export {
  Button as B,
  buttonVariants as b
};
//# sourceMappingURL=button-BOH66nN-.js.map
