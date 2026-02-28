"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export function KcrPromoStickyBar({ priceCard, pricePix, checkoutUrl }: KcrPromoStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] md:hidden">
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-tighter mb-0.5">
            COMPRE 1 LEVE OUTRO KIT GRÁTIS
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-slate-900 tracking-tighter">
              R$ {pricePix}
            </span>
            <span className="text-[10px] font-bold text-slate-400 line-through">
              {priceCard}
            </span>
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            No PIX (Oferta Ativa)
          </span>
        </div>

        <a
          href={checkoutUrl}
          className="flex-1 bg-slate-900 text-white h-14 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-slate-200"
        >
          <span className="text-xs font-black uppercase tracking-widest">
            COMPRAR 1 E LEVAR 2
          </span>
          <ShoppingCart size={16} className="text-orange-400" />
        </a>
      </div>
    </div>
  );
}