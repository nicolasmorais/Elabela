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
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896113265-ChatGPT-Image-31-de-jan.-de-2026,-18_44_47.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896125840-Gemini_Generated_Image_kw7t7bkw7t7bkw7t-(1).png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896189867-ChatGPT-Image-31-de-jan.-de-2026,-18_49_38.png"
];

const TIKTOK_VIDEOS = [
  "https://vhost.onebasex.pro/video/1769896865284-ssstik.io_%40renatadelpasso_1769896654074.mp4",
  "https://vhost.onebasex.pro/video/1769897057244-ssstik.io_%40donademim_pvh_1769896463897.mp4",
  "https://vhost.onebasex.pro/video/1769897045880-ssstik.io_%40studioestefaniribeiro_1769896850804.mp4"
];

export function AntiHairLossPage() {
  const [config, setConfig] = useState({
      priceCard: 'R$ 157,00',
      pricePix: '97,00',
      installmentText: 'Parcelamento em até 12x',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: '#'
  });

  useEffect(() => {
    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig({
                    priceCard: data.priceCard || 'R$ 157,00',
                    pricePix: data.pricePix || '97,00',
                    installmentText: data.installmentText || 'Parcelamento em até 12x',
                    buttonText: data.buttonText || 'COMPRAR AGORA',
                    checkoutUrl: data.checkoutUrl || '#'
                });
            }
        })
        .catch(e => console.error("Erro ao carregar configurações."));
  }, []);

  return (
    <>
      <PageTracker contentId="antiqueda" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        <div className="bg-slate-950 py-2 px-4 text-center border-b border-orange-900/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                Promoção Exclusiva Direto da Indústria
            </p>
          </div>
        </div>

        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/30 shadow-2xl">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-950 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-800 italic underline decoration-orange-500/30 underline-offset-8">Sem Medo, Sem Vergonha, Sem Desculpas</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-12 font-medium max-w-2xl leading-relaxed">
              Recupere em 7 dias a força, o brilho e a autoestima que você perdeu - com a mesma tecnologia profissional que salões cobram R$ 500 por sessão.
            </p>
            <div className="relative group max-w-3xl w-full">
              <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" alt="Produto" className="rounded-[3rem] relative z-10 mx-auto" />
            </div>
          </div>
        </header>

        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">O kit mais Amado do Brasil</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-md border border-orange-100">
                   <img src={url} alt="Galeria" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-white rounded-[4rem] p-6 md:p-12 shadow-[0_64px_128px_-24px_rgba(249,115,22,0.4)] relative border-[8px] border-white text-center space-y-10">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">Kit Completo 4 Passos</h3>
                    <div className="bg-emerald-50 p-8 md:p-12 rounded-[3rem] w-full">
                        <p className="text-slate-400 line-through font-bold text-lg mb-2">{config.priceCard}</p>
                        <div className="flex items-start justify-center text-slate-950 font-black tracking-tighter">
                            <span className="text-3xl md:text-4xl mt-4 mr-2">R$</span>
                            <span className="text-8xl md:text-[10rem] leading-none">
                                {config.pricePix.split(',')[0]}<span className="text-5xl md:text-6xl">,{config.pricePix.split(',')[1] || '00'}</span>
                            </span>
                        </div>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-4">{config.installmentText}</p>
                    </div>
                    <Link href={config.checkoutUrl || '#'} className="w-full max-w-xl mx-auto block" target="_blank">
                        <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] text-xl md:text-3xl font-black uppercase">
                            <ShoppingBag className="mr-4" /> {config.buttonText}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        <footer className="py-20 bg-[#FDF8F3] text-center border-t border-slate-200">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">© 2024 Cavalo de Raça - Original Bio Instinto</p>
        </footer>
      </div>
    </>
  );
}