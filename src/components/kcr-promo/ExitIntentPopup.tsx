"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, ShoppingBag, Zap, Gift, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Link da oferta de 97 (Placeholder - ajuste conforme necessário)
  const discountLink = "https://seguro.elabela.store/r/I83HKZOFGP";

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (hasShown) return;
      
      // Se o mouse sair pelo topo da página (intenção de fechar aba/mudar URL)
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Fallback para mobile (mostra após 45 segundos de navegação)
    const timer = setTimeout(() => {
        if (!hasShown) {
            setIsVisible(true);
            setHasShown(true);
        }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
      clearTimeout(timer);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl border-[6px] border-orange-500 overflow-hidden animate-in zoom-in-95 duration-500">
        
        {/* Botão Fechar (Ícone) */}
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors z-10"
        >
            <X size={24} />
        </button>

        <div className="p-8 md:p-10 text-center space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tighter leading-tight">
                    ESPERA! <br /> <span className="text-orange-600">Não vai embora ainda…</span>
                </h2>
                <div className="h-1 w-20 bg-orange-200 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                <p>Eu quero muito te ajudar a parar a queda de cabelo.</p>
                <p>Por isso, estou fazendo algo que nunca fiz antes.</p>
                <p className="font-bold text-slate-900">Se você sair agora, vai perder a única oferta que preparei especialmente para você:</p>
            </div>

            {/* BOX DE PREÇO */}
            <div className="bg-orange-50 rounded-3xl p-6 border-2 border-orange-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-orange-600 group-hover:scale-110 transition-transform"><Zap size={60} fill="currentColor" /></div>
                
                <div className="space-y-1 relative z-10">
                    <p className="text-slate-400 line-through font-bold text-sm">De R$ 147,00</p>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-orange-800 uppercase tracking-widest">Kit Completo por apenas</span>
                        <div className="text-slate-950 font-black text-5xl md:text-6xl tracking-tighter">
                            R$ 97<span className="text-2xl">,00</span>
                        </div>
                    </div>
                    <p className="text-emerald-600 font-black text-xs uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
                        <Check size={14} strokeWidth={4} /> + Frete Grátis para todo o Brasil
                    </p>
                </div>
            </div>

            {/* BRINDE */}
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                <div className="bg-pink-500 text-white p-3 rounded-xl shadow-lg animate-pulse"><Gift size={20} /></div>
                <div className="space-y-0.5">
                    <p className="text-[10px] font-black text-pink-600 uppercase tracking-widest">🎁 BÔNUS EXCLUSIVO</p>
                    <p className="text-xs font-bold text-slate-700 leading-tight">
                        Se estiver entre as 100 primeiras, leva um <span className="text-slate-950">Secador Profissional IonShield X3</span> grátis.
                    </p>
                </div>
            </div>

            {/* BOTÃO CTA */}
            <div className="space-y-4 pt-2">
                <Link href={discountLink} target="_blank">
                    <Button 
                        className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-green-100 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95"
                    >
                        <ShoppingBag size={22} />
                        <span>SIM! QUERO MEU KIT POR R$ 97</span>
                        <ArrowRight size={22} />
                    </Button>
                </Link>
                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">
                    ⚠️ Essa oferta some quando você fechar essa janela.
                </p>
            </div>

            {/* LINK DE DISMISS */}
            <button 
                onClick={() => setIsVisible(false)}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-600 underline underline-offset-4 decoration-slate-200 transition-colors"
            >
                Não quero desconto. Prefiro pagar R$ 147,00.
            </button>
        </div>
      </div>
    </div>
  );
};