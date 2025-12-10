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
        // Sobrescreve as cores padrão do Shadcn para usar o azul e o cinza escuro
        "data-[state=checked]:bg-[#38bdf8] data-[state=unchecked]:bg-[#020617]", // Azul primário e fundo de input
        // Garante que o thumb seja branco
        "[&>span]:data-[state=checked]:bg-white [&>span]:data-[state=unchecked]:bg-white",
        className
      )}
      {...props}
    />
  );
});
DashboardSwitch.displayName = "DashboardSwitch";