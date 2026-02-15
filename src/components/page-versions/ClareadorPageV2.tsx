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
  Sun,
  Moon,
  Lightbulb,
  Beaker,
  Package,
  Truck,
  ShieldAlert,
  History,
  Target,
  MinusCircle,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MobileStickyBar } from './MobileStickyBar';

// CONFIGURAÇÃO DE PREÇOS ATUALIZADA
const AMAZOLÉ_KITS = [
  {
    id: '1-un',
    name: '1 FRASCO',
    treatment: 'Tratamento 30 Dias (1 área)',
    oldPrice: 'R$ 189,99',
    cardPrice: '137',
    pixPrice: '127',
    unitPrice: '127,00',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S',
    popular: false,
    bestResult: false
  },
  {
    id: '2-un',
    name: '2 FRASCOS',
    treatment: 'Tratamento 60 Dias (1-2 áreas)',
    oldPrice: 'R$ 379,98',
    cardPrice: '197',
    pixPrice: '187',
    unitPrice: '93,50',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S',
    popular: true,
    bestResult: false
  },
  {
    id: '3-un',
    name: '3 FRASCOS',
    treatment: 'Tratamento 90 Dias (2-3 áreas)',
    oldPrice: 'R$ 569,97',
    cardPrice: '247',
    pixPrice: '237',
    unitPrice: '79,00',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S',
    popular: false,
    bestResult: true
  }
];

const TESTIMONIALS = [
    { text: "Usei por 1 mês nas axilas. Clareou MUITO! Já consigo usar regata sem vergonha. O cheiro é suave e não arde nada.", author: "Patrícia L., Curitiba" },
    { text: "Meu melasma diminuiu bastante em 6 semanas. Uso menos base agora. Produto natural, não irrita.", author: "Fernanda S., Belo Horizonte" },
    { text: "Virilha estava horrível. Com 3 semanas já vi diferença. Com 2 meses clareou uns 60%. Vale cada centavo!", author: "Juliana M., Salvador" },
    { text: "Foliculite nas coxas sumiu em 10 dias. O clareamento veio depois. Pele lisinha agora!", author: "Renata P., Recife" },
    { text: "Manchas de idade nas mãos clarearam bem. Uso há 2 meses. Minhas amigas perguntam o que usei!", author: "Maria C., Porto Alegre" },
    { text: "Cotovelos escuros desde criança. Esse foi o ÚNICO que clareou de verdade. 8 semanas = resultado incrível.", author: "Beatriz A., Rio de Janeiro" }
];

