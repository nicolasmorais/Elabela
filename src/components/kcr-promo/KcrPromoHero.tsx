"use client";

import React from 'react';
import { Star, Award, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KcrPromoHeroProps {
    activeImageIndex: number;
    productImages: string[];
    setActiveImageIndex: (index: number) => void;
    nextImage: () => void;
    prevImage: () => void;
}

export const KcrPromoHero = ({ 
    activeImageIndex, 
    productImages, 
    setActiveImageIndex, 
    nextImage, 
    prevImage 
}: KcrPromoHeroProps) => {
  return (
    <header className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter text-slate-950 max-w-5xl mx-auto">
                    "Todo Dia Era um Bolo de Cabelo no Pente... <br /> 
                    <span className="text-orange-600 italic relative inline-block mt-2">
                        Hoje Não Cai Quase Nada."
                    </span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 md:mt-20">
                {/* ESQUERDA: GALERIA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={productImages[activeImageIndex]} 
                          alt="Produto Principal" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                        />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hidden md:block transition-all"><ChevronLeft size={24} /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hidden md:block transition-all"><ChevronRight size={24} /></button>
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{activeImageIndex + 1} / {productImages.length}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-2">
                        {productImages.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-orange-50 scale-105 shadow-md" : "border-slate-100 opacity-60")}>
                                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative group p-8 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(249,115,22,0.15)] overflow-hidden">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Caso Real #12.847</span>
                        </div>
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-black text-slate-950 leading-tight">
                                O cabelo de Ana estava <span className="text-red-500 italic relative px-1">cedendo.<span className="absolute bottom-0 left-0 w-full h-1 bg-red-100 -z-10"></span></span>
                            </p>
                            <div className="flex items-start gap-4 py-6 border-y border-slate-50">
                                <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-200 shrink-0">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                                    Em <strong className="text-orange-900 font-black">7 dias</strong>, o Kit Cavalo de Raça reconstruiu a raiz e reduziu <strong className="text-emerald-600 font-black bg-emerald-50 px-2 rounded-lg border border-emerald-100">87% da queda</strong>.
                                </p>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-orange-600 rounded-full"></div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Ass: Ana Júlia, Brasília</span>
                                </div>
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                            <Sparkles size={200} className="text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};