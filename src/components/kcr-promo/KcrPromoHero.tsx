"use client";

import React from 'react';
import { Star, Zap, ShoppingBag, ShieldCheck, Sparkles, ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface KcrPromoHeroProps {
    activeImageIndex: number;
    productImages: string[];
    setActiveImageIndex: (index: number) => void;
    nextImage: () => void;
    prevImage: () => void;
    config: any;
    formatTime: (seconds: number) => string;
    timeLeft: number;
}

export const KcrPromoHero = ({ 
    activeImageIndex, 
    productImages, 
    config
}: KcrPromoHeroProps) => {
  const checkoutUrl = 'https://seguro.elabela.store/r/EGL6N8EAE1';

  return (
    <header className="relative pt-0 md:pt-16 pb-16 md:pb-24 px-0 md:px-6 overflow-hidden bg-white">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-50/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                
                {/* ESQUERDA: GALERIA */}
                <div className="lg:col-span-6">
                    <div className="relative aspect-square bg-[#F9F9F9] rounded-none md:rounded-[4rem] overflow-hidden border-0 md:border border-slate-100 shadow-none md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group">
                        <img 
                          src={productImages[activeImageIndex]} 
                          alt="Kit Cavalo de Raça" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA - DESIGN PREMIUM DESKTOP */}
                <div className="lg:col-span-6 space-y-8 px-6 md:px-0 mt-4 md:mt-0">
                    
                    {/* Header: Badges & Title */}
                    <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF8F2] text-[#B85C2E] rounded-full border border-[#FDE0CF] text-[11px] font-black uppercase tracking-[0.1em]">
                            <Sparkles size={14} className="fill-current" /> Eleito o Nº 1 em Reconstrução
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#333333] leading-[0.95]">
                            Kit Cavalo de Raça <br />
                            <span className="text-[#F1662A]">Antiqueda Intensiva</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span className="text-sm font-black text-slate-900 ml-1">4.9</span>
                            </div>
                            <span className="text-sm font-bold text-slate-400">
                                (2.322 avaliações • 50k+ pedidos no mês)
                            </span>
                        </div>
                    </div>

                    {/* BLOCO DE PREÇO (O CARD BRANCO DA IMAGEM) */}
                    <div className="w-full bg-white rounded-[4rem] border-2 border-slate-50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
                        <div className="p-8 md:p-14 flex flex-col items-center text-center space-y-8">
                            
                            {/* Separador Oferta */}
                            <div className="flex items-center gap-6 w-full opacity-60">
                                <div className="h-[1px] flex-1 bg-slate-200"></div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F1662A] whitespace-nowrap">Oferta Especial Limitada</span>
                                <div className="h-[1px] flex-1 bg-slate-200"></div>
                            </div>

                            {/* Preços Estilizados */}
                            <div className="space-y-2">
                                <p className="text-slate-300 line-through font-bold text-xl">R$ 297,00</p>
                                <div className="flex items-start justify-center font-black text-slate-900 tracking-tighter">
                                    <span className="text-3xl md:text-4xl mt-6 mr-1">R$</span>
                                    <span className="text-9xl md:text-[10rem] leading-none">147<span className="text-4xl md:text-5xl">,00</span></span>
                                </div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-2">
                                    OU 12X DE R$ 14,96
                                </p>
                            </div>

                            {/* Box Vantagem (Verde Água) */}
                            <div className="w-full bg-[#F0FFF7] rounded-[3rem] p-8 md:p-10 border border-[#D1F7E4] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000">
                                    <Zap size={100} fill="currentColor" className="text-emerald-600" />
                                </div>
                                
                                <div className="relative z-10 space-y-2">
                                    <p className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.3em]">Vantagem Exclusiva de Hoje:</p>
                                    <p className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                                        Compre 1 e <span className="text-emerald-600 underline decoration-[#A7E9C9] decoration-4 underline-offset-8">Leve +1 Kit Grátis</span>
                                    </p>
                                </div>
                            </div>

                            {/* Frete Grátis */}
                            <div className="flex items-center justify-center gap-3">
                                <div className="bg-emerald-500 rounded-full p-1 shadow-lg shadow-emerald-500/20">
                                    <Check size={14} className="text-white" strokeWidth={4} />
                                </div>
                                <span className="text-sm font-black text-slate-700 uppercase tracking-widest">Frete Grátis Para Brasil</span>
                            </div>
                        </div>
                    </div>

                    {/* BOTÃO CTA (ESTILO IMAGEM) */}
                    <div className="pt-4 px-4 md:px-0">
                        <Link href={checkoutUrl} target="_blank" className="group/btn">
                            <Button 
                                className="w-full h-24 text-white rounded-3xl font-black text-2xl md:text-3xl uppercase tracking-tighter shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4"
                                style={{ backgroundColor: '#3ED073' }}
                            >
                                <ShoppingCart size={28} className="group-hover/btn:scale-110 transition-transform" />
                                <span>Aproveitar Oferta 1+1</span>
                                <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </header>
  );
};