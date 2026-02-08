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
  CreditCard
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

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(748); 
  const [activeImage, setActiveImage] = useState(GALLERY_IMAGES[0]);

  const [config, setConfig] = useState({
      priceCard: '147,00',
      pricePix: '147,00',
      installmentText: '12x de 14,96',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: '#'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig({
                    priceCard: data.priceCard || '147,00',
                    pricePix: data.pricePix || '147,00',
                    installmentText: data.installmentText || '12x de 14,96',
                    buttonText: data.buttonText || 'COMPRAR AGORA',
                    checkoutUrl: data.checkoutUrl || '#'
                });
            }
        });

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* TOP BAR CIDADE */}
        <div className="bg-slate-900 py-2.5 px-4 text-center border-b border-slate-800">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
                Mais de 4.000 mulheres de <span className="text-orange-400">{city ? city : 'sua região'}</span> já estancaram a queda com este kit
            </p>
        </div>

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
                <div className="space-y-4">
                    <div className="aspect-square bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 relative group">
                        <img src={activeImage} alt="Produto Principal" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-6 left-6">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-100">
                                <Award className="text-orange-600 h-6 w-6" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImage(img)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300",
                                    activeImage === img ? "border-orange-500 shadow-lg scale-105" : "border-slate-100 opacity-60 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA */}
                <div className="space-y-8 lg:pl-4">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em]">Caso Real #12.847</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-slate-950">
                                "Todo Dia Era um Bolo de Cabelo no Pente... <br /> 
                                <span className="text-orange-600 italic">Hoje Não Cai Quase Nada."</span>
                            </h1>
                        </div>

                        <div className="p-6 bg-orange-50/50 rounded-3xl border border-orange-100 space-y-4">
                            <p className="text-lg font-bold text-slate-700 leading-relaxed italic">
                                "O cabelo de Ana estava cedendo. Em 7 dias, o Kit Cavalo de Raça reconstruiu a raiz e reduziu 87% da queda."
                            </p>
                            <p className="text-xs font-black uppercase text-slate-400 tracking-widest">— Ass: Ana Júlia, Brasília</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-xs font-bold text-slate-400 underline uppercase tracking-widest cursor-pointer">2.322 avaliações de clientes</span>
                        </div>
                    </div>

                    {/* BLOCO DE PREÇO & CTA */}
                    <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-slate-50">
                            <ShoppingBag size={120} />
                        </div>
                        
                        <div className="space-y-2 relative z-10">
                            <p className="text-slate-400 line-through font-bold text-lg">R$ 297,00</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none">R$ {config.pricePix}</span>
                                <span className="text-emerald-600 font-black text-sm uppercase tracking-widest">à vista</span>
                            </div>
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest pt-2">
                                Ou {config.installmentText} sem juros
                            </p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <Link href={config.checkoutUrl} target="_blank" className="block">
                                <Button className="w-full h-20 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-2xl uppercase tracking-tighter shadow-[0_20px_40px_rgba(22,163,74,0.3)] transition-all hover:scale-[1.02] active:scale-95">
                                    {config.buttonText}
                                </Button>
                            </Link>
                            <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
                                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest"><ShieldCheck size={16} /> ORIGINAL</div>
                                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest"><Lock size={16} /> SEGURO</div>
                                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest"><CreditCard size={16} /> CARTÃO/PIX</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-6 border-t border-slate-100 relative z-10">
                            <div className="p-2 bg-orange-100 text-orange-700 rounded-lg animate-pulse"><Clock size={18} /></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-950">Oferta encerra em breve</p>
                                <p className="text-[10px] text-slate-500 font-bold tracking-widest">Restam poucos kits com <span className="text-orange-600">Frete Grátis</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </>
  );
}