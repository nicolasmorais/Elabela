"use client";

import React from 'react';
import { Button,  } from '@/components/ui/button';
import { Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MobileStickyBarProps {
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
}

export const MobileStickyBar = ({ installmentText, buttonText, checkoutUrl }: MobileStickyBarProps) => {
  // Agora usamos o checkoutUrl que vem das configurações da página, removendo o link fixo 'M1MW6QA99S'
  const finalLink = checkoutUrl || "#";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-full duration-700">
      {/* Scarcity - Estoque Acabando */}
      <div className="text-center mb-2">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
          Estoque acabando
        </p>
      </div>

      <Link href={finalLink} className="block" target="_blank" rel="noopener noreferrer">
        <Button className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-xl shadow-green-100 active:scale-[0.98] transition-all flex items-center justify-between gap-0 overflow-hidden px-5 py-0">
          {/* LADO ESQUERDO: PARCELAMENTO */}
          <div className="flex flex-col items-start leading-tight border-r border-white/20 pr-4 text-left">
            <span className="text-[10px] font-bold uppercase opacity-70 tracking-widest">Apenas</span>
            <span className="text-lg font-black tracking-tight whitespace-nowrap">{installmentText}</span>
          </div>
          
          {/* LADO DIREITO: COMPRAR AGORA */}
          <div className="flex-1 flex items-center justify-center pl-4">
            <span className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter italic">
                {buttonText || 'Comprar agora'}
                <ArrowRight size={22} className="shrink-0" />
            </span>
          </div>
        </Button>
      </Link>

      {/* Frete Grátis Info */}
      <div className="mt-2 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
          <Truck size={12} className="text-emerald-500" />
          Frete grátis para todo Brasil
        </p>
      </div>
    </div>
  );
};