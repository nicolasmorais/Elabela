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

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png",
    text: "Chegou super rápido! O cheiro é maravilhoso.",
    author: "Marta S."
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png",
    text: "Uso hoje pela primeira vez e já amei a textura.",
    author: "Juliana P."
  }
];

export function AntiHairLossPage() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(877);

  const [config, setConfig] = useState({
      priceCard: '147,00',
      pricePix: '147,00',
      installmentText: '12x de 14,96',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S',
      backRedirectUrl: ''
  });

  useBackRedirect(config.backRedirectUrl);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => { if (data.city) setCity(data.city); }).catch(() => {});
    fetch('/api/page-settings/antiqueda').then(res => res.json()).then(data => { if (data) setConfig(prev => ({ ...prev, ...data })); });
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PageTracker contentId="antiqueda" />
      <div className="bg-white text-slate-900 min-h-screen font-sans">
        <header className="py-20 px-6 text-center space-y-6">
            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-xs font-black">OFERTA DO DIA</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight">Kit Antiqueda <span className="text-orange-600">Bio Instinto</span></h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Pare a queda de cabelo imediatamente com tecnologia de salão.</p>
        </header>

        <section className="max-w-4xl mx-auto px-6 py-12">
            <div className="bg-[#FDF8F3] border-4 border-white shadow-2xl rounded-[3rem] p-10 md:p-16 text-center space-y-10">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" className="mx-auto rounded-3xl" alt="Kit" />
                <div className="space-y-4">
                    <p className="text-5xl font-black">R$ {config.pricePix}</p>
                    <Link href={config.checkoutUrl} target="_blank">
                        <Button className="w-full h-20 bg-orange-600 hover:bg-orange-700 text-white text-2xl font-black rounded-3xl">
                            {config.buttonText}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs">
            <p>© 2024 Cavalo de Raça - Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}