"use client";

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Award, 
  ShoppingBag, 
  Lock, 
  CreditCard, 
  Anchor, 
  Layers, 
  Microscope, 
  Verified, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Flame,
  Layout,
  Info,
  Droplets,
  Sparkles,
  Heart,
  Ban,
  AlertTriangle,
  Activity,
  UserCheck,
  CheckCircle2,
  Leaf,
  Thermometer,
  Waves,
  Sun,
  Moon,
  Lightbulb,
  Beaker,
  Settings2,
  MapPin,
  CalendarRange,
  Target
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MobileStickyBar } from './MobileStickyBar';
import { KitSelector, KitOption } from '@/components/clareador/KitSelector';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

const AMAZOLÉ_KITS: KitOption[] = [
  {
    id: '1-un',
    units: 1,
    discount: '28% OFF',
    price: '127,00',
    originalPrice: 'R$ 189,99',
    unitPrice: '127,00',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '2-un',
    units: 2,
    discount: '50% OFF',
    price: '187,00',
    originalPrice: 'R$ 379,98',
    unitPrice: '93,50',
    badges: ['Mais Vendido'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '3-un',
    units: 3,
    discount: '60% OFF',
    price: '237,00',
    originalPrice: 'R$ 569,97',
    unitPrice: '79,00',
    badges: ['Melhor Result'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  }
];

export function ClareadorPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState<KitOption>(AMAZOLÉ_KITS[1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m} min ${s}s`;
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  };

  return (
    <>
      <PageTracker contentId="novoclareador" />
      <div className="bg-white text-brand-text font-sans selection:bg-brand-blue/20 antialiased min-h-screen">
        
        {/* NAV */}
        <nav className="bg-brand-blue py-4 px-6 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-white uppercase">AMAZOLÉ</span>
            </div>
        </nav>

        {/* HERO SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={PRODUCT_IMAGES[activeImageIndex]} 
                          alt="Amazolé" 
                          className="w-full h-full object-cover transition-all duration-700" 
                        />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block text-brand-blue-dark hover:text-brand-pink transition-colors"><ChevronLeft /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block text-brand-blue-dark hover:text-brand-pink transition-colors"><ChevronRight /></button>
                        <div className="absolute bottom-6 right-6 bg-brand-blue-dark/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImageIndex(i)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                                    activeImageIndex === i ? "border-brand-blue scale-105" : "border-slate-100 opacity-60"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: COMPRA */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-xl shadow-sm text-[11px] font-bold text-brand-blue-dark">
                        <div className="bg-brand-pink p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Clareador Natural do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-brand-blue-dark uppercase leading-none">
                            Amazolé - Clareador de Manchas <span className="text-brand-pink">100% Natural</span>
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-brand-pink">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="font-bold text-brand-text">4.9 | 1.847 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-black text-sm uppercase tracking-widest">
                            32.400+ kits entregues esse mês
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg font-bold">{selectedKit.originalPrice}</span>
                            <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{selectedKit.discount}</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-brand-blue-dark">R$ {selectedKit.price}</span>
                            <span className="text-emerald-600 font-black text-xl uppercase tracking-tighter">no pix</span>
                        </div>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest opacity-60">
                            ou em até 12x no cartão
                        </p>
                    </div>

                    <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-5 rounded-r-2xl space-y-2 shadow-sm">
                        <p className="text-brand-blue-dark font-black text-xl italic leading-tight">
                            "Escondi Minhas Axilas Por 3 Anos... <br />
                            Hoje Uso Regata Sem Vergonha."
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Carolina M., São Paulo
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        <KitSelector 
                            options={AMAZOLÉ_KITS}
                            selectedId={selectedKit.id}
                            onSelect={setSelectedKit}
                        />

                        <Link href={selectedKit.checkoutUrl} target="_blank">
                            <Button 
                                className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-[0_20px_50px_rgba(229,71,143,0.3)] transition-all hover:scale-[1.03] active:scale-[0.99] flex items-center justify-center gap-4 group bg-brand-pink hover:bg-brand-pink-dark animate-pulse"
                            >
                                <ShoppingBag size={28} />
                                Comprar agora
                                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        
                        <div className="bg-brand-gray-light border border-slate-200 rounded-2xl p-5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-blue-dark text-white p-2 rounded-lg">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-brand-blue-dark uppercase tracking-widest">ENTREGA ACELERADA — <span className="text-brand-pink">Envio imediato</span></p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Garantido se comprar em <span className="text-brand-text font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div className="border-t border-slate-100 bg-white">
            
            {/* MIDIA */}
            <section className="py-12 bg-brand-gray-light border-b border-slate-50 opacity-30 grayscale flex justify-center gap-16 items-center">
                <span className="text-2xl font-black text-brand-blue-dark">G1</span><span className="text-2xl font-black italic text-brand-blue-dark">R7</span><span className="text-2xl font-black text-brand-blue-dark">GLOBO</span><span className="text-2xl font-black underline text-brand-blue-dark">SBT</span>
            </section>

            {/* SEÇÃO: PAIXÃO NACIONAL */}
            <section className="py-24 px-6 bg-white border-b border-emerald-100">
              <div className="max-w-6xl mx-auto space-y-16 text-center">
                <div className="space-y-4">
                  <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase leading-none">
                    Resultados Reais, <span className="text-brand-pink italic">Mulheres Reais</span>
                  </h2>
                  <div className="h-1.5 w-32 bg-brand-blue mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {GALLERY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-brand-blue/20 shadow-sm hover:shadow-xl transition-all duration-500">
                       <img 
                          src={url} 
                          alt={`Resultado ${i + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <p className="text-brand-text font-black uppercase tracking-widest text-sm opacity-50">
                    Sua transformação começa com Amazolé.
                  </p>
                </div>
              </div>
            </section>

            {/* SEÇÃO: SOLUÇÃO QUE FUNCIONA */}
            <section className="py-24 px-6 bg-brand-gray-light relative overflow-hidden border-b border-brand-blue/10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8 order-2 lg:order-1">
                            <span className="inline-block text-brand-blue-dark font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                            <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter leading-tight uppercase">
                                Clareie Manchas Difíceis Sem Ácidos Agressivos. <br />
                                <span className="text-brand-pink italic italic">100% Natural da Amazônia.</span>
                            </h2>

                            <div className="pt-8 space-y-6">
                                <h4 className="text-2xl font-black text-brand-blue-dark border-b-2 border-brand-pink/30 inline-block pb-1 uppercase tracking-tight">VOCÊ NÃO PRECISA MAIS:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "💔 Esconder axilas escuras e evitar usar regata",
                                        "💔 Sentir vergonha da virilha manchada no biquíni",
                                        "💔 Usar base pesada todo dia para esconder o Melasma",
                                        "💔 Sofrer com cremes que ardem e descascam a pele",
                                        "💔 Ter insegurança na hora da intimidade"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg font-bold text-brand-text">
                                            <div className="bg-brand-pink/10 p-1 rounded-full text-brand-pink shrink-0 mt-1"><Ban size={16} strokeWidth={3} /></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="space-y-4 text-2xl font-black text-brand-blue-dark tracking-tight leading-tight pt-4">
                                    <p>Recupere sua liberdade de vestir o que quiser.</p>
                                    <p className="text-brand-pink underline decoration-brand-blue decoration-4 underline-offset-8 uppercase italic">
                                        Clareamento real, suave e seguro.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-1 relative w-full order-1 lg:order-2">
                            <div className="absolute inset-0 bg-brand-blue rounded-full blur-[100px] opacity-10"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Pele perfeita e iluminada" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO: POR QUE AMAZOLÉ CLAREIA? (DESIGN MELHORADO) */}
            <section className="py-24 px-6 bg-brand-beige/20 border-b border-brand-beige">
              <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <span className="text-brand-pink font-black text-xs uppercase tracking-[0.5em] block mb-2 px-4 py-1.5 rounded-full bg-white border border-brand-beige w-fit mx-auto">Poder da Natureza</span>
                  <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter leading-[0.9]">
                    POR QUE <span className="text-brand-pink italic">AMAZOLÉ</span> CLAREIA EM SEMANAS?
                  </h2>
                  <p className="text-brand-text font-bold text-sm uppercase tracking-[0.2em] opacity-60">FÓRMULA PATENTEADA DA AMAZÔNIA</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  
                  {/* ETAPA 1 - O HERÓI */}
                  <div className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-14 border border-brand-beige shadow-[0_30px_60px_-15px_rgba(217,200,169,0.3)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-brand-blue pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <Leaf size={250} />
                    </div>
                    
                    <div className="relative z-10 space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-brand-blue-dark text-white flex items-center justify-center font-black text-xl shadow-lg">01</div>
                            <h3 className="text-2xl md:text-3xl font-black text-brand-blue-dark uppercase tracking-tight">ETAPA 1: BLOQUEIO NA RAIZ</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-blue/10 rounded-xl text-brand-blue-dark font-black text-sm uppercase tracking-widest border border-brand-blue/20">
                                <Beaker size={18} /> ATIVO: MULATEIRO DA AMAZÔNIA
                            </div>
                            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                                Considerado o <span className="text-brand-pink font-black italic">"Botox da Selva"</span>, o Mulateiro inibe a enzima tirosinase — a principal responsável pela produção do pigmento escuro na pele.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Reduz Melasma",
                                    "Inibe nova coloração",
                                    "Antioxidante Natural",
                                    "Reparação Celular"
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-brand-blue-dark">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        {bullet}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-blue-dark text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group/box">
                            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover/box:scale-110 transition-transform"><Sparkles size={100} /></div>
                            <p className="text-lg font-bold leading-relaxed italic relative z-10">
                                "É como desligar a TORNEIRA que jorra tinta preta na sua pele. Amazolé fecha a fonte das manchas enquanto você dorme."
                            </p>
                        </div>
                    </div>
                  </div>

                  {/* ETAPAS 2 & 3 - SUPORTE */}
                  <div className="lg:col-span-5 flex flex-col gap-8">
                    
                    {/* ETAPA 2 */}
                    <div className="flex-1 bg-white rounded-[3rem] p-10 border border-brand-beige shadow-lg space-y-6 hover:border-brand-pink/30 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-brand-pink text-white flex items-center justify-center font-black">02</div>
                            <h4 className="text-lg font-black text-brand-blue-dark uppercase tracking-widest">ACALMA E REPARA</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-500 font-medium leading-relaxed">
                                <strong className="text-brand-pink">Óleo de Melaleuca:</strong> Apaga o "incêndio" da depilação e suor, impedindo que a pele escureça por irritação constante.
                            </p>
                            <div className="p-4 bg-brand-pink/5 rounded-2xl border border-brand-pink/10 flex items-center gap-3">
                                <Thermometer className="text-brand-pink" size={20} />
                                <span className="text-xs font-black uppercase text-brand-pink">Efeito Anti-Inflamatório</span>
                            </div>
                        </div>
                    </div>

                    {/* ETAPA 3 */}
                    <div className="flex-1 bg-white rounded-[3rem] p-10 border border-brand-beige shadow-lg space-y-6 hover:border-brand-blue/30 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black">03</div>
                            <h4 className="text-lg font-black text-brand-blue-dark uppercase tracking-widest">RENOVAÇÃO CELULAR</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-slate-500 font-medium leading-relaxed">
                                <strong className="text-brand-blue">Argila Branca:</strong> Esfolia suavemente a camada "crosta" escura, revelando uma pele nova, macia e iluminada.
                            </p>
                            <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 flex items-center gap-3">
                                <Waves className="text-brand-blue" size={20} />
                                <span className="text-xs font-black uppercase text-brand-blue">Peeling Natural Suave</span>
                            </div>
                        </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* SEÇÃO: COMO USAR O AMAZOLÉ */}
            <section className="py-32 px-6 bg-brand-gray-light relative overflow-hidden border-b border-brand-blue/10">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-4 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-dark text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                            <Info size={14} /> Passo a Passo Ilustrado
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase leading-[0.9]">
                            COMO USAR O <span className="text-brand-pink italic">AMAZOLÉ</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                            Tão Fácil Quanto Passar Creme Hidratante
                        </p>
                        <p className="text-sm font-bold text-brand-pink italic">(Nem precisa enxaguar!)</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* ROTINA DIÁRIA (PASSO A PASSO) */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-slate-100 space-y-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-brand-blue pointer-events-none"><Sparkles size={200} /></div>
                                
                                <div className="flex items-center gap-4 border-b border-brand-gray-light pb-6">
                                    <div className="p-3 bg-brand-pink text-white rounded-2xl shadow-lg">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-brand-blue-dark uppercase tracking-tight leading-none mb-1">ROTINA DIÁRIA</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">(2X AO DIA)</p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {[
                                        { 
                                            n: "1️⃣", 
                                            t: "LIMPE A ÁREA", 
                                            bullets: ["Lave com sabonete neutro", "Seque bem (MUITO importante!)"], 
                                            time: "1 minuto",
                                            icon: Droplets
                                        },
                                        { 
                                            n: "2️⃣", 
                                            t: "APLIQUE O AMAZOLÉ", 
                                            bullets: ["Pegue quantidade de 1 grão de ervilha", "Espalhe na mancha em movimentos circulares", "Massageie até absorver completamente", "NÃO enxágue (deixa agir)"], 
                                            time: "2 minutos",
                                            icon: Sparkles
                                        },
                                        { 
                                            n: "3️⃣", 
                                            t: "AGUARDE SECAR", 
                                            bullets: ["Espere 3-5 minutos antes de vestir", "Pode aplicar desodorante/maquiagem depois"], 
                                            time: "3 minutos",
                                            icon: Clock
                                        }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="h-12 w-12 shrink-0 bg-brand-gray-light rounded-2xl flex items-center justify-center font-black text-brand-blue text-xl border border-slate-100 group-hover:scale-110 group-hover:border-brand-blue transition-all duration-300 shadow-sm">{step.n.substring(0, 1)}</div>
                                            <div className="space-y-3 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-black text-brand-blue-dark text-lg uppercase tracking-tight">{step.t}</h4>
                                                    <span className="flex items-center gap-1.5 text-[10px] font-black text-brand-pink uppercase tracking-widest bg-brand-pink/5 px-2.5 py-1 rounded-full border border-brand-pink/10">
                                                        <Clock size={10} /> {step.time}
                                                    </span>
                                                </div>
                                                <ul className="space-y-2">
                                                    {step.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-slate-500 font-medium text-sm leading-snug">
                                                            <div className="mt-1 text-brand-blue"><ArrowRight size={14} strokeWidth={3} /></div>
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-brand-gray-light text-center">
                                    <div className="bg-brand-blue-dark text-white p-6 rounded-[2.5rem] relative overflow-hidden group">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-1">CUIDADO RÁPIDO:</p>
                                        <p className="text-4xl font-black tracking-tighter">6 MINUTOS <span className="text-brand-pink italic text-2xl">2x ao dia</span></p>
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform"><Clock size={80} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QUANDO APLICAR + DICAS */}
                        <div className="lg:col-span-5 space-y-8">
                            
                            {/* QUANDO APLICAR */}
                            <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-lg space-y-8">
                                <h3 className="text-xl font-black text-brand-blue-dark uppercase tracking-tight border-b border-brand-gray-light pb-4">⏰ QUANDO APLICAR:</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-start gap-4 p-5 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 group hover:bg-brand-blue/10 transition-colors">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-brand-blue group-hover:scale-110 transition-transform"><Sun size={24} /></div>
                                        <div>
                                            <p className="font-black text-brand-blue-dark uppercase text-sm mb-1">MANHÃ:</p>
                                            <p className="text-xs font-medium text-slate-500">Após o banho, antes de se vestir. Perfeito para usar antes do desodorante.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-5 bg-brand-pink/5 rounded-2xl border border-brand-pink/10 group hover:bg-brand-pink/10 transition-colors">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-brand-pink group-hover:scale-110 transition-transform"><Moon size={24} /></div>
                                        <div>
                                            <p className="font-black text-brand-pink uppercase text-sm mb-1">NOITE:</p>
                                            <p className="text-xs font-medium text-slate-500">Antes de dormir, com a pele limpa e seca. Deixe os ativos agirem a noite toda.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DICAS PARA POTENCIALIZAR */}
                            <div className="bg-brand-blue-dark text-white rounded-[3.5rem] p-10 shadow-2xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><Lightbulb size={120} /></div>
                                <h3 className="text-lg font-black uppercase tracking-[0.2em] text-brand-pink flex items-center gap-2">
                                    <Zap size={20} fill="currentColor" /> POTENCIALIZE O RESULTADO:
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { t: "USE PROTETOR SOLAR", d: "Se aplicar no rosto, use FPS 50+. Sem ele, a mancha volta com o sol.", icon: Sun },
                                        { t: "PELE BEM SECA", d: "A umidade dilui o produto. Aplique sempre com a pele 100% seca.", icon: Droplets },
                                        { t: "NÃO MISTURE PRODUTOS", d: "Use apenas Amazolé na área. Outros cremes podem anular o efeito.", icon: Ban },
                                        { t: "SEJA CONSISTENTE", d: "2x por dia, TODO DIA. Pular dias atrasa seu clareamento.", icon: Activity }
                                    ].map((tip, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="p-2 bg-white/10 rounded-lg text-brand-pink group-hover:scale-110 transition-transform"><tip.icon size={18} /></div>
                                            <div>
                                                <p className="font-black uppercase text-xs tracking-widest mb-1 text-white">{tip.t}</p>
                                                <p className="text-xs text-white/70 font-medium leading-relaxed">{tip.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 🆕 SEÇÃO: ÁREAS TRATÁVEIS E CONSUMO 🆕 */}
            <section className="py-24 px-6 bg-white border-b border-brand-blue/10">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <span className="text-brand-blue-dark font-black text-xs uppercase tracking-[0.5em] block mb-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 w-fit mx-auto">Flexibilidade Total</span>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter leading-[0.9]">
                            ÁREAS QUE VOCÊ <span className="text-brand-pink italic">PODE TRATAR</span>
                        </h2>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">RESULTADO COMPROVADO EM TODAS AS ÁREAS</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Lista de Áreas */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { t: "Axilas escuras", d: "Atrito e depilação" },
                                { t: "Virilhas manchadas", d: "Calcinha e depilação" },
                                { t: "Melasma facial", d: "Gravidez e sol" },
                                { t: "Manchas de idade", d: "Rosto e mãos" },
                                { t: "Foliculite", d: "Bolinhas escuras" },
                                { t: "Cotovelos/Joelhos", d: "Pele grossa e escura" },
                                { t: "Pescoço manchado", d: "Atrito e suor" },
                                { t: "Entre coxas", d: "Atrito ao caminhar" }
                            ].map((area, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-brand-gray-light rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-all group">
                                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <p className="font-black text-brand-blue-dark text-sm uppercase leading-tight">{area.t}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{area.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Guia de Consumo */}
                        <div className="bg-brand-blue-dark rounded-[3.5rem] p-10 md:p-14 text-white space-y-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12"><Target size={180} /></div>
                            
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <Info className="text-brand-pink" /> GUIA DE CONSUMO:
                                </h3>
                                <div className="h-1 w-20 bg-brand-pink rounded-full"></div>
                            </div>

                            <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm text-center">
                                <p className="text-xl md:text-2xl font-black tracking-tight mb-2">1 FRASCO = 1 ÁREA POR 30 DIAS</p>
                                <p className="text-sm font-medium text-white/70 uppercase tracking-widest italic">A dosagem correta garante o clareamento</p>
                            </div>

                            <div className="space-y-6">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-pink">Exemplos de tratamento:</p>
                                <div className="space-y-4">
                                    {[
                                        { t: "Tratar só axilas", q: "1 frasco" },
                                        { t: "Tratar axilas + virilha", q: "2 frascos" },
                                        { t: "Tratar rosto + axilas + virilha", q: "3 frascos" }
                                    ].map((ex, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5">
                                            <span className="font-bold text-sm">→ {ex.t}</span>
                                            <span className="bg-white text-brand-blue-dark px-3 py-1 rounded-lg font-black text-xs uppercase">{ex.q}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🆕 SEÇÃO: LINHA DO TEMPO REAL 🆕 */}
            <section className="py-24 px-6 bg-brand-gray-light border-b border-slate-100">
                <div className="max-w-4xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.5em] block mb-2">Paciência & Consistência</span>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter leading-[0.9]">
                            LINHA DO <span className="text-brand-pink italic">TEMPO REAL</span>
                        </h2>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">O QUE ACONTECE SEMANA A SEMANA</p>
                    </div>

                    <div className="relative space-y-12">
                        {/* Linha Vertical Decorativa */}
                        <div className="absolute left-6 top-4 bottom-4 w-1 bg-brand-blue/20 -z-10 rounded-full hidden md:block"></div>

                        {[
                            { 
                                s: "SEMANA 1", 
                                icon: Sparkles, 
                                color: "bg-brand-blue", 
                                items: ["Pele mais macia e uniforme", "Vermelhidão diminui", "Foliculite (bolinhas) melhora"] 
                            },
                            { 
                                s: "SEMANA 2", 
                                icon: Activity, 
                                color: "bg-brand-blue-dark", 
                                items: ["Tom começa a clarear (sutil)", "Textura lisa", "Inflamação some"] 
                            },
                            { 
                                s: "SEMANA 3-4", 
                                icon: UserCheck, 
                                color: "bg-brand-pink", 
                                items: ["Clareamento VISÍVEL", "Mancha 30-40% mais clara", "Outras pessoas NOTAM"] 
                            },
                            { 
                                s: "SEMANA 5-8", 
                                icon: Heart, 
                                color: "bg-brand-pink-dark", 
                                items: ["Clareamento intensifica", "Mancha 50-70% mais clara", "Usa regata/biquíni com confiança"] 
                            },
                            { 
                                s: "MÊS 3+", 
                                icon: ShieldCheck, 
                                color: "bg-emerald-600", 
                                items: ["Tom quase igualado", "Pele uniforme", "Manutenção 1x ao dia"] 
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                                {/* Marcador */}
                                <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-500 z-10", step.color)}>
                                    <step.icon size={24} />
                                </div>
                                
                                {/* Conteúdo */}
                                <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-500">
                                    <h4 className="text-xl font-black text-brand-blue-dark uppercase tracking-tight mb-6">{step.s}</h4>
                                    <ul className="space-y-3">
                                        {step.items.map((li, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-brand-text font-bold text-sm">
                                                <div className="h-4 w-4 border-2 border-brand-blue/30 rounded flex items-center justify-center shrink-0">
                                                    <div className="h-2 w-2 bg-brand-blue rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-brand-gray-light border-t border-slate-50 text-center">
                <div className="max-w-4xl mx-auto bg-white border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 text-brand-blue rotate-12"><ShieldCheck size={200} /></div>
                    <ShieldCheck className="mx-auto h-24 w-24 text-brand-blue-dark mb-10 drop-shadow-lg" />
                    <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-brand-blue-dark">GARANTIA <span className="text-brand-pink">RISCO ZERO</span></h2>
                    <p className="text-xl text-brand-text font-bold italic mb-10 max-w-2xl mx-auto leading-relaxed">
                        Use o Amazolé por 90 dias inteiros. Se você não ver clareamento visível, devolvemos 100% do seu dinheiro. Sem perguntas. Sem enrolação. Porque temos certeza que funciona.
                    </p>
                    <div className="inline-block px-10 py-3 bg-brand-blue-dark text-white rounded-full text-xs font-black uppercase tracking-[0.4em] shadow-lg">90 DIAS DE GARANTIA BLINDADA</div>
                </div>
            </section>

            {/* OFERTA FINAL */}
            <section id="pricing" className="py-32 px-6 bg-brand-blue-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent"></div>
                
                <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1 bg-brand-pink text-white rounded-full text-xs font-black uppercase tracking-[0.3em] animate-bounce shadow-lg">Últimas Unidades do Lote</span>
                        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                            SOLTE SEU CABELO E <span className="text-brand-pink italic underline decoration-white/30">VIVA SEM VERGONHA</span>
                        </h2>
                        <p className="text-brand-blue font-black text-xl flex items-center justify-center gap-3">
                            <Clock size={24} className="animate-pulse" /> OFERTA ENCERRA EM: {formatTime(timeLeft)}
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-[4rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative border-[8px] border-white">
                        <div className="flex flex-col items-center space-y-10">
                            <div className="space-y-4 w-full text-left">
                                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-center text-xs mb-6">Escolha o seu tratamento:</p>
                                
                                <KitSelector 
                                    options={AMAZOLÉ_KITS}
                                    selectedId={selectedKit.id}
                                    onSelect={setSelectedKit}
                                />
                            </div>

                            <Link href={selectedKit.checkoutUrl} className="w-full max-w-xl group/btn" target="_blank">
                                <Button className="w-full h-24 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(229,71,143,0.4)] transition-all hover:scale-[1.05] active:scale-95 flex flex-col items-center justify-center gap-1 group/button overflow-hidden relative">
                                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 relative z-10">
                                        <ShoppingBag size={28} className="group-hover/btn:scale-110 transition-transform" />
                                        Aproveitar Agora
                                    </span>
                                    <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em] relative z-10">PAGAMENTO 100% SEGURO | FRETE GRÁTIS BRASIL</span>
                                </Button>
                            </Link>

                            <div className="space-y-6">
                                <div className="flex items-center justify-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-4 py-2 rounded-full border border-red-100">
                                    <AlertTriangle size={18} className="animate-pulse" /> RESTAM APENAS 14 KITS COM ESTE DESCONTO
                                </div>
                                <div className="flex justify-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                                    <ShieldCheck size={28} /> <Lock size={28} /> <CreditCard size={28} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-brand-gray-light text-brand-text border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-200">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue-dark">Avisos e Isenções</h3>
                        <div className="text-xs text-slate-500 font-medium leading-relaxed space-y-4 text-justify">
                            <p>Este conteúdo tem caráter informativo e educacional. Não oferece diagnóstico ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado.</p>
                            <p>Conteúdo destinado a maiores de 18 anos.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <span className="text-3xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-loose">
                            <p>OneBase | Soluções Digitais</p>
                            <p>E-Business Rio Verde | Aparecida de Goiania - GO</p>
                            <p>CNPJ: 60.357.932/0001-18</p>
                        </div>
                    </div>
                </div>

                <nav className="flex flex-col md:flex-row gap-8 justify-center mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    <button className="hover:text-brand-pink transition-colors">Termos e Condições</button>
                    <button className="hover:text-brand-pink transition-colors">Política de Privacidade</button>
                    <button className="hover:text-brand-pink transition-colors">Política de Reembolso</button>
                </nav>

                <div className="text-center opacity-30 flex justify-center gap-8 mb-10 grayscale">
                    <ShieldCheck size={40} /><Lock size={40} /><CreditCard size={40} />
                </div>
                
                <div className="text-center pt-8 border-t border-slate-100">
                    <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">© 2024 Amazolé - Clareador Natural da Amazônia</p>
                </div>
              </div>
            </footer>
        </div>

        {/* STICKY BAR MOBILE */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-full duration-700">
            <Link href={selectedKit.checkoutUrl} className="block" target="_blank">
                <Button className="w-full h-16 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-2xl shadow-xl shadow-brand-pink/20 transition-all flex items-center justify-between px-5 font-black uppercase">
                    <div className="flex flex-col items-start leading-tight border-r border-white/20 pr-4">
                        <span className="text-[10px] opacity-70">Apenas</span>
                        <span className="text-lg">R$ {selectedKit.price}</span>
                    </div>
                    <span className="flex-1 text-center text-xl italic tracking-tighter">Comprar agora <ArrowRight className="inline ml-1" size={20} /></span>
                </Button>
            </Link>
        </div>
      </div>
    </>
  );
}