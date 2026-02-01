"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean; 
}

export const Logo = ({ className, iconOnly = false }: LogoProps) => {
  const logoUrl = "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769936507532-ChatGPT-Image-1-de-fev.-de-2026,-05_59_37-(1).png";

  return (
    <div className={cn("flex items-center select-none", className)}>
      <img 
        src={logoUrl} 
        alt="Control Pages Logo" 
        className={cn(
          "h-32 w-auto object-contain", // Aumentado drasticamente para h-32
          iconOnly && "h-20 w-20"
        )}
      />
    </div>
  );
};