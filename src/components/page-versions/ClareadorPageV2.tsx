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
  UserCheck
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

// IMAGENS DA GALERIA DE PRODUTO
const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

// IMAGENS ANTES E DEPOIS
const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

// CONFIGURAÇÃO DOS KITS (VALORES DO ROTEIRO)
const AMAZOLÉ_KITS: KitOption[] = [
  {
    id: '1-un',
    units: 1,
    discount: '21% OFF',
    price: '117,70',
    originalPrice: 'R$ 149,90',
    unitPrice: '117,70',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '3-un',
    units: 3,
    discount: '40% OFF',
    price: '267,70',
    originalPrice: 'R$ 449,70',
    unitPrice: '89,23',
    badges: ['Mais Vendido'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '5-un',
    units: 5,
    discount: '55% OFF',
    price: '397,70',
    originalPrice: 'R$ 899,40',
    unitPrice: '79,54',
    badges: ['Melhor Preço'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  }
];

export function ClareadorPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860); // 10h 31min
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
    return `${h}h ${m} min`;
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
      <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 antialiased min-h-screen">
        
        {/* NAV */}
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
            </div>
        </nav>

        {/* HERO / PRODUCT */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* GALERIA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
                        <img 
                          src={PRODUCT_IMAGES[activeImageIndex]} 
                          alt="Amazolé" 
                          className="w-full h-full object-cover transition-all duration-700" 
                        />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block"><ChevronLeft /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block"><ChevronRight /></button>
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
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
                                    activeImageIndex === i ? "border-emerald-500 scale-105" : "border-slate-100 opacity-60"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* INFOS COMPRA */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-emerald-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Clareador Natural do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                            Amazolé - Clareador de Manchas 100% Natural
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 1.847 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 32.400 mulheres usando no mês passado.
                        </p>
                    </div>

                    <div className="bg-emerald-50/50 border-l-4 border-emerald-400 p-5 rounded-r-2xl space-y-2">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">
                            "Escondi Minhas Axilas Por 3 Anos... <br />
                            Hoje Uso Regata Sem Vergonha."
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Carolina M., São Paulo
                        </p>
                    </div>

                    <div className="pt-2">
                      <KitSelector 
                        options={AMAZOLÉ_KITS} 
                        selectedId={selectedKit.id} 
                        onSelect={setSelectedKit} 
                      />
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link href={selectedKit.checkoutUrl} target="_blank">
                            <Button 
                                className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 group"
                                style={{ backgroundColor: '#35c867' }}
                            >
                                <ShoppingBag size={28} />
                                Comprar agora
                                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
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
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* MIDIA */}
        <section className="py-12 bg-white border-y border-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30 grayscale">
               <span className="text-2xl md:text-3xl font-black tracking-tighter">G1</span>
               <span className="text-2xl md:text-3xl font-black tracking-tighter italic">R7</span>
               <span className="text-2xl md:text-3xl font-black tracking-tighter">VIVA BEM</span>
               <span className="text-2xl md:text-3xl font-black tracking-tighter underline decoration-4">DRAUZIO</span>
            </div>
          </div>
        </section>

        {/* RESULTADOS REAIS */}
        <section className="py-24 px-6 bg-white border-b border-emerald-100">
          <div className="max-w-6xl mx-auto space-y-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">Resultados Reais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-emerald-100">
                   <img src={url} alt="Antes e Depois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PÚBLICO ALVO */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-emerald-700">100% Natural Por R$ 117,70.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "💔 Esconde axilas escuras e não usa regata há anos",
                                "💔 Evita biquíni ou calcinha porque a virilha tá manchada",
                                "💔 Melasma te faz usar base TODOS os dias",
                                "💔 Já tentou cremes que arderam e não clarearam",
                                "💔 Tem vergonha na frente do parceiro"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700"><Check className="text-emerald-500" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" alt="Mulher Confiante" className="rounded-[3rem] border-8 border-white shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-32 px-6 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">🔬 COMO FUNCIONA?</h2>
                    <p className="text-xl text-slate-700 font-medium">Sua mancha escura existe por 3 MOTIVOS:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "1", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área." },
                        { n: "2", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação e suor irritam a pele." },
                        { n: "3", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-10 rounded-[3.5rem] border border-emerald-100 text-center">
                            <div className="h-12 w-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl">{item.n}</div>
                            <h4 className="font-black text-slate-900 uppercase mb-4">{item.t}</h4>
                            <p className="text-sm text-slate-500">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ETAPAS */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-6xl mx-auto space-y-16">
                {[
                    { t: "ETAPA 1: BLOQUEIA MELANINA", d: "Mulateiro inibe a produção de pigmento escuro na origem.", a: "É como desligar a TORNEIRA que jorra tinta preta." },
                    { t: "ETAPA 2: ACALMA INFLAMAÇÃO", d: "Melaleuca acalma a irritação e previne foliculite.", a: "É como apagar um INCÊNDIO antes de pintar a parede." },
                    { t: "ETAPA 3: REMOVE CÉLULAS ESCURAS", d: "Argila Branca esfolia suavemente sem arder.", a: "É como LIXAR madeira antes de envernizar." }
                ].map((step, i) => (
                    <div key={i} className="bg-white p-12 rounded-[4rem] shadow-sm border border-emerald-100 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-black text-emerald-800">{step.t}</h4>
                            <p className="text-lg text-slate-700">{step.d}</p>
                            <div className="p-6 bg-emerald-50 rounded-3xl text-sm italic"><strong>Analogia:</strong> {step.a}</div>
                        </div>
                        <div className="aspect-video bg-slate-100 rounded-[2.5rem] flex items-center justify-center text-slate-400 font-bold">INFOGRÁFICO ETAPA {i+1}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2></div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                    {[
                        { q: "❓ Funciona mesmo?", a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas." },
                        { q: "❓ Arde ou descasca?", a: "NÃO. Fórmula 100% natural sem ácidos agressivos." },
                        { q: "❓ Posso parcelar?", a: "SIM. Até 12x no cartão ou PIX com desconto." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-[#FDF8F3] border border-emerald-100 rounded-2xl px-6">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest">AMAZOLÉ</h3>
                <p className="text-xs text-slate-500">Este produto tem caráter cosmético. Não oferece cura de condições de saúde. Resultados variam por pessoa.</p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-8 mx-auto md:mx-0" />
                <p className="text-[10px] text-slate-400 font-bold">© 2025 Amazolé - Clareador Natural da Amazônia</p>
            </div>
          </div>
        </footer>

        <MobileStickyBar 
          installmentText="12x de 13,90"
          buttonText="Comprar agora" 
          checkoutUrl={selectedKit.checkoutUrl} 
        />
      </div>
    </>
  );
}