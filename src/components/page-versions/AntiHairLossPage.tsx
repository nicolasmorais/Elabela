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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MobileStickyBar } from './MobileStickyBar';
import { NewsPortalsSection } from './NewsPortalsSection';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421091644-ChatGPT-Image-6-de-fev.-de-2026,-20_37_37.png"
];

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png",
    text: "Chegou super rápido! Já comecei meu tratamento antiqueda hoje. O cheiro é maravilhoso e na primeira lavada já senti o cabelo mais firme e cheiroso.",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png",
    text: "Entrega relâmpago aqui no RJ! Usei hoje pela primeira vez e o perfume é incrível. Notei que caiu bem menos fios no banho, já sinto a diferença na quebra.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558644450-3.png",
    text: "Recebi em tempo recorde! O kit é lindo e muito cheiroso. Fiz a primeira aplicação e o cabelo ficou super macio, parece que a quebra diminuiu logo de cara.",
    author: "Fernanda L., Belo Horizonte"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558648736-4.png",
    text: "Chegou voando! Começando o cronograma antiqueda agora. O perfume fixou no cabelo e já sinto os fios mais resistentes, caiu quase nada no pente hoje.",
    author: "Carla T., Curitiba"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png",
    text: "Impecável a entrega! O cheiro é viciante e o resultado no primeiro dia me surpreendeu. O cabelo ficou soltinho e senti que parou de quebrar tanto.",
    author: "Renata M., Salvador"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558657652-6.png",
    text: "Meu kit chegou antes do esperado! Já iniciei o tratamento. O cabelo está super cheiroso e sinto que a queda já deu uma segurada na primeira lavagem.",
    author: "Beatriz A., Porto Alegre"
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
      checkoutUrl: '#'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    fetch('https://ipapi.co/json/').then(res => res.json()).then(data => { if (data.city) setCity(data.city); }).catch(() => {});
    fetch('/api/page-settings/antiqueda').then(res => res.json()).then(data => {
            if (data) setConfig({
                priceCard: data.priceCard || '147,00',
                pricePix: data.pricePix || '147,00',
                installmentText: data.installmentText || '12x de 14,96',
                buttonText: data.buttonText || 'COMPRAR AGORA',
                checkoutUrl: data.checkoutUrl || '#'
            });
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
      <PageTracker contentId="antiqueda" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen pb-24 md:pb-0">
        <div className="bg-slate-900 py-3 px-4 text-center border-b border-orange-500/20 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-3">
            <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </div>
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.15em] text-white leading-tight">
                Mais de 4.000 mulheres de <span className="text-emerald-400 border-b border-emerald-400/30 pb-0.5 mx-0.5">{city ? city : 'sua região'}</span> já estancaram a queda com este kit
            </p>
          </div>
        </div>

        <header className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-6 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter text-slate-950 max-w-5xl mx-auto">
                  "Todo Dia Era um Bolo de Cabelo no Pente... <br /> 
                  <span className="text-orange-600 italic relative inline-block mt-2">Hoje Não Cai Quase Nada."</span>
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 md:mt-20">
                <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
                    <div className="relative group p-8 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(249,115,22,0.15)] overflow-hidden">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Caso Real #12.847</span>
                        </div>
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-black text-slate-950 leading-tight">O cabelo de Ana estava <span className="text-red-500 italic relative px-1">cedendo.</span></p>
                            <div className="flex items-start gap-4 py-6 border-y border-slate-50">
                                <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-200 shrink-0"><Zap size={24} fill="currentColor" /></div>
                                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">Em <strong className="text-orange-900 font-black">7 dias</strong>, o Kit Cavalo de Raça reconstruiu a raiz e reduziu <strong className="text-emerald-600 font-black bg-emerald-50 px-2 rounded-lg border border-emerald-100">87% da queda</strong>.</p>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3"><div className="h-1 w-8 bg-orange-600 rounded-full"></div><span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Ass: Ana Júlia, Brasília</span></div>
                                <div className="flex gap-1 text-orange-400">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 relative lg:-ml-16">
                    <div className="absolute inset-0 bg-orange-400/10 blur-[100px] rounded-full scale-110 pointer-events-none opacity-70"></div>
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" alt="Kit Cavalo de Raça" className="relative z-10 w-full h-auto" />
                </div>
            </div>
          </div>
        </header>

        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">Resultados Reais, Mulheres Reais</h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-md border border-orange-100"><img src={url} alt="Galeria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" /></div>
              ))}
            </div>
          </div>
        </section>

        <NewsPortalsSection />

        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora Por R$ 147.</span></h2>
                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {["💔 Chora vendo tanto cabelo caindo no ralo", "💔 Evita passar a mão no cabelo com medo", "💔 Já escondeu o couro cabeludo com truques", "💔 Não pode gastar R$ 500 em dermatologista"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" alt="Mulher Confiante" className="relative z-10 w-full h-auto rounded-[3rem] border-8 border-white" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">POR QUE ESTE KIT PARA A QUEDA EM <span className="text-orange-600">7 DIAS?</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Anchor, title: "CAMADA 1: ANCORA A RAIZ", prod: "Shampoo Reconstrutor", desc: "Remove resíduos químicos que DISSOLVEM a proteção da raiz." },
                        { icon: Layers, title: "CAMADA 2: RECONSTRÓI A FIBRA", prod: "Máscara Intensiva", desc: "Penetra na ESTRUTURA INTERNA do fio com queratina biomimética." },
                        { icon: ShieldCheck, title: "CAMADA 3: SELA E PROTEGE", prod: "Condicionador Fortificante", desc: "Fecha as cutículas e cria um FILME PROTETOR contra atrito." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm"><div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8"><step.icon className="h-8 w-8 text-orange-700" /></div><h4 className="text-xl font-black text-slate-950 uppercase mb-2">{step.title}</h4><p className="text-sm text-slate-500 font-medium">{step.desc}</p></div>
                    ))}
                </div>
            </div>
        </section>

        <section id="pricing" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-[#FDF8F3] rounded-[3.5rem] p-8 md:p-12 shadow-sm relative border-4 border-white overflow-hidden">
                    <div className="bg-orange-100/50 -mx-12 -mt-12 mb-12 py-4 px-6 text-center text-orange-900 font-black tracking-widest flex items-center justify-center gap-3 border-b border-orange-100"><Clock size={20} className="text-orange-600 animate-pulse" /> OFERTA ENCERRA EM: <span className="font-mono text-orange-700">{formatTime(timeLeft)}</span></div>
                    <div className="flex flex-col items-center text-center space-y-12">
                        <div className="py-10 px-8 rounded-[3rem] bg-white border-2 border-orange-200/50 shadow-sm"><div className="flex items-start text-slate-950 font-black tracking-tighter"><span className="text-3xl md:text-4xl mt-4 mr-1">R$</span><span className="text-8xl md:text-9xl leading-none">{config.pricePix.split(',')[0]}<span className="text-4xl md:text-5xl">,{config.pricePix.split(',')[1] || '00'}</span></span></div><p className="text-sm text-slate-500 font-bold uppercase mt-4">{config.installmentText}</p></div>
                        <Link href={config.checkoutUrl || '#'} className="w-full max-w-xl" target="_blank" rel="noopener noreferrer"><Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] text-2xl md:text-3xl font-black uppercase"><ShoppingBag size={28} className="mr-4" /> {config.buttonText}</Button></Link>
                    </div>
                </div>
            </div>
        </section>

        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center"><p className="text-xs text-slate-500">© 2024 Cavalo de Raça - Original Bio Instinto</p></div>
        </footer>

        <MobileStickyBar installmentText={config.installmentText} buttonText={config.buttonText} checkoutUrl={config.checkoutUrl} />
      </div>
    </>
  );
}