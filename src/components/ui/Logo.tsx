"use client";

import React from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-[#0061FF] p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
        <Zap className="h-5 w-5 text-white fill-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">Elabela</span>
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Control Pages</span>
      </div>
    </div>
  );
};