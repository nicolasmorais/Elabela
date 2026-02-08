"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Zap } from 'lucide-react';
import Link from 'next/link';

interface MobileStickyBarProps {
  price: string;
  buttonText: string;
  checkoutUrl: string;
}

export const MobileStickyBar = ({ price, buttonText, checkoutUrl }: MobileStickyBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-orange-100 p-4 z-[100] flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] md:hidden animate-in fade-in slide-in-from-bottom-full duration-700">
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1 text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-1">
          <Zap size={10} fill="currentColor" /> Pix
        </div>
        <div className="text-slate-950 font-black text-2xl tracking-tighter">
          <span className="text-xs mr-0.5">R$</span>
          {price}
        </div>
      </div>

      <Link href={checkoutUrl} className="flex-1">
        <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black uppercase tracking-tight shadow-lg shadow-green-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
          <ShoppingBag size={18} />
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};