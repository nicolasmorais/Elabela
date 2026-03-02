"use client";

import React, { useState } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
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
    <header className="relative bg-white pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* COLUNA DA ESQUERDA: GALERIA DE PRODUTO */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square rounded-3xl bg-[#fcfcfc] border border-slate-100 overflow-hidden shadow-sm group">
                        <img 
                            src={PRODUCT_IMAGES[activeImageIndex]} 
                            alt="Produto" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-100">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImageIndex(i)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                                    activeImageIndex === i ? "border-orange-500 shadow-md" : "border-slate-50 opacity-60 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* COLUNA DA DIREITA: CONTEÚDO E COMPRA */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
                    
                    {/* Cabeçalho do Produto */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Award size={12} /> Kit Profissional Certificado
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                            Kit Cavalo de Raça <br />
                            <span className="text-orange-600">Reconstrução + Antiqueda</span>
                        </h1>

                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-400 border-l border-slate-200 pl-3">
                                4.9 (2.322 avaliações reais)
                            </span>
                        </div>
                    </div>

                    {/* Bloco de Preço Limpo */}
                    <div className="py-8 border-y border-slate-100 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg font-medium">{config.priceCard}</span>
                            <span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Oferta Ativa</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-bold text-sm tracking-tight">{config.installmentText}</p>
                    </div>

                    {/* Prova Social Rápida */}
                    <div className="bg-[#FDF8F3] p-6 rounded-2xl border-l-4 border-orange-400">
                        <p className="text-slate-800 font-bold text-lg md:text-xl italic leading-snug">
                            "Todo Dia Era um Bolo de Cabelo no Pente... Hoje Não Cai Quase Nada."
                        </p>
                    </div>

                    {/* CTA e Urgência */}
                    <div className="space-y-6">
                        <Link href={config.checkoutUrl} target="_blank">
                            <Button className="w-full h-20 bg-green-600 hover:bg-green-700 text-white rounded-3xl font-black text-xl md:text-2xl uppercase tracking-widest shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-4">
                                <ShoppingBag size={24} /> {config.buttonText} <ArrowRight size={24} />
                            </Button>
                        </Link>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <Zap className="text-orange-500" size={18} fill="currentColor" />
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    Envio em <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                                <ShieldCheck className="text-emerald-500" size={18} />
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    Compra 100% Segura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};