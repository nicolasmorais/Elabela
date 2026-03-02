"use client";

import React, { useState, useEffect } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight, ShieldCheck, Lock, CreditCard, MoveHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { KitSelector, KitOption } from '../clareador/KitSelector';
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

  // Criamos os kits dinamicamente com base no valor da Dashboard para o kit principal
  const kits: KitOption[] = [
    {
      id: '1',
      units: 1,
      discount: 'PREÇO ESPECIAL',
      unitPrice: config.pricePix,
      price: config.pricePix,
      originalPrice: config.priceCard,
      checkoutUrl: config.checkoutUrl
    },
    {
      id: '2',
      units: 2,
      discount: 'MAIS VENDIDO',
      unitPrice: (parseFloat(config.pricePix.replace(',', '.')) * 0.8).toFixed(2).replace('.', ','),
      price: (parseFloat(config.pricePix.replace(',', '.')) * 1.6).toFixed(2).replace('.', ','),
      originalPrice: 'R$ 379,80',
      badges: ['Recomendado'],
      checkoutUrl: config.checkoutUrl
    }
  ];

  const [selectedKit, setSelectedKit] = useState<KitOption>(kits[0]);

  // Sincroniza o kit selecionado se a config mudar (carregamento da API)
  useEffect(() => {
    setSelectedKit(kits[0]);
  }, [config.pricePix]);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  return (
    <header className="relative pt-10 pb-20 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* GALERIA */}
                <div className="lg:col-span-5 space-y-6">
                    <div 
                        className="relative aspect-square bg-[#FDFDFD] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl group cursor-pointer"
                        onClick={nextImage}
                    >
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white shadow-lg text-slate-800 text-[10px] font-black uppercase tracking-widest animate-pulse pointer-events-none">
                            <MoveHorizontal size={14} className="text-orange-600" />
                            Arraste para o lado
                        </div>
                        <div className="absolute top-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>
                </div>

                {/* INFOS DE COMPRA */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white"><Award size={14} /></div> Eleito o melhor Kit do Brasil
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950">Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva</h1>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50.800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">OFERTA ATIVA</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                          <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                          <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">{config.installmentText}</p>
                    </div>

                    {/* Seletor de Kits opcional - agora usando valores da config */}
                    <div className="pt-4">
                        <KitSelector 
                            options={kits} 
                            selectedId={selectedKit.id} 
                            onSelect={setSelectedKit} 
                        />
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link href={config.checkoutUrl} target="_blank" className="block group/btn">
                            <Button 
                                className="w-full h-24 bg-[#35c867] hover:bg-[#2eb35a] text-white rounded-[2rem] shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center border-b-[6px] border-[#258d48]"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingBag size={28} /> 
                                    <span className="text-2xl md:text-3xl font-black uppercase">{config.buttonText}</span>
                                    <ArrowRight size={28} />
                                </div>
                                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em] mt-1">
                                    Site 100% Seguro | Envio Imediato
                                </span>
                            </Button>
                        </Link>
                        
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2 rounded-lg"><Zap size={20} fill="currentColor" /></div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL</p>
                                    <p className="text-[10px] font-bold text-slate-500">Envio em até 24h. Oferta expira em <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <ShieldCheck className="text-emerald-500" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};