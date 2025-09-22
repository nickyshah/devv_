import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
      default: "bg-primary text-primary-foreground hover:opacity-90",
      outline: "border border-border bg-transparent text-foreground hover:bg-muted",
      secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    } as const;
    const sizes = {
      sm: "h-9 px-3 py-1 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-6 py-3 text-lg",
    } as const;
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";

export default Button;
