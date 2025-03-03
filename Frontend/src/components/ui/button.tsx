import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Map variants to DaisyUI classes
    const variantClasses = {
      primary: "btn btn-primary",
      secondary: "btn btn-secondary",
      outline: "btn btn-outline",
      ghost: "btn btn-ghost",
      link: "btn btn-link",
      destructive: "btn bg-red-500 text-white hover:bg-red-600",
    };

    // Map sizes to DaisyUI classes
    const sizeClasses = {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      icon: "btn-circle",
    };

    return (
      <Comp
        className={cn(
          "btn",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
