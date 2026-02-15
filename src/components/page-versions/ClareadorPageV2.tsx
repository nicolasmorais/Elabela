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
  Scissors,
  CheckCircle2
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

// CONFIGURAÇÃO DOS KITS
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
      <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 antialiased min-h-screen">
        
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
            </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
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

                    {/* SELETOR DE KITS MOVIDO PARA CÁ */}
                    <div className="space-y-4">
                        <KitSelector 
                            options={AMAZOLÉ_KITS}
                            selectedId={selectedKit.id}
                            onSelect={setSelectedKit}
                        />
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

        <div className="border-t border-slate-100 bg-white">
            
            <section className="py-12 bg-white border-b border-slate-50 opacity-30 grayscale flex justify-center gap-16 items-center">
                <span className="text-2xl font-black">G1</span><span className="text-2xl font-black italic">R7</span><span className="text-2xl font-black">GLOBO</span><span className="text-2xl font-black underline">SBT</span>
            </section>

            <section className="py-24 px-6 bg-white border-b border-orange-100">
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
                    </div>
                    <div className="bg-slate-100 aspect-square rounded-[4rem] flex items-center justify-center text-slate-400 font-black">INFOGRÁFICO ETAPA 1</div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[#FDF8F3]">
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
                            { q: "❓ Arde? Descasca a pele?", a: "NÃO. Fórmula 100% natural, sem ácidos agressivos." }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-6 whitespace-pre-line leading-relaxed">{item.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

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
                                
                                <KitSelector 
                                    options={AMAZOLÉ_KITS}
                                    selectedId={selectedKit.id}
                                    onSelect={setSelectedKit}
                                />
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
                                <div className="flex justify-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                                    <ShieldCheck size={28} /> <Lock size={28} /> <CreditCard size={28} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <span className="text-3xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-4">© 2025 Amazolé - Clareador Natural da Amazônia</p>
              </div>
            </footer>

        </div>

        <MobileStickyBar installmentText="12x de 13,90" buttonText="Comprar agora" checkoutUrl={selectedKit.checkoutUrl} />
      </div>
    </>
  );
}