"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MobileStickyBarProps {
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
}

export const MobileStickyBar = ({ buttonText, checkoutUrl }: MobileStickyBarProps) => {
  // Garantindo que use o link solicitado caso venha vazio
  const finalUrl = checkoutUrl || 'https://seguro.elabela.store/r/I83HKZOFGP';

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 py-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-full duration-700">
      <div className="text-center mb-2">
        <p className="text-[13px] font-black uppercase tracking-tighter text-red-600 animate-pulse">
            🎁 Finalize sua compra e ganhe um secador grátis
        </p>
      </div>
      <Link href={finalUrl} className="block" target="_blank" rel="noopener noreferrer">
        <Button className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-xl shadow-green-100 active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden px-5 py-0">
          <span className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter italic">
              Finalizar compra com desconto
              <ArrowRight size={22} className="shrink-0" />
          </span>
        </Button>
      </Link>
    </div>
  );
};

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