"use client";

import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export function KcrPromoStickyBar({ pricePix, checkoutUrl }: KcrPromoStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-orange-100 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] md:hidden">
      <div className="px-4 py-5 flex flex-col gap-4">
        
        {/* Chamada de Oferta Clara e Amigável */}
        <div className="flex items-center justify-center gap-2 animate-pulse">
            <span className="text-[13px] font-black text-orange-700 uppercase tracking-tight">
                🔥 PROMOÇÃO: COMPRE 1 E GANHE MAIS 1 DE PRESENTE
            </span>
        </div>

        <div className="flex items-center justify-between gap-2">
            {/* Lado do Preço - Ocupando 20% */}
            <div className="w-[20%] flex flex-col items-center text-center">
                <div className="flex flex-col leading-none">
                    <span className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">POR</span>
                    <span className="text-xl font-black text-slate-950 tracking-tighter">
                        R$ {pricePix.split(',')[0]}
                    </span>
                </div>
            </div>

            {/* Botão - Ocupando 80% */}
            <a
                href={checkoutUrl}
                className="w-[80%] bg-slate-950 text-white h-16 rounded-[1.5rem] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-2xl animate-pulse border-2 border-orange-500/30"
            >
                <div className="flex flex-col items-center leading-none">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange-400 mb-0.5">
                        CLIQUE AQUI E
                    </span>
                    <span className="text-sm font-black uppercase tracking-widest">
                        QUERO MEU KIT + BRINDE
                    </span>
                </div>
                <ShoppingCart size={18} className="text-orange-400 ml-1" />
            </a>
        </div>
      </div>
    </div>
  );
}