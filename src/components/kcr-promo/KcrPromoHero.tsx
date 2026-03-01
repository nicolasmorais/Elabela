"use client";

import React from 'react';
import { Star, Award, Zap, ShoppingBag, ShieldCheck, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    config,
    formatTime,
    timeLeft
}: KcrPromoHeroProps) => {
  // Definindo o link fixo conforme solicitado
  const checkoutUrl = 'https://seguro.elabela.store/r/I83HKZOFGP';

  return (
    <header className="relative pt-0 md:pt-20 pb-16 md:pb-24 px-0 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* ESQUERDA: GALERIA (50%) - EDGE TO EDGE NO MOBILE */}
                <div className="lg:col-span-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-none md:rounded-[2.5rem] overflow-hidden border-0 md:border border-slate-100 shadow-none md:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={productImages[activeImageIndex]} 
                          alt="Produto Principal" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                        />
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA (50%) - CENTRALIZADO NO MOBILE */}
                <div className="lg:col-span-6 space-y-6 px-6 md:px-0 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Kit Antiqueda do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 2322 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50.800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3 w-full">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span>
                        </div>
                        <div className="flex items-baseline justify-center md:justify-start gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            {config.installmentText}
                        </p>
                    </div>

                    <div className="space-y-4 pt-4 w-full">
                        <Link href={checkoutUrl} target="_blank" className="hidden md:block">
                            <Button 
                                className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 group animate-pulse"
                                style={{ backgroundColor: '#35c867' }}
                            >
                                <ShoppingBag size={28} />
                                <span>COMPRAR COM DESCONTO</span>
                                <TrendingDown size={28} className="animate-bounce" />
                            </Button>
                        </Link>
                        
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between group w-full text-left">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2 rounded-lg shrink-0">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — <span className="text-slate-500 font-bold">Envio imediato em até 24h</span></p>
                                    <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <ShieldCheck className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors shrink-0" size={24} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
  );
};