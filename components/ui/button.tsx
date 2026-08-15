import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "secondary-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-light focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-olive text-white hover:bg-brand-green shadow-sm hover:shadow-card-hover",
  secondary:
    "bg-white text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white",
  "secondary-dark":
    "bg-brand-charcoal text-white border-2 border-brand-charcoal hover:bg-brand-black",
  ghost: "bg-transparent text-brand-black hover:text-brand-olive",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
