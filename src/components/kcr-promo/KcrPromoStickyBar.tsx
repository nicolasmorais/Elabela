"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export function KcrPromoStickyBar({ checkoutUrl }: KcrPromoStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-orange-100 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] md:hidden">
      <div className="px-4 py-5 flex flex-col gap-4">
        
        {/* Chamada de Oferta Clara e Amigável */}
        <div className="flex items-center justify-center gap-2 animate-pulse">
            <span className="text-[13px] font-black text-orange-700 uppercase tracking-tight text-center">
                🔥 PROMOÇÃO: COMPRE 1 E GANHE MAIS 1 DE PRESENTE
            </span>
        </div>

        {/* Botão - Verde com novo texto */}
        <a
            href="https://seguro.elabela.store/r/EGL6N8EAE1"
            className="w-full bg-green-600 hover:bg-green-700 text-white h-16 rounded-[1.5rem] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl animate-pulse border-2 border-green-500/20"
        >
            <div className="flex flex-col items-center leading-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/80 mb-0.5">
                    CLIQUE AQUI PARA
                </span>
                <span className="text-base font-black uppercase tracking-widest">
                    COMPRAR 1 E LEVAR 2
                </span>
            </div>
            <ShoppingCart size={20} className="text-white ml-1" />
        </a>
      </div>
    </div>
  );
}