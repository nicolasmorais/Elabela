"use client";

import React, { useState } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772416572105-unnamed-(5)-(1).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772421083925-image-(2)-(1).jpg",
];

interface KcrOriginalHeroProps {
  config: any;
  formatTime: (seconds: number) => string;
  timeLeft: number;
}

export const KcrOriginalHero = ({ config, formatTime, timeLeft }: KcrOriginalHeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <header className="relative pt-10 pb-20 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* GALERIA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-orange-500 scale-105" : "border-slate-100 opacity-60")}>
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* INFOS DE COMPRA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white"><Award size={14} /></div> Eleito o melhor Kit do Brasil
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva</h1>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                <div className="flex gap-0.5 text-orange-400">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                                <span>4.9 | 2322 avaliações 5 estrelas</span>
                            </div>
                            <p className="text-emerald-600 font-bold text-sm">
                                Mais de 50800 compras no mês passado.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                          <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                          <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">{config.installmentText}</p>
                    </div>
                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">"Todo Dia Era um Bolo de Cabelo no Pente... Hoje Não Cai Quase Nada."</p>
                    </div>
                    <div className="space-y-4 pt-4">
                        <Link href={config.checkoutUrl} target="_blank" className="block group/btn">
                            <Button 
                                className="w-full h-24 bg-[#35c867] hover:bg-[#2eb35a] text-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(53,200,103,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center gap-0 border-b-[6px] border-[#258d48] overflow-hidden"
                            >
                                <div className="flex items-center gap-3 relative z-10">
                                    <ShoppingBag size={28} className="group-hover/btn:scale-110 transition-transform" /> 
                                    <span className="text-2xl md:text-3xl font-black uppercase tracking-widest">{config.buttonText}</span>
                                    <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                                </div>
                                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em] mt-1 relative z-10">
                                    Site 100% Seguro | Envio Imediato
                                </span>
                            </Button>
                        </Link>
                        
                        {/* BANNER ENTREGA FULL */}
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2 rounded-lg">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — <span className="text-slate-500 font-bold">Envio imediato em até 24h</span></p>
                                    <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <ShieldCheck className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" size={24} />
                        </div>

                        {/* SELOS DE SEGURANÇA */}
                        <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 pt-2">
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-600">
                                <ShieldCheck size={14} /> Compra Segura
                            </div>
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-600">
                                <Lock size={14} /> SSL Criptografado
                            </div>
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-600">
                                <CreditCard size={14} /> Pix / Cartão
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};