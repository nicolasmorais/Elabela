"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Heart, 
  Sparkles, 
  Award,
  Truck,
  Verified,
  ShieldAlert,
  ShoppingBag,
  DollarSign,
  Home,
  Dumbbell,
  Microscope,
  Lock,
  CreditCard,
  CheckCircle2,
  Anchor,
  Layers,
  Settings2,
  Activity,
  FileCheck,
  ClipboardList,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useBackRedirect } from '@/hooks/use-back-redirect';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png",
    text: "Chegou super rápido! Já comecei meu tratamento antiqueda hoje.",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png",
    text: "Entrega relâmpago aqui no RJ! Usei hoje pela primeira vez e o perfume é incrível.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558644450-3.png",
    text: "Recebi em tempo recorde! O kit é lindo e muito cheiroso.",
    author: "Fernanda L., Belo Horizonte"
  }
];

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); 

  const [config, setPageConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: 'Ou 12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/checkout?skipToCheckout=1&tokenReference=RC8ASYUL88',
      backRedirectUrl: ''
  });

  useBackRedirect(config.backRedirectUrl);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => { if (data.city) setCity(data.city); }).catch(() => {});
    fetch('/api/page-settings/antiqueda2').then(res => res.json()).then(data => { if (data) setPageConfig(prev => ({ ...prev, ...data })); });
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        <header className="py-12 px-6 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
                Recupere seu Cabelo <br /> <span className="text-orange-700 italic">Em 7 Dias</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tecnologia profissional Bio Instinto para resultados reais em casa.</p>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-orange-100 text-center space-y-8">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" alt="Produto" className="mx-auto rounded-3xl" />
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                        <span className="text-4xl font-black text-slate-900">R$ {config.pricePix}</span>
                    </div>
                    <Link href={config.checkoutUrl} target="_blank">
                        <Button className="w-full h-20 bg-green-600 hover:bg-green-700 text-white text-2xl font-black rounded-full shadow-lg transition-transform hover:scale-105">
                            {config.buttonText}
                        </Button>
                    </Link>
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {GALLERY_IMAGES.map((img, i) => (
                    <div key={i} className="rounded-[2rem] overflow-hidden border border-slate-100">
                        <img src={img} alt="Resultado" className="w-full h-auto" />
                    </div>
                ))}
            </section>
        </main>

        <footer className="py-20 bg-slate-950 text-white text-center">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2024 Cavalo de Raça - Original Bio Instinto</p>
            </div>
        </footer>
      </div>
    </>
  );
}