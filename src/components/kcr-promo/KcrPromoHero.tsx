"use client";

import React from 'react';
import { Star, Zap, ShoppingBag, ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react';
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch">
                
                {/* ESQUERDA: GALERIA - PROPORÇÃO 1:1 GARANTIDA */}
                <div className="lg:col-span-6">
                    <div className="relative aspect-square bg-[#F9F9F9] rounded-none md:rounded-[3rem] overflow-hidden border-0 md:border border-slate-100 shadow-none md:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={productImages[activeImageIndex]} 
                          alt="Kit Cavalo de Raça" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA - ALINHADA À ALTURA DA IMAGEM */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 px-6 md:px-0 mt-4 md:mt-0">
                    
                    {/* Header: Badges & Title */}
                    <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full border border-orange-100 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Sparkles size={12} fill="currentColor" /> Eleito o Nº 1 em Reconstrução
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                            Kit Cavalo de Raça <br className="hidden lg:block" />
                            <span className="text-orange-600">Antiqueda Intensiva</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-900 ml-1">4.9</span>
                            </div>
                            <span className="text-sm font-medium text-slate-400">
                                (2.322 avaliações)
                            </span>
                        </div>
                    </div>

                    {/* BLOCO DE PREÇO: FOCO NA OFERTA 1+1 */}
                    <div className="w-full bg-white rounded-[3rem] border-2 border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:border-orange-200 flex-1 flex flex-col justify-center p-6 md:p-8 space-y-6">
                        
                        {/* Promo Label */}
                        <div className="flex items-center gap-4">
                            <div className="h-0.5 flex-1 bg-slate-100"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 whitespace-nowrap">Oferta Especial Limitada</span>
                            <div className="h-0.5 flex-1 bg-slate-100"></div>
                        </div>

                        <div className="space-y-6">
                            {/* Lado do Preço - Centralizado */}
                            <div className="space-y-1 text-center">
                                <p className="text-slate-400 line-through font-bold text-base">R$ 297,00</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-2xl font-black text-slate-900">R$</span>
                                    <span className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter">147<span className="text-2xl">,00</span></span>
                                </div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{config.installmentText}</p>
                            </div>

                            {/* Lado da Vantagem - FULL SPACE */}
                            <div className="space-y-4">
                                <div className="p-5 md:p-6 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 text-center space-y-1 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform">
                                        <Zap size={60} fill="currentColor" className="text-emerald-600" />
                                    </div>
                                    <p className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.3em] leading-none">Vantagem Exclusiva de Hoje:</p>
                                    <p className="text-lg md:text-2xl font-black text-slate-900 leading-tight">
                                        Compre 1 e <span className="text-emerald-600 underline decoration-emerald-200 decoration-4 underline-offset-4">Leve +1 Kit Grátis</span>
                                    </p>
                                </div>

                                {/* FRETE GRÁTIS */}
                                <div className="flex items-center justify-center gap-2">
                                    <div className="bg-emerald-500 rounded-full p-0.5">
                                        <Check size={12} className="text-white" strokeWidth={4} />
                                    </div>
                                    <span className="text-sm font-black text-slate-900 uppercase tracking-wider">Frete Grátis Para Brasil</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTÃO CTA */}
                    <div className="pt-2">
                        <Link href={checkoutUrl} target="_blank" className="hidden md:block group/btn">
                            <Button 
                                className="w-full h-20 text-white rounded-3xl font-black text-2xl uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(53,200,103,0.4)] transition-all hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-4"
                                style={{ backgroundColor: '#35c867' }}
                            >
                                <ShoppingBag size={24} />
                                <span>Aproveitar Oferta 1+1</span>
                                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </header>
  );
};