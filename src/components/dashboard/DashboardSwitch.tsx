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
        // Light Mode: Fundo desativado cinza claro, Fundo ativado azul primário
        "data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-[#38bdf8]", 
        // Dark Mode: Fundo desativado cinza escuro, Fundo ativado azul primário
        "dark:data-[state=unchecked]:bg-[#020617] dark:data-[state=checked]:bg-[#38bdf8]",
        // Garante que o thumb seja branco em ambos os modos
        "[&>span]:data-[state=checked]:bg-white [&>span]:data-[state=unchecked]:bg-white",
        className
      )}
      {...props}
    />
  );
});
DashboardSwitch.displayName = "DashboardSwitch";