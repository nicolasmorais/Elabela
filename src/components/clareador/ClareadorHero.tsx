"use client";

import React, { useState } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

interface ClareadorHeroProps {
  config: any;
  formatTime: (seconds: number) => string;
  timeLeft: number;
  scrollToPricing: () => void;
}

export const ClareadorHero = ({ config, formatTime, timeLeft, scrollToPricing }: ClareadorHeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <header className="relative pt-10 pb-20 px-6 bg-[#FDF8F3] overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Lado Esquerdo: Galeria */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-brand-blue/10 rounded-[4rem] blur-[100px] opacity-30"></div>
                    <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl border-8 border-white">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto Amazolé" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">{activeImageIndex + 1} / {PRODUCT_IMAGES.length}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-brand-pink scale-105" : "border-white opacity-60")}>
                                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lado Direito: Informações */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-blue/20 rounded-xl shadow-sm text-[11px] font-bold text-brand-blue-dark">
                            <div className="bg-brand-pink p-1 rounded-md text-white"><Award size={14} /></div>
                            Eleito o melhor Clareador Natural do Brasil
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-brand-blue-dark uppercase leading-[0.9]">
                            Amazolé - Clareador de <span className="text-brand-pink">Manchas 100% Natural</span>
                        </h1>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span>4.9 | 1.847 avaliações 5 estrelas</span>
                            </div>
                            <p className="text-emerald-600 font-black text-sm uppercase tracking-tighter">
                                Mais de 32.400 mulheres usando no mês passado
                            </p>
                        </div>
                    </div>

                    {/* Novo Depoimento */}
                    <div className="bg-white p-6 rounded-[2rem] border-l-4 border-brand-pink shadow-sm space-y-2">
                        <p className="text-brand-blue-dark font-black text-xl italic leading-tight">
                            "Escondi Minhas Axilas Por 3 Anos... <br />
                            Hoje Uso Regata Sem Vergonha."
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Carolina M., São Paulo
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Button 
                            onClick={scrollToPricing} 
                            className="w-full h-20 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02]"
                        >
                            Comprar agora
                        </Button>

                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
                            <div className="bg-emerald-500 text-white p-2 rounded-lg">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — Envio imediato em até 24h</p>
                                <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-brand-pink font-black">{formatTime(timeLeft)}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};