"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';
import Link from 'next/link';

interface MobileStickyBarProps {
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
}

export const MobileStickyBar = ({ installmentText, buttonText, checkoutUrl }: MobileStickyBarProps) => {
  // Link fixo solicitado pelo usuário
  const linkSugerido = "https://seguro.elabela.store/r/M1MW6QA99S";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-full duration-700">
      {/* Scarcity - Estoque Acabando */}
      <div className="text-center mb-2">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
          Estoque acabando
        </p>
      </div>

      {/* Botão Ocultado conforme solicitação */}
      {/* 
      <Link href={linkSugerido} className="block" target="_blank" rel="noopener noreferrer">
        <Button className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-xl shadow-green-100 active:scale-[0.98] transition-all flex items-center justify-between gap-0 overflow-hidden px-5 py-0">
          <div className="flex flex-col items-start leading-tight border-r border-white/20 pr-4 text-left">
            <span className="text-[10px] font-bold uppercase opacity-70 tracking-widest">Apenas</span>
            <span className="text-lg font-black tracking-tight whitespace-nowrap">12x de 14,96</span>
          </div>
          
          <div className="flex-1 flex items-center justify-center pl-4">
            <span className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter italic">
                {buttonText || 'Comprar agora'}
                <ArrowRight size={22} className="shrink-0" />
            </span>
          </div>
        </Button>
      </Link>
      */}

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

// Componente local para ícone não importado
const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
);