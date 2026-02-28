"use client";

import React from 'react';
import { ShoppingCart, Zap, ShieldCheck } from 'lucide-react';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export function KcrPromoStickyBar({ priceCard, pricePix, checkoutUrl }: KcrPromoStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-orange-100 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:hidden">
      <div className="px-5 py-5 flex flex-col gap-4">
        
        {/* Chamada de Oferta Clara e Amigável */}
        <div className="flex items-center justify-center gap-2 animate-pulse">
            <span className="text-[14px] font-black text-orange-700 uppercase tracking-tight">
                🔥 PROMOÇÃO: COMPRE 1 E GANHE MAIS 1 DE PRESENTE
            </span>
        </div>

        <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-950 tracking-tighter leading-none">
                        R$ {pricePix}
                    </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <ShieldCheck size={12} className="text-emerald-600" />
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                        SITE SEGURO E OFICIAL
                    </span>
                </div>
            </div>

            <a
                href={checkoutUrl}
                className="flex-1 bg-slate-950 text-white h-16 rounded-[1.5rem] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-2xl animate-pulse border-2 border-orange-500/30"
            >
                <div className="flex flex-col items-center leading-none">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange-400 mb-0.5">
                        CLIQUE AQUI E
                    </span>
                    <span className="text-sm font-black uppercase tracking-widest">
                        QUERO MEU KIT + BRINDE
                    </span>
                </div>
                <ShoppingCart size={20} className="text-orange-400 ml-1" />
            </a>
        </div>
      </div>
    </div>
  );
}