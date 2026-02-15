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
  Scissors
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
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png", // Mulher biquini praia
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

// CONFIGURAÇÃO DOS KITS (VALORES EXATOS DO ROTEIRO)
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

        {/* HERO SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
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

                {/* DIREITA: COMPRA */}
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
                        <p className="text-slate-500 font-medium text-sm italic">
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

        {/* LOGOS MIDIA */}
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
            <div className="space-y-4">
                <span className="inline-block text-emerald-600 font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">Resultados Reais, Mulheres Reais</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-emerald-100 shadow-sm">
                   <img src={url} alt="Antes e Depois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
            <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
          </div>
        </section>

        {/* SOLUÇÃO SECTION */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-emerald-800 font-black text-xs uppercase tracking-[0.4em]">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-emerald-700">100% Natural da Amazônia Por R$ 137,00.</span>
                        </h2>
                        
                        <div className="space-y-6">
                            <h4 className="text-xl font-black text-slate-900 border-b-2 border-emerald-200 inline-block pb-1 uppercase">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "💔 Esconde axilas escuras e não usa regata há anos",
                                    "💔 Evita biquíni ou calcinha porque a virilha tá manchada",
                                    "💔 Melasma te faz usar base TODOS os dias (mesmo em casa)",
                                    "💔 Já tentou mil cremes que arderam, descascaram e não clarearam",
                                    "💔 Tem vergonha de tirar a roupa na frente do parceiro"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg font-bold text-slate-700">
                                        <Check className="text-emerald-500 shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                            <p>Porque você merece usar QUALQUER roupa sem medo.</p>
                            <p className="text-emerald-800 italic underline decoration-emerald-200">Sem precisar escolher entre: Clarear as manchas OU irritar a pele.</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" alt="Mulher Confiante" className="rounded-[3rem] border-8 border-white shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>

        {/* POR QUE CLAREIA SECTION */}
        <section className="py-32 px-6 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                        POR QUE AMAZOLÉ CLAREIA EM <span className="text-emerald-600">SEMANAS?</span>
                    </h2>
                    <div className="space-y-2">
                        <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">FÓRMULA PATENTEADA DA AMAZÔNIA</p>
                        <p className="text-sm font-bold text-emerald-600 italic">(Sem Ácidos Que Ardem, Descascam ou Mancham Mais)</p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-[4rem] p-10 md:p-16 space-y-12">
                    <div className="flex items-center gap-4 border-b border-emerald-100 pb-6">
                        <Microscope className="text-emerald-600" size={32} />
                        <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: "1️⃣", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área" },
                            { n: "2️⃣", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação, suor mantém a pele irritada" },
                            { n: "3️⃣", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <h4 className="font-black text-slate-900 text-xl tracking-tight">{item.n} {item.t}</h4>
                                <p className="text-slate-600 font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                        <p className="text-red-800 font-bold text-lg leading-relaxed">
                            Produtos comuns usam ÁCIDOS para "queimar" a mancha. <br />
                            <span className="font-black uppercase">Resultado:</span> Arde, descasca, irrita, e volta PIOR. Amazolé é TOTALMENTE DIFERENTE:
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ETAPA 1 */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black text-emerald-800 uppercase tracking-tight">ETAPA 1: BLOQUEIA MELANINA NA RAIZ</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest">(Mulateiro + Dolomita)</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="font-black text-slate-900 uppercase text-sm">MULATEIRO (Planta da Amazônia):</p>
                            <ul className="space-y-2 text-slate-600 font-medium">
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Inibe produção de melanina (pigmento escuro)</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Antioxidante poderoso (previne manchas novas)</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Cicatrizante natural (repara pele danificada)</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <p className="font-black text-slate-900 uppercase text-sm">DOLOMITA (Mineral amazônico):</p>
                            <ul className="space-y-2 text-slate-600 font-medium">
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Rico em cálcio e magnésio</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Regenera células da pele</li>
                                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Clareia naturalmente SEM queimar</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <p className="text-emerald-800 font-black text-xs uppercase tracking-widest mb-3">O QUE VOCÊ SENTE:</p>
                        <ul className="space-y-2 font-bold text-slate-700">
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 1ª semana: Pele mais uniforme</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 2 semanas: Tom começa a clarear</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 4 semanas: Mancha visivelmente mais clara</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-2xl">
                        <p className="text-sm text-slate-500 italic leading-relaxed">
                            <strong className="text-slate-900 not-italic uppercase block mb-1">Analogia:</strong>
                            É como desligar a TORNEIRA que jorra tinta preta. Não adianta limpar se continua jorrando. Mulateiro FECHA a torneira.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-100 aspect-square rounded-[4rem] flex items-center justify-center text-slate-400 font-black">INFOGRÁFICO ETAPA 1</div>
            </div>
        </section>

        {/* ETAPA 2 */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-slate-200 aspect-square rounded-[4rem] flex items-center justify-center text-slate-400 font-black order-2 lg:order-1">INFOGRÁFICO ETAPA 2</div>
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black text-emerald-800 uppercase tracking-tight">ETAPA 2: ACALMA INFLAMAÇÃO</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest">(Óleo de Melaleuca)</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-black text-slate-900 uppercase text-sm">ÓLEO DE MELALEUCA:</p>
                        <ul className="space-y-3 text-slate-600 font-medium">
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Antibacteriano e antifúngico</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Acalma irritação de atrito/depilação</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Previne foliculite (bolinhas escuras)</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <p className="text-emerald-800 font-black text-xs uppercase tracking-widest mb-3">O QUE VOCÊ SENTE:</p>
                        <ul className="space-y-2 font-bold text-slate-700">
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> Imediato: Pele para de coçar/arder</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 3 dias: Vermelhidão diminui</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 1 semana: Pele lisa (sem bolinhas)</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-2xl">
                        <p className="text-sm text-slate-500 italic leading-relaxed">
                            <strong className="text-slate-900 not-italic uppercase block mb-1">Analogia:</strong>
                            É como apagar um INCÊNDIO antes de pintar a parede. Se tá pegando fogo, não adianta pintar. Melaleuca APAGA o fogo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ETAPA 3 */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black text-emerald-800 uppercase tracking-tight">ETAPA 3: REMOVE CÉLULAS ESCURAS</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest">(Argila Branca)</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-black text-slate-900 uppercase text-sm">ARGILA BRANCA AMAZÔNICA:</p>
                        <ul className="space-y-3 text-slate-600 font-medium">
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Esfolia suavemente (sem arder)</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Absorve impurezas e células mortas</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Clareia progressivamente</li>
                            <li className="flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500" /> Controla oleosidade (axilas/virilha)</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                        <p className="text-emerald-800 font-black text-xs uppercase tracking-widest mb-3">O QUE VOCÊ SENTE:</p>
                        <ul className="space-y-2 font-bold text-slate-700">
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 1ª aplicação: Pele macia ao toque</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 1 semana: Textura lisa</li>
                            <li className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={16} /> 2 semanas: Tom mais claro visível</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-2xl">
                        <p className="text-sm text-slate-500 italic leading-relaxed">
                            <strong className="text-slate-900 not-italic uppercase block mb-1">Analogia:</strong>
                            É como LIXAR madeira antes de envernizar. Remove o escuro sem agredir. Argila faz isso naturalmente.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-100 aspect-square rounded-[4rem] flex items-center justify-center text-slate-400 font-black">INFOGRÁFICO ETAPA 3</div>
            </div>
        </section>

        {/* POR QUE AMAZOLÉ E OUTROS NÃO GRID */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">POR QUE AMAZOLÉ E OUTROS CLAREADORES NÃO?</h2>
                    <p className="text-emerald-700 font-bold uppercase tracking-widest">4 Ingredientes Naturais Que Fazem a Diferença</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Droplets, t: "MULATEIRO", d: "Bloqueia melanina na origem. Cicatriza e uniformiza tom.", feel: "Ton uniforme em 2 semanas" },
                        { icon: Layers, t: "DOLOMITA", d: "Regenera células da pele. Clareia SEM ácidos agressivos.", feel: "Mancha clareando progressivamente" },
                        { icon: Zap, t: "ÓLEO DE MELALEUCA", d: "Acalma inflamação e vermelhidão. Previne foliculite.", feel: "Pele lisa, sem bolinhas" },
                        { icon: Sparkles, t: "ARGILA BRANCA", d: "Esfolia suavemente. Remove células escuras.", feel: "Textura macia imediata" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-emerald-50 text-center space-y-4 group hover:border-emerald-500 transition-all">
                            <div className="p-4 bg-emerald-50 rounded-full w-fit mx-auto text-emerald-600 group-hover:scale-110 transition-transform"><item.icon size={24} /></div>
                            <h4 className="font-black text-slate-900 uppercase">{item.t}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                            <div className="pt-4 border-t border-slate-50">
                                <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">VOCÊ SENTE: {item.feel}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                    {[
                        { t: "100% Natural", d: "sem hidroquinona, sem ácidos" },
                        { t: "pH Balanceado", d: "não irrita pele sensível" },
                        { t: "Fórmula Patenteada", d: "exclusiva Amazolé" }
                    ].map((diff, i) => (
                        <div key={i} className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><Check size={40} /></div>
                            <p className="font-black uppercase text-sm tracking-widest">{diff.t}</p>
                            <p className="text-[10px] opacity-70 font-bold uppercase">{diff.d}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-10 rounded-[3rem] text-center border-4 border-emerald-500 shadow-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-slate-400">RESULTADO COMPROVADO:</p>
                    <p className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase mb-4">Clareamento visível em 4 semanas</p>
                    <p className="text-emerald-700 font-bold italic">Não é promessa. É botânica aplicada.</p>
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

                <div className="bg-emerald-950 text-white rounded-[4rem] p-10 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5"><Droplets size={200} /></div>
                    
                    <h3 className="text-xl font-black uppercase tracking-[0.3em] border-b border-white/10 pb-4 text-center">ROTINA DIÁRIA - 2X AO DIA</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { n: "1️⃣", t: "LIMPE A ÁREA", d: "Lave com sabonete neutro e seque bem (MUITO importante!).", time: "1 minuto" },
                            { n: "2️⃣", t: "APLIQUE O AMAZOLÉ", d: "Quantidade de 1 grão de ervilha. Massageie até absorver. NÃO enxágue.", time: "2 minutos" },
                            { n: "3️⃣", t: "AGUARDE SECAR", d: "Espere 3-5 minutos antes de vestir. Pode usar desodorante depois.", time: "3 minutos" }
                        ].map((step, i) => (
                            <div key={i} className="space-y-4 relative z-10 group">
                                <div className="h-14 w-14 bg-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform">{step.n.replace(/[^\d]/g, '')}</div>
                                <h4 className="font-black text-xl tracking-tight uppercase">{step.t}</h4>
                                <p className="text-emerald-100/70 text-sm font-medium leading-relaxed">{step.d}</p>
                                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                    <Clock size={12} /> {step.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10 text-center">
                        <p className="text-2xl font-black tracking-tighter">TOTAL: 6 minutos (2x ao dia)</p>
                    </div>
                </div>

                {/* QUANDO APLICAR */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
                        <h4 className="text-xl font-black uppercase text-emerald-800 flex items-center gap-2"><Zap /> MANHÃ:</h4>
                        <ul className="space-y-2 text-slate-600 font-medium">
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Após o banho</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Antes de se vestir</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Pode usar maquiagem depois</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
                        <h4 className="text-xl font-black uppercase text-emerald-800 flex items-center gap-2"><ShieldCheck /> NOITE:</h4>
                        <ul className="space-y-2 text-slate-600 font-medium">
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Antes de dormir</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Pele limpa e seca</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Deixa agir a noite toda</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* DICAS POTENCIALIZAR */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-4xl mx-auto space-y-12">
                <h3 className="text-2xl font-black text-center uppercase tracking-widest text-slate-400">DICAS PARA POTENCIALIZAR O RESULTADO:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { t: "USE PROTETOR SOLAR", d: "Se aplicar no rosto, SEMPRE use FPS 50+. Sem protetor = mancha volta." },
                        { t: "PELE BEM SECA", d: "Aplique SEMPRE em pele seca. Umidade dilui o produto." },
                        { t: "NÃO MISTURE PRODUTOS", d: "Use APENAS Amazolé na área. Outros cremes podem anular efeito." },
                        { t: "SEJA CONSISTENTE", d: "2x ao dia, TODO DIA. Pular dias = demora mais." }
                    ].map((tip, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm group">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all"><Sparkles size={20} /></div>
                            <div className="space-y-1">
                                <p className="font-black text-slate-900 uppercase text-xs tracking-widest">{tip.t}</p>
                                <p className="text-sm text-slate-500 font-medium leading-snug">{tip.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ÁREAS E RENDIMENTO */}
        <section className="py-24 px-6 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter text-center">ÁREAS QUE VOCÊ PODE TRATAR:</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Axilas escuras", "Virilhas manchadas", "Melasma facial", "Manchas de idade",
                        "Foliculite", "Cotovelos/Joelhos", "Pescoço manchado", "Entre coxas"
                    ].map((area, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-emerald-500 transition-all">
                            <Check className="text-emerald-500" size={18} strokeWidth={4} />
                            <span className="font-bold text-xs uppercase tracking-wide text-slate-700">{area}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald-950 text-white p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden max-w-4xl mx-auto group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><ShoppingBag size={120} /></div>
                    <p className="text-emerald-400 font-black uppercase text-xs tracking-[0.4em] mb-4">RECOMENDAÇÃO DE COMPRA:</p>
                    <p className="text-3xl font-black uppercase mb-6 tracking-tight">1 FRASCO = 1 ÁREA POR 30 DIAS</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 italic text-sm text-emerald-100/70">
                        <p>Tratar só axilas = 1 frasco</p>
                        <p>Tratar axilas + virilha = 2 frascos</p>
                        <p>Tratar rosto + axilas + virilha = 3 frascos</p>
                    </div>
                </div>
            </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter">LINHA DO TEMPO REAL</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">(O Que Acontece Semana a Semana)</p>
                </div>

                <div className="space-y-8 relative">
                    <div className="absolute left-4 top-4 bottom-4 w-1 bg-emerald-100 rounded-full"></div>
                    {[
                        { s: "SEMANA 1", d: ["Pele mais macia e uniforme", "Vermelhidão diminui", "Foliculite (bolinhas) melhora"] },
                        { s: "SEMANA 2", d: ["Tom começa a clarear (sutil)", "Textura lisa", "Inflamação some"] },
                        { s: "SEMANA 3-4", d: ["Clareamento VISÍVEL", "Mancha 30-40% mais clara", "Outras pessoas NOTAM"] },
                        { s: "SEMANA 5-8", d: ["Clareamento intensifica", "Mancha 50-70% mais clara", "Usa regata/biquíni com confiança"] },
                        { s: "MÊS 3+", d: ["Tom quase igualado", "Pele uniforme", "Manutenção 1x ao dia"] }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-10 items-start group">
                            <div className="h-8 w-8 rounded-full bg-white border-4 border-emerald-500 shrink-0 relative z-10 group-hover:scale-125 transition-transform shadow-md"></div>
                            <div className="space-y-3 pt-1">
                                <h4 className="font-black text-emerald-700 text-lg tracking-widest">{item.s}</h4>
                                <ul className="space-y-1">
                                    {item.d.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium">
                                            <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="py-24 px-6 bg-white border-b border-slate-100">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-slate-100 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border border-slate-200 flex items-center justify-center text-slate-400 font-black">
                    MOCKUP AMAZOLÉ 50G
                </div>
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">O QUE VOCÊ RECEBE:</h2>
                        <div className="space-y-1">
                            <p className="text-2xl font-black text-emerald-700 uppercase tracking-tight">🧴 AMAZOLÉ CLAREADOR</p>
                            <p className="text-slate-400 font-bold uppercase text-sm">50g (rende 30 dias em 1 área)</p>
                        </div>
                    </div>

                    <ul className="space-y-4">
                        {[
                            "Fórmula patenteada 100% natural",
                            "Mulateiro + Dolomita + Melaleuca + Argila",
                            "Textura leve, absorção rápida",
                            "Sem ácidos agressivos",
                            "Testado dermatologicamente"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full"><Check size={16} strokeWidth={4} /></div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4">
                        {["FRETE GRÁTIS", "ENVIO IMEDIATO", "SEGURO DE ENTREGA", "GARANTIA 90 DIAS"].map((badge, i) => (
                            <div key={i} className="bg-emerald-600 text-white p-4 rounded-xl text-center font-black uppercase text-[10px] tracking-widest shadow-md">
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* DEPOIMENTOS CLIENTES */}
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
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
                        <div key={i} className="bg-white p-8 rounded-[3rem] border border-emerald-50 shadow-xl relative hover:-translate-y-2 transition-all group">
                            <div className="absolute -top-4 -right-4 bg-white/90 p-2 rounded-full text-emerald-500 shadow-md group-hover:scale-110 transition-transform"><Verified size={20} /></div>
                            <div className="flex gap-1 text-orange-400 mb-6">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                            </div>
                            <p className="italic text-slate-600 font-medium leading-relaxed mb-8">"{test.t}"</p>
                            <div className="pt-6 border-t border-slate-50">
                                <p className="font-black text-slate-900 text-xs uppercase tracking-widest">— {test.n}, {test.c}</p>
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
                        { q: "❓ Tenho pele sensível/alérgica. Posso usar?", a: "PODE. Fórmula natural, pH balanceado e testado dermatologicamente. Recomendamos teste de alergia atrás da orelha antes do uso total." },
                        { q: "❓ Quanto tempo para ver resultado?", a: "Semana 1-2: Pele uniforme. Semana 3-4: Clareamento visível (30-40%). Semana 5-8: Clareamento intenso (50-70%). Mês 3+: Tom quase igualado." },
                        { q: "❓ Preciso usar para sempre?", a: "FASE INTENSIVA (2-3 meses): 2x ao dia. FASE MANUTENÇÃO: 1x ao dia ou 3-4x por semana. Mancha NÃO volta se usar protetor e evitar atrito." },
                        { q: "❓ Funciona em pele negra?", a: "SIM. Funciona em TODOS os tons de pele. Em peles negras, o clareamento é progressivo e UNIFORMIZA o tom para sua pele saudável." },
                        { q: "❓ Posso usar no rosto todo dia?", a: "PODE. Mas SEMPRE use protetor FPS 50+ depois. Sol sem protetor = mancha volta PIOR." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-emerald-100 rounded-2xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line leading-relaxed">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}

                    <h3 className="text-lg font-black text-emerald-800 uppercase tracking-widest px-4 pt-8">💳 PREÇO E PAGAMENTO</h3>
                    {[
                        { q: "❓ Por que R$ 137?", a: "Ingredientes importados da Amazônia com extração artesanal e fórmula patenteada. Valor justo por um produto que FUNCIONA de verdade." },
                        { q: "❓ Posso parcelar?", a: "SIM. Até 12x de R$ 13,90 sem juros. Ou no PIX com desconto aplicado." },
                        { q: "❓ Quanto comprar?", a: "RECOMENDAMOS: 1 ÁREA (axila OU virilha OU rosto): 2 frascos. 2 ÁREAS: 3 frascos. 3+ ÁREAS: 4-6 frascos." },
                        { q: "❓ E se não funcionar?", a: "GARANTIA INCONDICIONAL DE 90 DIAS. Use por 3 meses inteiros. Não clareou? Manda e-mail e devolvemos 100% sem perguntas." }
                    ].map((item, i) => (
                        <AccordionItem key={i+20} value={`faq-${i+20}`} className="bg-white border border-emerald-100 rounded-2xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line leading-relaxed">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}

                    <h3 className="text-lg font-black text-emerald-800 uppercase tracking-widest px-4 pt-8">📦 ENTREGA E USO</h3>
                    {[
                        { q: "❓ Frete é grátis?", a: "SIM. Para TODO o Brasil. Rastreio + Seguro inclusos." },
                        { q: "❓ Quanto tempo dura 1 frasco?", a: "30 DIAS tratando 1 ÁREA média. Áreas pequenas como axila podem durar 45 dias." },
                        { q: "❓ Posso usar durante a gravidez?", a: "Produto natural, uso externo = Geralmente seguro. MAS: Sempre consulte seu obstetra antes." },
                        { q: "❓ Posso misturar com outros cremes?", a: "NÃO RECOMENDAMOS. Use APENAS Amazolé na área. Protetor e maquiagem podem ser usados DEPOIS de absorvido." },
                        { q: "❓ Preciso depilar antes de usar?", a: "NÃO precisa. Mas se depilar, espere 24h antes de aplicar pois a pele irritada pode arder." },
                        { q: "❓ Ainda tenho dúvidas. Como falar com vocês?", a: "📧 contato@amazole.com.br - Resposta em até 24h úteis." }
                    ].map((item, i) => (
                        <AccordionItem key={i+40} value={`faq-${i+40}`} className="bg-white border border-emerald-100 rounded-2xl px-6 shadow-sm">
                            <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line leading-relaxed">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-white border-t border-slate-50 text-center">
            <div className="max-w-4xl mx-auto bg-emerald-50 border-[6px] border-dashed border-emerald-500/30 p-12 md:p-24 rounded-[4rem]">
                <ShieldCheck className="mx-auto h-24 w-24 text-emerald-700 mb-10" />
                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">GARANTIA SATISFAÇÃO OU DINHEIRO DE VOLTA</h2>
                <p className="text-xl text-slate-600 italic mb-10 max-w-2xl mx-auto">
                    Use o Amazolé por 90 dias inteiros. Se não ver clareamento visível, devolvemos 100% do seu dinheiro. Sem perguntas. Sem enrolação. Porque temos certeza que funciona.
                </p>
                <div className="inline-block px-10 py-3 bg-slate-900 text-emerald-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">90 DIAS DE GARANTIA</div>
            </div>
        </section>

        {/* OFERTA FINAL REDESENHADA */}
        <section id="pricing" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                        SUA ÚLTIMA CHANCE DE USAR <br /> <span className="text-emerald-500 italic underline decoration-emerald-500/30">QUALQUER ROUPA SEM MEDO</span>
                    </h2>
                    <p className="text-emerald-400 font-black text-xl animate-pulse">⏰ OFERTA ENCERRA EM: 00:14:37</p>
                </div>
                
                <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-2xl relative border-[8px] border-white">
                    <div className="flex flex-col items-center space-y-10">
                        <div className="space-y-4 w-full text-left">
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-center text-sm mb-6">Escolha seu tratamento:</p>
                            
                            <div className="space-y-6">
                                {AMAZOLÉ_KITS.map((kit) => (
                                    <div 
                                        key={kit.id}
                                        onClick={() => setSelectedKit(kit)}
                                        className={cn(
                                            "p-6 md:p-10 rounded-[2.5rem] border-2 cursor-pointer transition-all flex flex-col md:flex-row items-center justify-between gap-6 relative group",
                                            selectedKit.id === kit.id ? "border-emerald-500 bg-emerald-50 shadow-xl" : "border-slate-100 hover:border-slate-200"
                                        )}
                                    >
                                        {kit.badges?.[0] && (
                                            <span className={cn(
                                                "absolute -top-3 right-8 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg",
                                                kit.badges[0] === 'Mais Vendido' ? "bg-pink-500" : "bg-emerald-600"
                                            )}>
                                                {kit.badges[0]}
                                            </span>
                                        )}
                                        
                                        <div className="flex items-center gap-6">
                                            <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center font-black text-xl border-2 transition-colors", selectedKit.id === kit.id ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-100 bg-white text-slate-300")}>
                                                {kit.units}
                                            </div>
                                            <div>
                                                <p className="font-black text-2xl text-slate-900 uppercase">{kit.units} {kit.units === 1 ? 'Frasco' : 'Frascos'}</p>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tratamento {kit.units * 30} Dias</p>
                                            </div>
                                        </div>

                                        <div className="text-center md:text-right">
                                            <span className="text-slate-300 line-through font-bold">{kit.originalPrice}</span>
                                            <div className="flex items-baseline justify-center md:justify-end gap-2">
                                                <span className="text-slate-900 text-4xl font-black">R$ {kit.price}</span>
                                            </div>
                                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                                                PIX: R$ {parseInt(kit.price) - 10} | Cartão: R$ {kit.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link href={selectedKit.checkoutUrl} className="w-full max-w-xl group/btn" target="_blank">
                            <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-xl shadow-green-100 transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-1">
                                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <ShoppingBag size={28} className="group-hover/btn:scale-110 transition-transform" />
                                    Aproveitar Oferta
                                </span>
                                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">PAGAMENTO 100% SEGURO | FRETE GRÁTIS BRASIL</span>
                            </Button>
                        </Link>

                        <div className="space-y-6">
                            <div className="flex items-center justify-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest animate-pulse">
                                <AlertTriangle size={18} /> RESTAM APENAS 47 KITS DISPONÍVEIS COM ESTE DESCONTO
                            </div>
                            
                            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 max-w-lg mx-auto">
                                <p className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Você tem 2 escolhas:</p>
                                <div className="text-left space-y-3">
                                    <p className="text-sm font-bold text-slate-500">1️⃣ FECHAR ESTA PÁGINA: Continuar escondendo axilas/virilhas, gastar R$ 800+ em laser e sentir vergonha.</p>
                                    <p className="text-sm font-black text-emerald-700">2️⃣ CLICAR AGORA: Kit chega em 3-7 dias e em 4 semanas você tem clareamento visível com confiança.</p>
                                </div>
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
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-emerald-100">
                <div className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Avisos e Isenções de Responsabilidade</h3>
                    <div className="space-y-4 text-[10px] text-slate-500 leading-relaxed text-justify">
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Isenção de Responsabilidade</p>
                            <p>Este produto tem caráter cosmético. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um dermatologista antes de iniciar qualquer tratamento para manchas de pele.</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Aviso de Idade</p>
                            <p>Conteúdo destinado a maiores de 18 anos.</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Uso Responsável</p>
                            <p>Produto de uso externo. Evite contato com olhos. Faça teste de alergia antes do uso. Pessoas com condições dermatológicas pré-existentes, gestantes ou lactantes devem consultar médico antes do uso.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center space-y-6">
                    <span className="text-3xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
                    <div className="text-center md:text-right space-y-1">
                        <p className="text-xs font-black text-slate-800 uppercase tracking-widest">E-Business Rio Verde</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Aparecida de Goiânia - GO | CNPJ: XX.XXX.XXX/0001-XX</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-10 opacity-50" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <nav className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <button className="hover:text-emerald-600 transition-colors">Termos e Condições</button>
                    <button className="hover:text-emerald-600 transition-colors">Política de Privacidade</button>
                    <button className="hover:text-emerald-600 transition-colors">Política de Reembolso</button>
                </nav>

                <div className="space-y-2 text-center md:text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Precisa de Ajuda?</p>
                    <p className="text-xs font-bold text-slate-900">📧 contato@amazole.com.br</p>
                </div>
            </div>

            <div className="pt-12 mt-12 border-t border-slate-100 flex flex-col items-center gap-4">
                <p className="text-[9px] text-slate-400 leading-relaxed uppercase tracking-[0.1em] text-center italic max-w-2xl">
                    <strong>IMPORTANTE:</strong> Os resultados podem variar de pessoa para pessoa.
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2025 Amazolé - Clareador Natural da Amazônia</p>
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