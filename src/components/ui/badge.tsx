import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit",
  {
    variants: {
      variant: {
        default: "border-transparent bg-ip-primary-500 text-primary-foreground shadow hover:bg-ip-primary-500/80",
        secondary: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        upcoming: "border-transparent bg-ip-blue-500 text-primary-foreground shadow hover:bg-ip-blue-500/80",
        passed: "border-transparent bg-ip-red-500 text-primary-foreground shadow hover:bg-ip-red-500/80",
        outline: "text-foreground hover:text-foreground/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
