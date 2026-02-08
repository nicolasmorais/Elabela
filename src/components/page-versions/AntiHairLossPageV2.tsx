"use client";

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  Award,
  Clock,
  ShieldCheck,
  Lock,
  CreditCard,
  ChevronDown,
  Heart,
  Sparkles,
  Droplets,
  ZapIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

const KITS = [
    { 
        id: '1-unidade', 
        name: '1 kit', 
        discount: '21% OFF', 
        originalPrice: 'R$ 187,00', 
        price: '147,00', 
        unitPrice: 'R$ 147,00 por kit',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=1'
    },
    { 
        id: '3-unidades', 
        name: '3 kits', 
        discount: '40% OFF', 
        originalPrice: 'R$ 497,00', 
        price: '297,00', 
        unitPrice: 'R$ 99,00 por kit',
        badge: 'Mais Vendido',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=3'
    },
    { 
        id: '6-unidades', 
        name: '6 kits', 
        discount: '55% OFF', 
        originalPrice: 'R$ 994,00', 
        price: '447,00', 
        unitPrice: 'R$ 74,50 por kit',
        badge: 'Melhor Preço',
        badgeColor: 'bg-emerald-500',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=6'
    }
];

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); // ~10h 33min
  const [activeImage, setActiveImage] = useState(GALLERY_IMAGES[0]);
  const [selectedKitId, setSelectedKitId] = useState('3-unidades');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  const selectedKit = KITS.find(k => k.id === selectedKitId) || KITS[1];

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* NAVIGATION E-COMMERCE */}
        <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img 
                    src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                    alt="Logo" className="h-8"
                />
                <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="text-orange-600">Kit Antiqueda</span>
                    <span>Colágeno</span>
                    <span>Vitaminas</span>
                    <span>Cabelo & Unha</span>
                </div>
                <div className="flex items-center gap-4">
                    <ShoppingBag size={20} className="text-slate-400" />
                </div>
            </div>
        </nav>

        {/* HERO / PRODUCT SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA (50%) */}
                <div className="lg:col-span-6 space-y-4">
                    <div className="aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 relative group">
                        <img src={activeImage} alt="Produto Principal" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImage(img)}
                                className={cn(
                                    "aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300",
                                    activeImage === img ? "border-orange-500 shadow-lg scale-105" : "border-slate-100 opacity-60 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA (50%) */}
                <div className="lg:col-span-6 space-y-6">
                    
                    {/* Badge de Destaque */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Kit Antiqueda do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 2322 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">R$ 497,00</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">40% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {selectedKit.price}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            Em até 12x de R$ 14,96 sem juros
                        </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                        O passo mais poderoso da sua rotina capilar. Com tecnologia Bio Instinto, o kit Cavalo de Raça nutre o folículo piloso, estanca a queda e acelera o crescimento. Resultado em 7 dias: fios mais fortes, brilho intenso e regeneração real.
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {[
                            { icon: Zap, label: "Antiqueda Real" },
                            { icon: Droplets, label: "Raiz Fortalecida" },
                            { icon: Heart, label: "Brilho Intenso" },
                            { icon: Sparkles, label: "Crescimento Acelerado" },
                            { icon: Clock, label: "Resultados em 7 dias" }
                        ].map((tag, i) => (
                            <div key={i} className="flex items-center gap-1.5 px-3 py-2 border border-pink-200 rounded-xl text-pink-600 text-[10px] font-black uppercase tracking-tight">
                                <tag.icon size={12} />
                                {tag.label}
                            </div>
                        ))}
                    </div>

                    {/* BOTÃO COMPRAR AGORA */}
                    <div className="space-y-4 pt-4">
                        <Link href={selectedKit.checkoutUrl} target="_blank">
                            <Button className="w-full h-20 bg-slate-950 hover:bg-slate-900 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99]">
                                Comprar agora
                            </Button>
                        </Link>
                        
                        {/* ENTREGA FULL BANNER */}
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
                    </div>

                </div>
            </div>
        </main>
      </div>
    </>
  );
}