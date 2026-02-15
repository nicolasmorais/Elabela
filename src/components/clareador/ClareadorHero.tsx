"use client";

import React, { useState } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
                <div className="relative group">
                    <div className="absolute inset-0 bg-brand-blue/10 rounded-[4rem] blur-[100px] opacity-30"></div>
                    <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl border-8 border-white">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">{activeImageIndex + 1} / {PRODUCT_IMAGES.length}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-brand-pink scale-105" : "border-white opacity-60")}>
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-blue/20 rounded-xl shadow-sm text-[11px] font-bold text-brand-blue-dark">
                        <div className="bg-brand-pink p-1 rounded-md text-white"><Award size={14} /></div>
                        Eleito o melhor Clareador Natural do Brasil
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-brand-blue-dark uppercase leading-[0.9]">
                        Amazolé - Clareador de <span className="text-brand-pink">Manchas 100% Natural</span>
                    </h1>
                    <div className="space-y-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-300 line-through text-lg font-bold">R$ 189,99</span>
                            <span className="bg-brand-pink text-white px-2 py-0.5 rounded-full text-[10px] font-black">28% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-brand-blue-dark">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-black text-xl uppercase tracking-tighter">no pix</span>
                        </div>
                        <p className="text-slate-500 font-bold text-sm">ou 12x de R$ 13,90</p>
                    </div>
                    <Button onClick={scrollToPricing} className="w-full h-20 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-xl">Comprar agora</Button>
                    <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4">
                        <Zap className="text-emerald-500" size={20} fill="currentColor" />
                        <div>
                            <p className="text-[10px] font-black text-slate-900 uppercase">ENTREGA FULL — Envio imediato</p>
                            <p className="text-[10px] text-slate-500 font-bold">Encerra em <span className="text-brand-pink font-black">{formatTime(timeLeft)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};