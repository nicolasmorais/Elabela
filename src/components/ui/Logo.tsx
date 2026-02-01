"use client";

import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo = ({ className, iconOnly = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Icon Wrapper */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0061FF] text-white shadow-lg shadow-blue-500/20">
        <LayoutDashboard size={24} strokeWidth={2.5} />
      </div>
      
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            Elabela
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#0061FF] uppercase">
            Control Pages
          </span>
        </div>
      )}
    </div>
  );
};