export function ClareadorPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860); // 10h 31m
  const [selectedKit, setSelectedKit] = useState(AMAZOLÉ_KITS[1]); // Default no Mais Vendido

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
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageTracker contentId="clareador-v2" />
      <div className="bg-white text-brand-text font-sans selection:bg-brand-blue/20 antialiased min-h-screen">
        
        {/* NAV / LOGO */}
        <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
            </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative pt-10 pb-20 px-6 bg-[#FDF8F3] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-blue/10 rounded-[4rem] blur-[100px] opacity-30"></div>
                        <div className="relative aspect-square rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl border-8 border-white">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-center p-8">
                                [IMAGEM PRINCIPAL: Mulher sorrindo de biquíni na praia]
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-pink text-white p-6 rounded-3xl shadow-2xl z-20 font-black text-xs rotate-6 border-4 border-white flex flex-col items-center">
                            <ShieldCheck size={32} />
                            <span className="mt-1 text-center">ALÍVIO <br /> GARANTIDO</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-blue/20 rounded-xl shadow-sm text-[11px] font-bold text-brand-blue-dark">
                            <div className="bg-brand-pink p-1 rounded-md text-white"><Award size={14} /></div>
                            Eleito o melhor Clareador Natural do Brasil
                        </div>
                        
                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-brand-blue-dark uppercase leading-[0.9]">
                                Amazolé - Clareador de <span className="text-brand-pink">Manchas 100% Natural</span>
                            </h1>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                                <div className="flex gap-0.5 text-brand-pink">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span>4.9 | 1.847 avaliações 5 estrelas</span>
                            </div>
                            <p className="text-emerald-600 font-bold text-sm">Mais de 32.400 mulheres usando no mês passado</p>
                        </div>

                        <div className="space-y-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-300 line-through text-lg font-bold">R$ 189,99</span>
                                <span className="bg-brand-pink text-white px-2 py-0.5 rounded-full text-[10px] font-black">28% OFF</span>
                            </div>
                            <div className="flex items-baseline gap-2 leading-none">
                                <span className="text-5xl font-black text-brand-blue-dark">R$ 137,00</span>
                                <span className="text-emerald-600 font-black text-xl uppercase tracking-tighter">no pix</span>
                            </div>
                            <p className="text-slate-500 font-bold text-sm">ou 12x de R$ 13,90</p>
                        </div>

                        <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-5 rounded-r-2xl space-y-2">
                            <p className="text-slate-800 font-black text-xl italic leading-tight">
                                "Escondi Minhas Axilas Por 3 Anos... Hoje Uso Regata Sem Vergonha."
                            </p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Ass: Carolina M., São Paulo</p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <Button 
                                onClick={scrollToPricing}
                                className="w-full h-20 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Comprar agora
                            </Button>
                            
                            <div className="flex items-center justify-between px-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-emerald-500 text-white p-2 rounded-lg"><Zap size={18} fill="currentColor" /></div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-900 uppercase leading-none mb-1">ENTREGA FULL</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase">Envio imediato em até 24h</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Encerra em:</p>
                                    <p className="text-sm font-mono font-black text-brand-pink">{formatTime(timeLeft)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* LOGOS MÍDIA */}
        <section className="py-12 border-y border-slate-100 bg-white">
            <div className="max-w-6xl mx-auto px-6 opacity-30 grayscale flex flex-wrap justify-center items-center gap-10 md:gap-20">
                <span className="text-2xl font-black">G1</span>
                <span className="text-2xl font-black italic">R7</span>
                <span className="text-2xl font-black">VIVA BEM</span>
                <span className="text-2xl font-black underline">DRAUZIO</span>
            </div>
        </section>

        {/* GALERIA RESULTADOS REAIS */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase">Resultados Reais, Mulheres Reais</h2>
                    <div className="h-1.5 w-32 bg-brand-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-slate-100 rounded-[2.5rem] border border-slate-200 flex items-center justify-center text-center p-6 text-slate-400 font-bold text-xs uppercase italic">
                            [FOTO {i}: ANTES/DEPOIS]
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* SOLUÇÃO E PÚBLICO */}
        <section className="py-24 px-6 bg-[#FDF8F3] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-brand-blue-dark font-black text-xs uppercase tracking-[0.4em]">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tight leading-tight">
                            Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-brand-pink">100% Natural da Amazônia Por R$ 137,00.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "💔 Esconde axilas escuras e não usa regata há anos",
                                "💔 Evita biquíni ou calcinha porque a virilha tá manchada",
                                "💔 Melasma te faz usar base TODOS os dias",
                                "💔 Já tentou mil cremes que arderam e não clarearam",
                                "💔 Tem vergonha de tirar a roupa na frente do parceiro"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] border-8 border-white shadow-2xl flex items-center justify-center p-8 text-slate-400 font-bold text-center italic">
                            [IMAGEM: Mulher confiante de regata]
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* COMO FUNCIONA (CIÊNCIA) */}
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">POR QUE AMAZOLÉ CLAREIA EM SEMANAS?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "1️⃣", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área" },
                        { n: "2️⃣", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação, suor mantém a pele irritada" },
                        { n: "3️⃣", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai" }
                    ].map((item, i) => (
                        <div key={i} className="bg-brand-gray-light p-8 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-4">
                            <span className="text-4xl">{item.n}</span>
                            <p className="font-black text-brand-blue-dark text-sm uppercase tracking-widest">{item.t}</p>
                            <p className="text-slate-500 font-medium text-sm">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ETAPAS DO TRATAMENTO */}
        <section className="py-12 space-y-24">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-slate-50 pt-24">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none tracking-tighter">
                        ETAPA 1: BLOQUEIA MELANINA <span className="text-brand-pink italic">NA RAIZ</span>
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed">→ Inibe produção de melanina (pigmento escuro)<br />→ Antioxidante poderoso<br />→ Cicatrizante natural</p>
                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600 text-lg">
                        <strong>Analogia:</strong> É como desligar a TORNEIRA que jorra tinta preta. Mulateiro FECHA a torneira.
                    </div>
                </div>
                <div className="bg-slate-50 rounded-[4rem] aspect-square flex items-center justify-center p-12 text-slate-300 font-black italic border border-slate-100">
                    [IMAGEM: Infográfico Torneira]
                </div>
            </div>
        </section>

        {/* POR QUE AMAZOLÉ? */}
        <section className="py-32 px-6 bg-brand-blue-dark text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-20 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">POR QUE AMAZOLÉ E OUTROS NÃO?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { i: Leaf, t: "🌿 MULATEIRO", d: "Bloqueia melanina na origem." },
                        { i: CircleIcon, t: "⚪ DOLOMITA", d: "Regenera células da pele." },
                        { i: Droplets, t: "🍃 ÓLEO MELALEUCA", d: "Acalma inflamação." },
                        { i: Layers, t: "🏔️ ARGILA BRANCA", d: "Esfolia suavemente." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center">
                            <item.i size={40} className="text-brand-blue mb-4" />
                            <p className="font-black text-lg uppercase mb-2">{item.t}</p>
                            <p className="text-white/60 text-sm font-medium">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* COMO USAR */}
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">COMO USAR O AMAZOLÉ</h2>
                <div className="bg-brand-gray-light p-10 md:p-16 rounded-[4rem] border border-slate-100 space-y-12 text-left">
                    {[
                        { n: "1", t: "LIMPE A ÁREA", d: "Lave com sabonete neutro e seque bem." },
                        { n: "2", t: "APLIQUE O AMAZOLÉ", d: "Espalhe na mancha em movimentos circulares. NÃO enxágue." },
                        { n: "3", t: "AGUARDE SECAR", d: "Espere 3-5 minutos antes de vestir." }
                    ].map((s, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="h-14 w-14 shrink-0 bg-white border-2 border-brand-blue/20 rounded-2xl flex items-center justify-center font-black text-brand-blue-dark text-2xl">{s.n}</div>
                            <div className="space-y-2">
                                <p className="font-black text-brand-blue-dark text-lg uppercase">{s.t}</p>
                                <p className="text-slate-600 font-medium">{s.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="py-24 px-6 bg-brand-gray-light border-y border-slate-100">
            <div className="max-w-4xl mx-auto space-y-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">LINHA DO TEMPO REAL</h2>
                <div className="space-y-6">
                    {[
                        { w: "SEMANA 1", t: "O Despertar", d: "Pele mais macia e uniforme." },
                        { w: "SEMANA 3-4", t: "A Mudança Visível", d: "Clareamento VISÍVEL (30-40%)." },
                        { w: "SEMANA 5-8", t: "A Transformação", d: "Mancha 50-70% mais clara." }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-center bg-white p-8 rounded-[3rem] border border-slate-100 text-left">
                            <div className="w-48 shrink-0">
                                <p className="text-brand-pink font-black text-xs uppercase mb-1">{step.w}</p>
                                <p className="text-xl font-black text-brand-blue-dark uppercase">{step.t}</p>
                            </div>
                            <p className="text-slate-500 font-bold">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TESTEMUNHOS */}
        <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto space-y-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase">MILHARES JÁ ESTÃO CLAREANDO ✨</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {TESTIMONIALS.map((test, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col justify-between">
                            <p className="text-slate-600 font-medium italic text-lg leading-relaxed mb-8">"{test.text}"</p>
                            <p className="font-black text-brand-blue-dark text-xs uppercase">{test.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* GARANTIA 90 DIAS */}
        <section className="py-24 px-6 bg-white border-t border-slate-50">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <div className="bg-[#FDF8F3] border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                    <ShieldCheck size={100} className="mx-auto text-brand-blue-dark mb-10" />
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase mb-8">GARANTIA 90 DIAS</h2>
                    <p className="text-2xl text-slate-600 font-medium italic mb-10">
                        Se não ver clareamento visível em 90 dias, devolvemos 100% do seu dinheiro.
                    </p>
                </div>
            </div>
        </section>

        {/* OFERTA FINAL */}
        <section id="pricing" className="py-32 px-6 bg-brand-blue-dark text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                    SUA ÚLTIMA CHANCE DE USAR <br /> QUALQUER ROUPA SEM MEDO
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {AMAZOLÉ_KITS.map((kit, i) => (
                        <div key={i} className={cn(
                            "bg-white text-slate-900 rounded-[3rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between transition-all border-4",
                            kit.popular ? "border-brand-pink scale-105 z-10 relative" : "border-white"
                        )}>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black uppercase">{kit.name}</h3>
                                <div className="py-8 bg-brand-gray-light rounded-[2.5rem]">
                                    <p className="text-sm font-bold text-slate-400 line-through">De: {kit.oldPrice}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 text-brand-blue-dark">Cartão: R$ {kit.cardPrice}</p>
                                    <div className="flex items-baseline justify-center leading-none text-brand-blue-dark">
                                        <span className="text-2xl font-black mr-1">R$</span>
                                        <span className="text-7xl font-black tracking-tighter">{kit.pixPrice}</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-emerald-600 mt-2">PIX com Desconto</p>
                                </div>
                            </div>
                            <Link href={kit.checkoutUrl} target="_blank" className="mt-8">
                                <Button className={cn(
                                    "w-full h-16 rounded-2xl font-black text-sm uppercase tracking-widest",
                                    kit.popular ? "bg-brand-pink hover:bg-brand-pink-dark text-white" : "bg-brand-blue-dark hover:bg-brand-blue-dark/90 text-white"
                                )}>
                                    Aproveitar Oferta
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* DECISÃO FINAL */}
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-12 text-center">
                <h2 className="text-3xl font-black uppercase tracking-widest text-brand-blue">DECISÃO AGORA:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-gray-light border border-slate-100 p-10 rounded-[3rem] text-left opacity-60">
                        <p className="text-2xl font-black text-slate-400 uppercase mb-6">1️⃣ FECHAR PÁGINA</p>
                        <p className="text-slate-500 font-bold">Continuar escondendo as manchas e gastando com cremes inúteis.</p>
                    </div>
                    <div className="bg-emerald-500/10 border-4 border-emerald-500 p-10 rounded-[3rem] text-left shadow-2xl">
                        <p className="text-2xl font-black text-emerald-600 uppercase mb-6">2️⃣ CLICAR AGORA</p>
                        <p className="text-emerald-700 font-bold">Clareamento real em 4 semanas e 90 dias de garantia total.</p>
                    </div>
                </div>
                <Link href={selectedKit.checkoutUrl} target="_blank" className="block pt-10">
                    <Button className="w-full max-w-2xl h-24 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-black text-2xl md:text-3xl uppercase animate-pulse">
                        🔥 CLAREAR MANCHAS POR R$ {selectedKit.pixPrice} (PIX) 🔥
                    </Button>
                </Link>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 bg-brand-gray-light text-brand-text">
            <div className="max-w-6xl mx-auto px-6 space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-slate-200 pb-16">
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue-dark">Avisos e Isenções</h3>
                        <div className="space-y-4 text-xs text-slate-500 text-justify">
                            <p>Este produto tem caráter cosmético. Não oferece diagnóstico ou cura. Resultados variam de pessoa para pessoa. Consulte um dermatologista.</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <span className="text-4xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">
                            <p>E-Business Rio Verde | Aparecida de Goiânia - GO</p>
                            <p>CNPJ: 60.357.932/0001-18</p>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-10 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase text-brand-blue">contato@amazole.com.br</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase mt-4">© 2025 Amazolé - Clareador Natural da Amazônia</p>
                </div>
            </div>
        </footer>

        {/* STICKY BAR MOBILE */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
            <Link href={selectedKit.checkoutUrl} className="block" target="_blank">
                <Button className="w-full h-16 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-2xl shadow-xl flex items-center justify-between px-5 font-black uppercase">
                    <div className="flex flex-col items-start leading-tight border-r border-white/20 pr-4">
                        <span className="text-[10px] opacity-70">Kit: R$ {selectedKit.cardPrice}</span>
                        <span className="text-lg">PIX: R$ {selectedKit.pixPrice}</span>
                    </div>
                    <span className="flex-1 text-center text-xl italic tracking-tighter">Comprar agora <ArrowRight className="inline ml-1" size={20} /></span>
                </Button>
            </Link>
        </div>

      </div>
    </>
  );
}

const CircleIcon = ({ size, className }: { size: number, className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>
);