"use client";

import React from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export function KcrPromoStickyBar({ priceCard, pricePix, checkoutUrl }: KcrPromoStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-orange-100 shadow-[0_-15px_50px_rgba(0,0,0,0.15)] md:hidden">
      <div className="px-5 py-5 flex flex-col gap-4">
        
        {/* Chamada de Oferta Pulsante */}
        <div className="flex items-center justify-center gap-2 animate-pulse">
            <Zap size={14} className="text-orange-600 fill-current" />
            <span className="text-[13px] font-black text-orange-600 uppercase tracking-tighter">
                COMPRE 1 LEVE OUTRO KIT GRÁTIS
            </span>
            <Zap size={14} className="text-orange-600 fill-current" />
        </div>

        <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
                        R$ {pricePix}
                    </span>
                    <span className="text-xs font-bold text-slate-400 line-through">
                        {priceCard}
                    </span>
                </div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">
                    OFERTA ATIVA NO PIX
                </span>
            </div>

            <a
                href={checkoutUrl}
                className="flex-1 bg-slate-950 text-white h-16 rounded-[1.5rem] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-2xl shadow-slate-400 animate-pulse border-2 border-orange-500/20"
            >
                <div className="flex flex-col items-center leading-none">
                    <span className="text-[11px] font-black uppercase tracking-[0.1em] text-orange-400 mb-0.5">
                        CLIQUE PARA
                    </span>
                    <span className="text-sm font-black uppercase tracking-widest">
                        COMPRAR 1 E LEVAR 2
                    </span>
                </div>
                <ShoppingCart size={20} className="text-orange-400 ml-1" />
            </a>
        </div>
      </div>
    </div>
  );
}