"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface DashboardSwitchProps extends React.ComponentPropsWithoutRef<typeof Switch> {}

export const DashboardSwitch = React.forwardRef<
  React.ElementRef<typeof Switch>,
  DashboardSwitchProps
>(({ className, ...props }, ref) => {
  return (
    <Switch
      ref={ref}
      className={cn(
        // Sobrescreve as cores padrão do Shadcn para usar o verde e o cinza escuro
        "data-[state=checked]:bg-[#0bc839] data-[state=unchecked]:bg-[#1e293b]",
        // Garante que o thumb seja branco
        "[&>span]:data-[state=checked]:bg-white [&>span]:data-[state=unchecked]:bg-white",
        className
      )}
      {...props}
    />
  );
});
DashboardSwitch.displayName = "DashboardSwitch";