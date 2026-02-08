"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface MobileStickyBarProps {
  price: string;
  buttonText: string;
  checkoutUrl: string;
  installmentText: string;
}

export const MobileStickyBar = ({ price, buttonText, checkoutUrl, installmentText }: MobileStickyBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/98 border-t border-slate-100 px-4 pt-2 pb-6 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-bottom-full duration-700">
      {/* Scarcity - Estoque Acabando */}
      <div className="text-center mb-2">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
          Estoque acabando
        </p>
      </div>

      <Link href={checkoutUrl} className="block">
        <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-xl shadow-green-100 active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-0 overflow-hidden px-2">
          {/* Preço | COMPRAR AGORA */}
          <div className="flex items-center gap-3 font-black text-lg uppercase tracking-tight">
            <span className="whitespace-nowrap">R$ {price}</span>
            <span className="opacity-30 font-light text-2xl">|</span>
            <span className="flex items-center gap-2 truncate">
                <ShoppingBag size={18} className="shrink-0" />
                {buttonText}
            </span>
          </div>
          
          {/* PARCELAS (Texto Suave abaixo) */}
          <p className="text-[9px] font-bold uppercase opacity-80 tracking-widest leading-none mt-1">
            {installmentText.replace('ou em ', '')}
          </p>
        </Button>
      </Link>
    </div>
  );
};