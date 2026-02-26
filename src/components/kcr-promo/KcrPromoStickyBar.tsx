"use client";

import React from 'react';
import { ShoppingBag, TrendingDown, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface KcrPromoStickyBarProps {
  priceCard: string;
  pricePix: string;
  checkoutUrl: string;
}

export const KcrPromoStickyBar = ({ priceCard, pricePix, checkoutUrl }: KcrPromoStickyBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-orange-100 p-4 pb-3 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1)] sm:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-md mx-auto space-y-3">
        
        {/* Chamada Superior com Escassez */}
        <p className="text-center text-[10px] font-black text-red-600 uppercase tracking-[0.15em] animate-pulse flex items-center justify-center gap-1.5">
            <Gift size={12} /> Apenas 100 unidades com brinde exclusivo
        </p>

        {/* Informação de Preço: De / Por */}
        <div className="flex items-center justify-center gap-3">
            <span className="text-[11px] font-bold text-slate-400 line-through">
                de {priceCard}
            </span>
            <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Por apenas:</span>
                <span className="text-2xl font-black text-emerald-600 tracking-tighter">
                    R$ {pricePix}
                </span>
            </div>
        </div>

        {/* Botão com a nova oferta do secador */}
        <Link href={checkoutUrl} className="block w-full group" target="_blank">
            <Button 
                className="w-full h-auto py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black shadow-xl shadow-green-100 flex flex-col items-center justify-center gap-0 active:scale-95 transition-all"
            >
                <div className="flex items-center gap-2 text-base md:text-lg uppercase tracking-tight">
                    <span>Compre Com Desconto</span>
                    <TrendingDown size={20} className="animate-bounce" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] md:text-xs opacity-90 uppercase tracking-widest">
                    <span>e Ganhe até um Secador</span>
                    <Gift size={12} className="fill-current" />
                </div>
            </Button>
        </Link>
        
        {/* Indicador de Segurança */}
        <p className="text-[8px] text-center text-slate-300 font-bold uppercase tracking-[0.2em]">
            🔒 Pagamento 100% Seguro e Criptografado
        </p>
      </div>
    </div>
  );
};