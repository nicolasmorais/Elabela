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
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png", // Placeholder simulado para mulher na praia
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

// CONFIGURAÇÃO DOS KITS (VALORES DO SCRIPT)
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
    badges: ['Melhor Resultado'],
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
    const s = seconds % 60;
    return `${h}h ${m} min ${s}s`;
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
                          className="w-full h-full object-cover" 
                        />
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

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">R$ 189,99</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">28% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ 137,00</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            12x de R$ 13,90
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
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-emerald-600 font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                Resultados Reais, Mulheres Reais
              </h2>
              <div className="h-1.5 w-32 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-md border border-emerald-100">
                   <img src={url} alt="Antes e Depois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
            <div className="text-center pt-8">
              <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
            </div>
          </div>
        </section>

        {/* PÚBLICO ALVO */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-emerald-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-emerald-700">100% Natural da Amazônia Por R$ 137,00.</span>
                        </h2>

                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-emerald-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "💔 Esconde axilas escuras e não usa regata há anos",
                                    "💔 Evita biquíni ou calcinha porque a virilha tá manchada",
                                    "💔 Melasma te faz usar base TODOS os dias (mesmo em casa)",
                                    "💔 Já tentou mil cremes que arderam, descascaram e não clarearam",
                                    "💔 Tem vergonha de tirar a roupa na frente do parceiro"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                <p>Porque você merece usar QUALQUER roupa sem medo.</p>
                                <p className="text-emerald-800 italic underline decoration-emerald-300">Sem precisar escolher entre: Clarear as manchas OU irritar a pele.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                        <div className="absolute inset-0 bg-emerald-300 rounded-full blur-[100px] opacity-10"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                            alt="Mulher Confiante" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* POR QUE CLAREIA */}
        <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <span className="inline-block text-emerald-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">FÓRMULA PATENTEADA DA AMAZÔNIA</span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                        POR QUE AMAZOLÉ CLAREIA EM <span className="text-emerald-600">SEMANAS?</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                        (Sem Ácidos Que Ardem, Descascam ou Mancham Mais)
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl shadow-sm border border-emerald-100">
                                <Microscope size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                        </div>
                        <p className="text-xl text-slate-700 font-medium leading-relaxed">
                            Sua mancha escura existe por <span className="text-emerald-600 font-black">3 MOTIVOS:</span>
                        </p>
                        <div className="space-y-4">
                            {[
                                { n: "1", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área." },
                                { n: "2", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação, suor mantém a pele irritada." },
                                { n: "3", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-[#FDF8F3] rounded-2xl border border-emerald-100">
                                    <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black shrink-0 shadow-sm">{item.n}</div>
                                    <div>
                                        <p className="font-black text-emerald-950 uppercase text-sm tracking-widest mb-1">{item.t}</p>
                                        <p className="text-slate-500 font-medium text-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-red-50 rounded-[2rem] border border-red-100">
                            <p className="text-red-800 font-bold text-lg leading-relaxed">
                                <span className="font-black uppercase block mb-2">Cuidado:</span>
                                Produtos comuns usam ÁCIDOS para "queimar" a mancha. Resultado: Arde, descasca, irrita, e volta PIOR. Amazolé é TOTALMENTE DIFERENTE.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/5 rounded-full blur-[100px]"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                            alt="Ingredientes Naturais" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* ETAPAS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { 
                            title: "ETAPA 1: BLOQUEIA MELANINA", 
                            prod: "Mulateiro + Dolomita",
                            desc: "Inibe a produção de pigmento escuro na origem e regenera as células naturalmente sem queimar.",
                            feels: ["1ª semana: Pele uniforme", "2 semanas: Tom clareando", "4 semanas: Mancha clara"],
                            analogia: "É como desligar a TORNEIRA que jorra tinta preta. Mulateiro FECHA a torneira."
                        },
                        { 
                            title: "ETAPA 2: ACALMA INFLAMAÇÃO", 
                            prod: "Óleo de Melaleuca",
                            desc: "Ação antibacteriana que acalma a irritação do atrito e depilação, prevenindo foliculite.",
                            feels: ["Imediato: Para de coçar", "3 dias: Vermelhidão diminui", "1 semana: Pele lisa"],
                            analogia: "É como apagar um INCÊNDIO antes de pintar a parede. Melaleuca APAGA o fogo."
                        },
                        { 
                            title: "ETAPA 3: REMOVE CÉLULAS ESCURAS", 
                            prod: "Argila Branca",
                            desc: "Esfolia suavemente sem arder, removendo impurezas e camadas escuras progressivamente.",
                            feels: ["1ª aplicação: Pele macia", "1 semana: Textura lisa", "2 semanas: Tom mais claro"],
                            analogia: "É como LIXAR madeira antes de envernizar. Remove o escuro sem agredir."
                        }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-emerald-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className="space-y-6 flex-1">
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black text-slate-950 uppercase leading-tight">{step.title}</h4>
                                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">({step.prod})</p>
                                </div>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                <div className="space-y-3 pt-4 border-t border-emerald-50">
                                    {step.feels.map((feel, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                            <Check size={12} className="text-emerald-500" strokeWidth={4} />
                                            {feel}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6">
                                    <div className="p-5 bg-emerald-50/50 rounded-3xl border border-emerald-100 text-xs text-slate-500 italic">
                                        <span className="font-black text-slate-900 not-italic uppercase block mb-1">Analogia:</span>
                                        {step.analogia}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* DIFERENCIAIS GRID */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">POR QUE AMAZOLÉ E OUTROS NÃO?</h2>
                    <p className="text-emerald-700 font-bold uppercase tracking-widest">4 Ingredientes Naturais Que Fazem a Diferença</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Droplets, t: "MULATEIRO", d: "Bloqueia melanina na origem.", feel: "Ton uniforme em 2 semanas" },
                        { icon: Layers, t: "DOLOMITA", d: "Regenera células da pele.", feel: "Mancha clareando progressivamente" },
                        { icon: Zap, t: "MELALEUCA", d: "Acalma inflamação e vermelhidão.", feel: "Pele lisa, sem bolinhas" },
                        { icon: Sparkles, t: "ARGILA BRANCA", d: "Esfolia e remove células escuras.", feel: "Textura macia imediata" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-emerald-50 text-center space-y-4">
                            <div className="p-4 bg-emerald-50 rounded-full w-fit mx-auto text-emerald-600"><item.icon size={24} /></div>
                            <h4 className="font-black text-slate-900 uppercase">{item.t}</h4>
                            <p className="text-sm text-slate-500">{item.d}</p>
                            <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">VOCÊ SENTE: {item.feel}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                    {["100% Natural (sem ácidos)", "pH Balanceado (pele sensível)", "Fórmula Patenteada"].map((diff, i) => (
                        <div key={i} className="flex items-center gap-3 justify-center bg-emerald-600 text-white p-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg">
                            <CheckCircle2 size={16} /> {diff}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* COMO USAR */}
        <section className="py-24 px-6 bg-white border-y border-slate-100">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">COMO USAR O AMAZOLÉ</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Tão Fácil Quanto Passar Creme Hidratante (Nem precisa enxaguar!)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "1", t: "LIMPE A ÁREA", d: "Lave com sabonete neutro e seque bem (MUITO importante!).", time: "1 minuto" },
                        { n: "2", t: "APLIQUE", d: "Quantidade de 1 grão de ervilha. Massageie até absorver. NÃO enxágue.", time: "2 minutos" },
                        { n: "3", t: "AGUARDE", d: "Espere 3-5 minutos antes de vestir. Pode usar desodorante depois.", time: "3 minutos" }
                    ].map((step, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-4 text-center">
                            <div className="h-12 w-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black mx-auto text-xl">{step.n}</div>
                            <h4 className="font-black text-slate-900 uppercase tracking-tight">{step.t}</h4>
                            <p className="text-sm text-slate-500 font-medium">{step.d}</p>
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center justify-center gap-1"><Clock size={10} /> {step.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ÁREAS E LINHA DO TEMPO */}
        <section className="py-24 px-6 bg-emerald-950 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h3 className="text-3xl font-black uppercase tracking-tight leading-none border-b border-white/20 pb-4">ÁREAS QUE VOCÊ PODE TRATAR:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Axilas escuras", "Virilhas manchadas", "Melasma facial", "Manchas de idade",
                            "Foliculite", "Cotovelos/Joelhos", "Pescoço manchado", "Entre coxas"
                        ].map((area, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                <CheckCircle2 className="text-emerald-400" />
                                <span className="font-bold text-sm uppercase tracking-wide">{area}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 bg-emerald-900 rounded-3xl border border-emerald-800">
                        <p className="font-black text-emerald-400 uppercase text-xs mb-2">RENDIMENTO:</p>
                        <p className="text-lg font-bold">1 FRASCO = 1 ÁREA POR 30 DIAS</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-3xl font-black uppercase tracking-tight leading-none border-b border-white/20 pb-4">LINHA DO TEMPO REAL:</h3>
                    <div className="space-y-6">
                        {[
                            { s: "SEMANA 1", d: "Pele mais macia e uniforme. Vermelhidão diminui." },
                            { s: "SEMANA 2", d: "Tom começa a clarear (sutil). Textura lisa." },
                            { s: "SEMANA 3-4", d: "Clareamento VISÍVEL. Mancha 30-40% mais clara." },
                            { s: "SEMANA 5-8", d: "Clareamento intensifica. 50-70% mais clara." },
                            { s: "MÊS 3+", d: "Tom quase igualado. Pele uniforme." }
                        ].map((time, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                                <div>
                                    <h4 className="font-black text-emerald-400 text-sm tracking-widest">{time.s}</h4>
                                    <p className="text-white/80 font-medium">{time.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* DEPOIMENTOS CLIENTES */}
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                      ENQUANTO VOCÊ LÊ, MILHARES JÁ ESTÃO CLAREANDO ✨
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">Fotos reais enviadas por nossas clientes</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { n: "Patrícia L.", c: "Curitiba", t: "Usei por 1 mês nas axilas. Clareou MUITO! Já consigo usar regata sem vergonha. O cheiro é suave e não arde nada." },
                        { n: "Fernanda S.", c: "Belo Horizonte", t: "Meu melasma diminuiu bastante em 6 semanas. Uso menos base agora. Produto natural, não irrita." },
                        { n: "Juliana M.", c: "Salvador", t: "Virilha estava horrível. Com 3 semanas já vi diferença. Com 2 meses clareou uns 60%. Vale cada centavo!" },
                        { n: "Renata P.", c: "Recife", t: "Foliculite nas coxas sumiu em 10 dias. O clareamento veio depois. Pele lisinha agora!" },
                        { n: "Maria C.", c: "Porto Alegre", t: "Manchas de idade nas mãos clarearam bem. Uso há 2 meses. Minhas amigas perguntam o que usei!" },
                        { n: "Beatriz A.", c: "Rio de Janeiro", t: "Cotovelos escuros desde criança. Esse foi o ÚNICO que clareou de verdade. 8 semanas = resultado incrível." }
                    ].map((test, i) => (
                        <div key={i} className="bg-white p-8 rounded-[3rem] border border-emerald-50 shadow-xl relative hover:-translate-y-2 transition-all">
                            <div className="flex gap-1 text-orange-400 mb-6">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                            </div>
                            <p className="italic text-slate-600 font-medium leading-relaxed mb-8">"{test.t}"</p>
                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <p className="font-black text-slate-900 text-xs uppercase tracking-widest">— {test.n}, {test.c}</p>
                                <Verified size={16} className="text-emerald-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ COMPLETO */}
        <section className="py-24 px-6 bg-[#FDF8F3] border-y border-emerald-100">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                    <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3">
                    <h3 className="text-lg font-black text-emerald-800 uppercase tracking-widest px-4">💰 SOBRE O PRODUTO</h3>
                    {[
                        { q: "❓ Funciona mesmo?", a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas. Garantia de 90 dias: não clareou = dinheiro de volta." },
                        { q: "❓ Já tentei mil clareadores e nenhum funcionou. Por que este seria diferente?", a: "Porque os outros usam ÁCIDOS que ardem e descascam, irritando a pele. Amazolé usa BOTÂNICA: Mulateiro bloqueia melanina NA RAIZ sem agredir." },
                        { q: "❓ Funciona para melasma?", a: "SIM. Melasma é acúmulo de melanina. Mulateiro inibe essa produção. MAS: Precisa usar protetor solar FPS 50+ TODO DIA." },
                        { q: "❓ Arde? Descasca a pele?", a: "NÃO. Fórmula 100% natural, sem ácidos agressivos. Pode sentir leve formigamento na 1ª aplicação, que passa rápido." },
                        { q: "❓ Tenho pele sensível/alérgica. Posso usar?", a: "PODE. Fórmula natural, pH balanceado e testado dermatologicamente. Recomendamos teste de alergia atrás da orelha antes do uso total." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-emerald-100 rounded-2xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}

                    <h3 className="text-lg font-black text-emerald-800 uppercase tracking-widest px-4 pt-8">💳 PAGAMENTO E ENTREGA</h3>
                    {[
                        { q: "❓ Posso parcelar?", a: "SIM. Até 12x de R$ 13,90 sem juros. Ou no PIX com desconto aplicado." },
                        { q: "❓ Quanto tempo para chegar?", a: "Sudeste/Sul: 3-7 dias úteis. Demais regiões: 5-12 dias úteis. Envio em até 24h úteis." },
                        { q: "❓ É seguro comprar?", a: "100% SEGURO. Certificado SSL, Checkout criptografado, Nota fiscal e CNPJ ativo." }
                    ].map((item, i) => (
                        <AccordionItem key={i+10} value={`faq-${i+10}`} className="bg-white border border-emerald-100 rounded-2xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-white border-t border-slate-50 text-center">
            <div className="max-w-4xl mx-auto bg-emerald-50 border-[6px] border-dashed border-emerald-500/30 p-12 md:p-24 rounded-[4rem]">
                <ShieldCheck className="mx-auto h-24 w-24 text-emerald-700 mb-10" />
                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">SATISFAÇÃO OU DINHEIRO DE VOLTA</h2>
                <p className="text-xl text-slate-600 italic mb-10 max-w-2xl mx-auto">
                    Use o Amazolé por 90 dias inteiros. Se não ver clareamento visível, devolvemos 100% do seu dinheiro. Sem perguntas. Porque temos certeza que funciona.
                </p>
                <div className="inline-block px-10 py-3 bg-slate-900 text-emerald-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">GARANTIA 90 DIAS</div>
            </div>
        </section>

        {/* OFERTA FINAL */}
        <section id="pricing" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                    SUA ÚLTIMA CHANCE DE USAR <br /> <span className="text-emerald-500 italic underline decoration-emerald-500/30">QUALQUER ROUPA SEM MEDO</span>
                </h2>
                
                <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-2xl relative border-[8px] border-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 px-8 py-2 rounded-full text-white font-black text-xs tracking-widest animate-bounce shadow-xl">
                        OFERTA POR TEMPO LIMITADO
                    </div>

                    <div className="flex flex-col items-center space-y-10">
                        <div className="space-y-4 w-full">
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Escolha seu tratamento:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {AMAZOLÉ_KITS.map((kit) => (
                                    <div 
                                        key={kit.id}
                                        onClick={() => setSelectedKit(kit)}
                                        className={cn(
                                            "p-8 rounded-[2.5rem] border-2 cursor-pointer transition-all flex flex-col items-center gap-4 relative",
                                            selectedKit.id === kit.id ? "border-emerald-500 bg-emerald-50 scale-105 shadow-xl" : "border-slate-100 hover:border-slate-200"
                                        )}
                                    >
                                        {kit.badges?.[0] && (
                                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                {kit.badges[0]}
                                            </span>
                                        )}
                                        <p className="font-black text-2xl text-slate-900">{kit.units} {kit.units === 1 ? 'Frasco' : 'Frascos'}</p>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-slate-400 line-through text-xs">{kit.originalPrice}</span>
                                            <span className="text-3xl font-black text-slate-950">R$ {kit.price}</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cartão: {kit.units === 1 ? 'R$ 137' : kit.units === 2 ? 'R$ 197' : 'R$ 247'}</p>
                                        <div className={cn("mt-4 h-6 w-6 rounded-full border-2 flex items-center justify-center", selectedKit.id === kit.id ? "border-emerald-600 bg-emerald-600" : "border-slate-200")}>
                                            {selectedKit.id === kit.id && <Check className="text-white h-4 w-4" strokeWidth={4} />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link href={selectedKit.checkoutUrl} className="w-full max-w-xl" target="_blank">
                            <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-xl transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-1">
                                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <ShoppingBag size={28} />
                                    Aproveitar Oferta
                                </span>
                                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">FRETE GRÁTIS BRASIL | ENVIO EM 24H</span>
                            </Button>
                        </Link>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest">
                                <AlertTriangle size={18} /> ATENÇÃO: RESTAM APENAS 47 KITS COM ESTE DESCONTO
                            </div>
                            <div className="flex justify-center gap-8 opacity-40 grayscale">
                                <ShieldCheck size={24} /> <Lock size={24} /> <CreditCard size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-emerald-100">
                <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em]">Avisos e Isenções</h3>
                    <div className="space-y-4 text-[10px] text-slate-500 leading-relaxed">
                        <p>Este produto tem caráter cosmético. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um dermatologista antes de iniciar qualquer tratamento para manchas de pele.</p>
                        <p>Aviso de Idade: Conteúdo destinado a maiores de 18 anos.</p>
                        <p>Uso Responsável: Produto de uso externo. Evite contato com olhos. Faça teste de alergia antes do uso.</p>
                    </div>
                </div>
                <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-end">
                    <span className="text-3xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
                    <div className="text-right text-[10px] text-slate-400 font-bold space-y-1">
                        <p>E-Business Rio Verde | Aparecida de Goiânia - GO</p>
                        <p>CNPJ: XX.XXX.XXX/0001-XX</p>
                    </div>
                </div>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 mb-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <button className="hover:text-emerald-600 transition-colors">Termos e Condições</button>
                <button className="hover:text-emerald-600 transition-colors">Política de Privacidade</button>
                <button className="hover:text-emerald-600 transition-colors">Política de Reembolso</button>
            </nav>

            <div className="text-center pt-8 border-t border-slate-200">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">© 2025 Amazolé - Clareador Natural da Amazônia</p>
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