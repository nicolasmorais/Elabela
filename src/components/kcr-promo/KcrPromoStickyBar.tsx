"use client";

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface KcrPromoStickyBarProps {
  installmentText: string;
  checkoutUrl: string;
}

export const KcrPromoStickyBar = ({ installmentText, checkoutUrl }: KcrPromoStickyBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-orange-100 p-4 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.1)] sm:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        {/* Lado Esquerdo: Preço */}
        <div className="flex-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
            Oferta Hoje
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-bold text-slate-900">12x de</span>
            <span className="text-xl font-black text-slate-900 tracking-tighter">
              {installmentText.replace('Ou 12x de ', '')}
            </span>
          </div>
        </div>

        {/* Lado Direito: Botão */}
        <Link href={checkoutUrl} className="flex-[1.5]" target="_blank">
          <Button 
            className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-sm uppercase tracking-tighter shadow-lg shadow-green-200 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <ShoppingBag size={18} />
            PAGAR AGORA
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
      
      {/* Indicador de Segurança Pequeno */}
      <p className="text-[8px] text-center text-slate-300 font-bold uppercase tracking-[0.2em] mt-3">
        🔒 Checkout 100% Seguro
      </p>
    </div>
  );
};