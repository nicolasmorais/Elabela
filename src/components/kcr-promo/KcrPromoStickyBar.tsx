"use client";

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export const KcrPromoStickyBar = ({ priceCard, pricePix, checkoutUrl }: KcrPromoStickyBarProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 p-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Oferta 1+1</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-slate-950">R$ {pricePix}</span>
            <span className="text-[10px] font-bold text-slate-400">à vista</span>
          </div>
        </div>

        <Link href={checkoutUrl} className="flex-1 max-w-[240px]">
          <Button 
            className="w-full h-14 bg-[#35c867] hover:bg-[#2eb15a] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-green-100 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <ShoppingBag size={18} />
            <span>COMPRAR AGORA</span>
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};