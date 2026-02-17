"use client";

import React, { useState } from 'react';
import { Star, Zap, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { KitSelector, KitOption } from './KitSelector';
import Link from 'next/link';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771320326399-ChatGPT-Image-17-de-fev.-de-2026,-06_22_14.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771277496026-ChatGPT-Image-16-de-fev.-de-2026,-18_13_08.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/br-11134207-81zun-mkquiu4iawar51.webp"
];

const KITS: KitOption[] = [
  {
    id: '1',
    units: 1,
    discount: '21% OFF',
    unitPrice: '137,00',
    price: '137,00',
    originalPrice: 'R$ 189,90',
    checkoutUrl: 'https://seguro.elabela.store/r/96NCB3C2ZG'
  },
  {
    id: '2',
    units: 2,
    discount: '55% OFF',
    unitPrice: '83,50',
    price: '167,00',
    originalPrice: 'R$ 379,80',
    badges: ['Mais Vendidos'],
    checkoutUrl: 'https://seguro.elabela.store/r/5BP7EWDX91'
  },
  {
    id: '3',
    units: 3,
    discount: '50% OFF',
    unitPrice: '99,00',
    price: '297,00',
    originalPrice: 'R$ 569,70',
    badges: ['Melhores Resultados'],
    checkoutUrl: 'https://seguro.elabela.store/r/RBVA7EGOU3'
  }
];

interface ClareadorHeroProps {
  config: any;
  formatTime: (seconds: number) => string;
  timeLeft: number;
  scrollToPricing: () => void;
}

export const ClareadorHero = ({ config, formatTime, timeLeft }: ClareadorHeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState<KitOption>(KITS[1]);

  return (
    <header className="relative pt-10 pb-20 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="relative aspect-square rounded-[3rem] bg-[#FDFDFD] overflow-hidden border border-slate-100 shadow-sm">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto Amazolé" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">{activeImageIndex + 1} / {PRODUCT_IMAGES.length}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-brand-pink scale-105" : "border-slate-50 opacity-60")}>
                                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-xl shadow-sm text-[10px] font-bold text-slate-600">
                            <Heart size={14} className="text-pink-500 fill-current" />
                            Eleito o melhor Clareador Natural do Brasil
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950">
                            Amazolé - Clareador de Manchas 100% Natural
                        </h1>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span>4.9 | 1.847 avaliações 5 estrelas</span>
                            </div>
                            <p className="text-emerald-600 font-bold text-sm">
                                Mais de 32.400 mulheres usando no mês passado
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg font-medium">R$ 189,90</span>
                            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-lg text-xs font-black">PROMOÇÃO</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {selectedKit.price}</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            Em até 12x de R$ {(parseFloat(selectedKit.price.replace(',','.')) / 12).toFixed(2).replace('.', ',')}
                        </p>
                    </div>

                    {/* Kit Selector Integrado */}
                    <div className="pt-4">
                        <KitSelector 
                            options={KITS} 
                            selectedId={selectedKit.id} 
                            onSelect={setSelectedKit} 
                        />
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link href={selectedKit.checkoutUrl} target="_blank">
                            <Button className="w-full h-16 bg-slate-950 hover:bg-slate-900 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all hover:scale-[1.01]">
                                Comprar agora
                            </Button>
                        </Link>

                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2 rounded-lg">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — <span className="text-slate-500 font-bold">Envio imediato em até 24h</span></p>
                                    <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <div className="p-2 rounded-full border border-emerald-200">
                                <ShieldCheck size={20} className="text-emerald-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};