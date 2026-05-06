import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "hextech" | "outline";
}

export const HeroButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "gold", children, ...props }, ref) => {
    const variants = {
      gold: "bg-gradient-gold text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] animate-pulse-glow",
      hextech: "bg-gradient-hextech text-secondary-foreground hover:shadow-[0_0_40px_hsl(var(--secondary)/0.7)]",
      outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative px-8 py-4 font-display font-bold uppercase tracking-[0.15em] text-sm md:text-base rounded transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

HeroButton.displayName = "HeroButton";
