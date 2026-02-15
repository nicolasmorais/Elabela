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
  AlertCircle,
  Circle
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

// CONFIGURAÇÃO DOS KITS (VALORES EXATOS DO SEU TEXTO)
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
    bestResult: false,
    savings: ''
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
    bestResult: false,
    savings: 'R$ 182'
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
    bestResult: true,
    savings: 'R$ 322'
  }
];

export function ClareadorPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860); // 10h 31m inicial
  const [selectedKit, setSelectedKit] = useState(AMAZOLÉ_KITS[1]); // Default no mais vendido

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
      <PageTracker contentId="amazole-completo" />
      <div className="bg-white text-brand-text font-sans selection:bg-brand-blue/20 antialiased min-h-screen">
        
        {/* NAV / LOGO */}
        <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
            </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative pt-10 pb-20 px-6 bg-[#FDF8F3] overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* ESQUERDA: IMAGEM PRINCIPAL */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-blue/10 rounded-[4rem] blur-[100px] opacity-30"></div>
                        <div className="relative aspect-square rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl border-8 border-white flex flex-col items-center justify-center p-8 text-slate-400">
                            <span className="font-black text-center uppercase text-sm mb-2">Espaço para Imagem:</span>
                            <span className="text-xs font-bold text-center italic">Mulher sorrindo de biquíni na praia</span>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-pink text-white p-6 rounded-3xl shadow-2xl z-20 font-black text-xs rotate-6 border-4 border-white flex flex-col items-center">
                            <ShieldCheck size={32} />
                            <span className="mt-1 text-center">ALÍVIO <br /> GARANTIDO</span>
                        </div>
                    </div>

                    {/* DIREITA: COPY E PREÇO */}
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
                                        <p className="text-[10px] font-black text-slate-900 uppercase leading-none mb-1">ENTREGA FULL — Envio imediato em até 24h</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase">Comprando dentro das próximas <span className="text-brand-pink font-black">{formatTime(timeLeft)}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* LOGOS MÍDIA */}
        <section className="py-12 border-b border-slate-100 bg-white">
            <div className="max-w-6xl mx-auto px-6 opacity-30 grayscale flex flex-wrap justify-center items-center gap-10 md:gap-20">
                <span className="text-2xl font-black">G1</span>
                <span className="text-2xl font-black italic">R7</span>
                <span className="text-2xl font-black">VIVA BEM</span>
                <span className="text-2xl font-black underline">DRAUZIO</span>
            </div>
        </section>

        {/* GALERIA RESULTADOS REAIS */}
        <section className="py-24 px-6 border-b border-slate-50">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase">Resultados Reais, Mulheres Reais</h2>
                    <div className="h-1.5 w-32 bg-brand-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-slate-100 rounded-[2.5rem] border border-slate-200 flex flex-col items-center justify-center text-center p-6 text-slate-400">
                             <span className="text-[10px] font-black uppercase tracking-widest mb-2">[FOTO {i}: ANTES/DEPOIS]</span>
                             <span className="text-[9px] font-bold italic">Axilas, virilhas ou rosto</span>
                        </div>
                    ))}
                </div>
                
                <div className="text-center">
                    <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
                </div>
            </div>
        </section>

        {/* SOLUÇÃO E PÚBLICO */}
        <section className="py-24 px-6 bg-[#FDF8F3] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-brand-blue-dark font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tight leading-tight">
                            Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-brand-pink">100% Natural da Amazônia Por R$ 137,00.</span>
                        </h2>

                        <div className="space-y-6">
                            <h4 className="text-xl font-black uppercase text-slate-900 border-b-2 border-brand-blue/20 inline-block pb-1">PARA VOCÊ QUE:</h4>
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
                            
                            <div className="pt-6 space-y-4">
                                <p className="text-2xl font-black text-slate-900 tracking-tight leading-tight">Porque você merece usar QUALQUER roupa sem medo.</p>
                                <p className="text-brand-pink text-2xl font-black italic underline decoration-brand-pink/30">Sem precisar escolher entre: Clarear as manchas OU irritar a pele.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                        <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] border-8 border-white shadow-2xl flex flex-col items-center justify-center p-12 text-slate-400">
                             <span className="font-black text-[10px] uppercase tracking-widest mb-2">[IMAGEM: Mulher confiante de regata]</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* COMO FUNCIONA (CIÊNCIA) */}
        <section className="py-24 px-6 border-b border-slate-50">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">POR QUE AMAZOLÉ CLAREIA EM SEMANAS?</h2>
                    <p className="text-brand-pink font-black text-sm uppercase tracking-[0.3em]">FÓRMULA PATENTEADA DA AMAZÔNIA (Sem Ácidos Que Ardem, Descascam ou Mancham Mais)</p>
                </div>

                <div className="space-y-12">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl"><Microscope size={32} /></div>
                        <h3 className="text-2xl font-black uppercase tracking-widest">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest">Sua mancha escura existe por 3 MOTIVOS:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: "1️⃣", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área" },
                            { n: "2️⃣", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação, suor mantém a pele irritada" },
                            { n: "3️⃣", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai" }
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-gray-light p-8 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all">
                                <span className="text-4xl">{item.n}</span>
                                <p className="font-black text-brand-blue-dark text-sm uppercase tracking-widest">{item.t}</p>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-red-600"><Ban size={150} /></div>
                        <h3 className="text-2xl font-black text-red-600 uppercase tracking-tighter">O PERIGO DOS ÁCIDOS:</h3>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed relative z-10">
                            Produtos comuns usam ÁCIDOS para "queimar" a mancha. <br />
                            <strong>Resultado:</strong> Arde, descasca, irrita, e volta <span className="text-red-600 underline font-black">PIOR.</span>
                        </p>
                        <p className="text-2xl font-black text-brand-blue-dark uppercase tracking-tight relative z-10">Amazolé é TOTALMENTE DIFERENTE:</p>
                    </div>
                </div>
            </div>
        </section>

        {/* ETAPAS DO TRATAMENTO DETALHADAS */}
        <section className="py-12 space-y-24">
            
            {/* ETAPA 1 */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-slate-50 pt-24">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 1</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none tracking-tighter">
                            BLOQUEIA MELANINA <span className="text-brand-pink italic">NA RAIZ</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-widest">(Mulateiro + Dolomita)</p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="font-black text-brand-blue-dark uppercase text-sm mb-1 flex items-center gap-2"><Leaf className="text-emerald-500" size={18} /> MULATEIRO (Planta da Amazônia):</p>
                            <p className="text-slate-500 font-medium leading-relaxed pl-7">→ Inibe produção de melanina (pigmento escuro)<br />→ Antioxidante poderoso (previne manchas novas)<br />→ Cicatrizante natural (repara pele danificada)</p>
                        </div>
                        <div>
                            <p className="font-black text-brand-blue-dark uppercase text-sm mb-1 flex items-center gap-2"><Beaker className="text-blue-500" size={18} /> DOLOMITA (Mineral amazônico):</p>
                            <p className="text-slate-500 font-medium leading-relaxed pl-7">→ Rico em cálcio e magnésio<br />→ Regenera células da pele<br />→ Clareia naturalmente SEM queimar</p>
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em]">O QUE VOCÊ SENTE:</p>
                        <div className="space-y-2">
                            {["✅ 1ª semana: Pele mais uniforme", "✅ 2 semanas: Tom começa a clarear", "✅ 4 semanas: Mancha visivelmente mais clara"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>
                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600 text-lg">
                        <strong>Analogia:</strong> É como desligar a TORNEIRA que jorra tinta preta. Não adianta limpar se continua jorrando. Mulateiro FECHA a torneira.
                    </div>
                </div>
                <div className="bg-slate-50 rounded-[4rem] aspect-square flex items-center justify-center p-12 text-slate-300 font-black italic border border-slate-100">
                    [IMAGEM: Infográfico Torneira]
                </div>
            </div>

            {/* ETAPA 2 */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-slate-50 rounded-[4rem] aspect-square flex items-center justify-center p-12 text-slate-300 font-black italic border border-slate-100 order-2 lg:order-1">
                    [IMAGEM: Infográfico Incêndio]
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 2</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none tracking-tighter">
                            ACALMA A <span className="text-brand-pink italic">INFLAMAÇÃO</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-widest">(Óleo de Melaleuca)</p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="font-black text-brand-blue-dark uppercase text-sm mb-1 flex items-center gap-2"><Droplets className="text-blue-400" size={18} /> ÓLEO DE MELALEUCA:</p>
                            <p className="text-slate-500 font-medium leading-relaxed pl-7">→ Antibacteriano e antifúngico<br />→ Acalma irritação de atrito/depilação<br />→ Previne foliculite (bolinhas escuras)</p>
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em]">O QUE VOCÊ SENTE:</p>
                        <div className="space-y-2">
                            {["✅ Imediato: Pele para de coçar/arder", "✅ 3 dias: Vermelhidão diminui", "✅ 1 semana: Pele lisa (sem bolinhas)"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>
                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600 text-lg">
                        <strong>Analogia:</strong> É como apagar um INCÊNDIO antes de pintar a parede. Se tá pegando fogo, não adianta pintar. Melaleuca APAGA o fogo.
                    </div>
                </div>
            </div>

            {/* ETAPA 3 */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 3</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none tracking-tighter">
                            REMOVE <span className="text-brand-pink italic">CÉLULAS ESCURAS</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-widest">(Argila Branca)</p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="font-black text-brand-blue-dark uppercase text-sm mb-1 flex items-center gap-2"><Layers className="text-slate-400" size={18} /> ARGILA BRANCA AMAZÔNICA:</p>
                            <p className="text-slate-500 font-medium leading-relaxed pl-7">→ Esfolia suavemente (sem arder)<br />→ Absorve impurezas e células mortas<br />→ Clareia progressivamente<br />→ Controla oleosidade (axilas/virilha)</p>
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em]">O QUE VOCÊ SENTE:</p>
                        <div className="space-y-2">
                            {["✅ 1ª aplicação: Pele macia ao toque", "✅ 1 semana: Textura lisa", "✅ 2 semanas: Tom mais claro visível"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>
                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600 text-lg">
                        <strong>Analogia:</strong> É como LIXAR madeira antes de envernizar. Remove o escuro sem agredir. Argila faz isso naturalmente.
                    </div>
                </div>
                <div className="bg-slate-50 rounded-[4rem] aspect-square flex items-center justify-center p-12 text-slate-300 font-black italic border border-slate-100">
                    [IMAGEM: Infográfico Lixa]
                </div>
            </div>
        </section>

        {/* POR QUE AMAZOLÉ E OUTROS NÃO? */}
        <section className="py-32 px-6 bg-brand-blue-dark text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Sparkles size={250} /></div>
            <div className="max-w-6xl mx-auto space-y-20 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                        POR QUE AMAZOLÉ E <br /> <span className="text-brand-blue">OUTROS CLAREADORES NÃO?</span>
                    </h2>
                    <p className="text-xl font-bold uppercase tracking-widest text-brand-blue">4 Ingredientes Naturais Que Fazem a Diferença</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { i: Leaf, t: "🌿 MULATEIRO", s: "(Calycophyllum spruceanum)", d: "Bloqueia melanina na origem. Cicatriza e uniformiza tom.", f: "Tom uniforme em 2 semanas" },
                        { i: Beaker, t: "⚪ DOLOMITA", s: "(Mineral amazônico)", d: "Regenera células da pele. Clareia SEM ácidos agressivos.", f: "Mancha clareando progressivamente" },
                        { i: Droplets, t: "🍃 ÓLEO MELALEUCA", s: "", d: "Acalma inflamação e vermelhidão. Previne foliculite.", f: "Pele lisa, sem bolinhas" },
                        { i: Layers, t: "🏔️ ARGILA BRANCA", s: "", d: "Esfolia suavemente. Remove células escuras.", f: "Textura macia imediata" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center space-y-4">
                            <item.i size={40} className="text-brand-blue" />
                            <div>
                                <p className="font-black text-lg uppercase tracking-tight leading-none mb-1">{item.t}</p>
                                {item.s && <p className="text-[10px] opacity-40 font-bold italic">{item.s}</p>}
                            </div>
                            <p className="text-white/60 text-sm font-medium leading-relaxed">{item.d}</p>
                            <div className="pt-4 border-t border-white/5 w-full">
                                <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">VOCÊ SENTE:</p>
                                <p className="text-sm font-bold">{item.f}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-16">
                    {["100% Natural (sem hidroquinona, sem ácidos)", "pH Balanceado (não irrita pele sensível)", "Fórmula Patenteada (exclusiva Amazolé)"].map((d, i) => (
                        <div key={i} className="flex items-center justify-center gap-3 font-black uppercase text-sm tracking-widest text-center">
                            <CheckCircle2 className="text-emerald-400 shrink-0" /> {d}
                        </div>
                    ))}
                </div>

                <div className="text-center pt-10">
                    <div className="bg-brand-pink p-10 rounded-[3rem] shadow-2xl inline-block group cursor-default transition-transform hover:scale-105">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">RESULTADO COMPROVADO:</p>
                        <p className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Clareamento visível em 4 semanas</p>
                        <p className="text-xs font-bold uppercase tracking-widest mt-4 opacity-70">Não é promessa. É botânica aplicada.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* COMO USAR O AMAZOLÉ */}
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">COMO USAR O AMAZOLÉ</h2>
                    <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">Tão Fácil Quanto Passar Creme Hidratante</p>
                    <p className="text-xs font-black text-brand-pink italic">(Nem precisa enxaguar!)</p>
                </div>

                <div className="bg-brand-gray-light p-10 md:p-16 rounded-[4rem] border border-slate-100 space-y-12">
                    <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3 border-b border-brand-blue/10 pb-4">
                        <Activity className="text-brand-blue" /> ROTINA DIÁRIA - 2X AO DIA
                    </h3>
                    
                    <div className="space-y-12">
                        {[
                            { n: "1", t: "LIMPE A ÁREA", d: "Lave com sabonete neutro e seque bem (MUITO importante!)", time: "1 minuto" },
                            { n: "2", t: "APLIQUE O AMAZOLÉ", d: "Pegue quantidade de 1 grão de ervilha. Espalhe na mancha em movimentos circulares. Massageie até absorver completamente. NÃO enxágue (deixa agir).", time: "2 minutos" },
                            { n: "3", t: "AGUARDE SECAR", d: "Espere 3-5 minutos antes de vestir. Pode aplicar desodorante/maquiagem depois.", time: "3 minutos" }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="h-14 w-14 shrink-0 bg-white border-2 border-brand-blue/20 rounded-2xl flex items-center justify-center font-black text-brand-blue-dark text-2xl shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">{s.n}</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <p className="font-black text-brand-blue-dark text-lg uppercase tracking-tight">{s.t}</p>
                                        <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-2.5 py-1 rounded-full border border-slate-100">
                                            <Clock size={12} /> {s.time}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 font-medium leading-relaxed">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-brand-blue/10 space-y-6">
                        <h3 className="text-xl font-black uppercase text-brand-blue-dark flex items-center gap-2">
                             QUANDO APLICAR:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <p className="font-black text-brand-blue uppercase text-xs">MANHÃ:</p>
                                <ul className="text-sm font-medium text-slate-500 space-y-1">
                                    <li>→ Após o banho</li>
                                    <li>→ Antes de se vestir</li>
                                    <li>→ Pode usar maquiagem/desodorante depois</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="font-black text-brand-pink uppercase text-xs">NOITE:</p>
                                <ul className="text-sm font-medium text-slate-500 space-y-1">
                                    <li>→ Antes de dormir</li>
                                    <li>→ Pele limpa e seca</li>
                                    <li>→ Deixa agir a noite toda</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-xl space-y-8">
                            <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2"><Lightbulb className="text-brand-pink" /> DICAS PARA POTENCIALIZAR O RESULTADO:</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "USE PROTETOR SOLAR", d: "Se aplicar no rosto, SEMPRE use FPS 50+ (Sem protetor = mancha volta)" },
                                    { t: "PELE BEM SECA", d: "Aplique SEMPRE em pele seca (Umidade dilui o produto)" },
                                    { t: "NÃO MISTURE PRODUTOS", d: "Use APENAS Amazolé na área (Outros cremes podem anular efeito)" },
                                    { t: "SEJA CONSISTENTE", d: "2x ao dia, TODO DIA (Pular dias = demora mais)" }
                                ].map((tip, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-2 w-2 rounded-full bg-brand-pink mt-1.5 shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">{tip.t}</p>
                                            <p className="text-xs text-slate-500 font-medium leading-snug">{tip.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-blue-dark p-8 rounded-[3rem] text-white flex flex-col justify-between overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10"><Target size={120} /></div>
                            <div className="space-y-6 relative z-10">
                                <h3 className="text-xl font-black uppercase tracking-widest">ÁREAS QUE VOCÊ PODE TRATAR:</h3>
                                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                    {[
                                        "Axilas escuras", "Virilhas manchadas", "Melasma facial", 
                                        "Manchas de idade", "Foliculite", "Cotovelos/Joelhos", 
                                        "Pescoço manchado", "Entre coxas"
                                    ].map((a, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold">
                                            <CheckCircle2 className="text-brand-blue" size={14} /> {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                                <p className="text-2xl font-black tracking-tighter uppercase leading-none">1 FRASCO = 1 ÁREA</p>
                                <p className="text-[10px] font-bold text-brand-blue uppercase mt-2">POR 30 DIAS DE USO CONTÍNUO</p>
                                <div className="mt-4 p-4 bg-white/5 rounded-2xl text-[10px] space-y-1">
                                    <p>Exemplo: → Tratar só axilas = 1 frasco</p>
                                    <p>→ Tratar axilas + virilha = 2 frascos</p>
                                    <p>→ Tratar rosto + axilas + virilha = 3 frascos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="py-24 px-6 bg-brand-gray-light border-y border-slate-100">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter leading-none">LINHA DO TEMPO REAL</h2>
                    <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">(O Que Acontece Semana a Semana)</p>
                </div>

                <div className="space-y-6">
                    {[
                        { w: "SEMANA 1", t: "O Despertar", d: ["Pele mais macia e uniforme", "Vermelhidão diminui", "Foliculite (bolinhas) melhora"] },
                        { w: "SEMANA 2", t: "A Virada", d: ["Tom começa a clarear (sutil)", "Textura lisa", "Inflamação some"] },
                        { w: "SEMANA 3-4", t: "A Mudança Visível", d: ["Clareamento VISÍVEL", "Mancha 30-40% mais clara", "Outras pessoas NOTAM"] },
                        { w: "SEMANA 5-8", t: "A Transformação", d: ["Clareamento intensifica", "Mancha 50-70% mais clara", "Usa regata/biquíni com confiança"] },
                        { w: "MÊS 3+", t: "Manutenção", d: ["Tom quase igualado", "Pele uniforme", "Manutenção 1x ao dia"] }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 md:items-center bg-white p-8 rounded-[3rem] border border-slate-100 transition-all hover:border-brand-blue group">
                            <div className="md:w-48 shrink-0">
                                <p className="text-brand-pink font-black text-xs uppercase tracking-widest mb-1">{step.w}</p>
                                <p className="text-xl font-black text-brand-blue-dark uppercase leading-none tracking-tight">{step.t}</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {step.d.map((desc, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                        <div className="h-4 w-4 rounded bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                             <Check size={10} className="text-emerald-500" strokeWidth={5} />
                                        </div>
                                        {desc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-7xl font-black text-brand-blue-dark uppercase leading-none tracking-tighter">O QUE VOCÊ <br /><span className="text-brand-pink italic">RECEBE:</span></h2>
                    
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="p-4 bg-brand-gray-light rounded-[2rem] border border-slate-100 shadow-sm"><Package size={40} className="text-brand-blue" /></div>
                            <div className="space-y-2">
                                <p className="text-2xl font-black text-brand-blue-dark uppercase tracking-tight leading-none">AMAZOLÉ CLAREADOR 50g</p>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">(rende 30 dias em 1 área)</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                "Fórmula patenteada 100% natural",
                                "Mulateiro + Dolomita + Melaleuca + Argila",
                                "Textura leve, absorção rápida",
                                "Sem ácidos agressivos",
                                "Testado dermatologicamente"
                            ].map((li, i) => (
                                <div key={i} className="flex items-center gap-3 text-lg font-bold text-slate-600">
                                    <div className="bg-emerald-50 p-1 rounded-full text-emerald-600"><Check size={18} strokeWidth={4} /></div>
                                    {li}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["FRETE GRÁTIS", "ENVIO IMEDIATO", "SEGURO DE ENTREGA", "GARANTIA 90 DIAS"].map((b, i) => (
                            <div key={i} className="bg-brand-gray-light p-4 rounded-2xl text-center border border-slate-100 font-black text-[9px] uppercase tracking-[0.2em] text-slate-400">{b}</div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 rounded-[4rem] aspect-[4/3] flex flex-col items-center justify-center p-12 text-slate-300 border-8 border-white shadow-2xl text-center">
                    <span className="font-black text-xs uppercase tracking-[0.2em] mb-2">[IMAGEM: Kit Amazolé Completo]</span>
                    <span className="text-[10px] font-bold italic opacity-60">Fórmula 100% Original</span>
                </div>
            </div>
        </section>

        {/* MILHARES JÁ ESTÃO CLAREANDO ✨ */}
        <section className="py-32 px-6 bg-white border-y border-slate-50">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">MILHARES JÁ ESTÃO CLAREANDO ✨</h2>
                    <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">Fotos reais enviadas por nossas clientes</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { text: "Usei por 1 mês nas axilas. Clareou MUITO! Já consigo usar regata sem vergonha. O cheiro é suave e não arde nada.", author: "Patrícia L., Curitiba" },
                        { text: "Meu melasma diminuiu bastante em 6 semanas. Uso menos base agora. Produto natural, não irrita.", author: "Fernanda S., Belo Horizonte" },
                        { text: "Virilha estava horrível. Com 3 semanas já vi diferença. Com 2 meses clareou uns 60%. Vale cada centavo!", author: "Juliana M., Salvador" },
                        { text: "Foliculite nas coxas sumiu em 10 dias. O clareamento veio depois. Pele lisinha agora!", author: "Renata P., Recife" },
                        { text: "Manchas de idade nas mãos clarearam bem. Uso há 2 meses. Minhas amigas perguntam o que usei!", author: "Maria C., Porto Alegre" },
                        { text: "Cotovelos escuros desde criança. Esse foi o ÚNICO que clareou de verdade. 8 semanas = resultado incrível.", author: "Beatriz A., Rio de Janeiro" }
                    ].map((test, i) => (
                        <div key={i} className="group bg-[#FDF8F3] p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:border-brand-blue transition-all">
                            <div className="space-y-6">
                                <div className="flex gap-1 text-brand-pink">
                                    {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 font-medium italic text-lg leading-relaxed">"{test.text}"</p>
                            </div>
                            <div className="pt-6 border-t border-brand-blue/10 mt-8">
                                <p className="font-black text-brand-blue-dark text-xs uppercase tracking-[0.2em]">{test.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PERGUNTAS FREQUENTES (FAQ INTEGRAL) */}
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                    <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
                </div>

                <div className="space-y-16">
                    {/* SOBRE O PRODUTO */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-brand-pink uppercase tracking-widest flex items-center gap-3 border-b-2 border-brand-pink/10 pb-1">💰 SOBRE O PRODUTO</h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "❓ Funciona mesmo?", a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas. Garantia de 90 dias: não clareou = dinheiro de volta." },
                                { q: "❓ Já tentei mil clareadores e nenhum funcionou. Por que este seria diferente?", a: "Porque os outros usam ÁCIDOS que: ❌ Ardem e descascam ❌ Irritam a pele ❌ Clareamento temporário (volta pior). Amazolé usa BOTÂNICA: ✅ Mulateiro bloqueia melanina NA RAIZ ✅ Não arde, não descasca ✅ Clareamento progressivo e duradouro." },
                                { q: "❓ Funciona para melasma?", a: "SIM. Melasma é acúmulo de melanina. Mulateiro inibe produção de melanina. MAS: Precisa usar protetor solar FPS 50+ TODO DIA. Sem protetor = mancha volta." },
                                { q: "❓ Arde? Descasca a pele?", a: "NÃO. Fórmula 100% natural, sem ácidos agressivos. Pode sentir leve formigamento na 1ª aplicação. É normal. Passa em 2-3 minutos. Se arder MUITO = pele muito sensível. Aplique 1x ao dia (só à noite)." },
                                { q: "❓ Tenho pele sensível/alérgica. Posso usar?", a: "PODE. Fórmula natural, pH balanceado. Testado dermatologicamente. Indicado para peles sensíveis. Mas sempre faça teste de alergia: → Aplique atrás da orelha → Aguarde 24h → Sem reação = pode usar." },
                                { q: "❓ Quanto tempo para ver resultado?", a: "LINHA DO TEMPO: Semana 1-2: Pele mais uniforme. Semana 3-4: Clareamento visível (30-40%). Semana 5-8: Clareamento intenso (50-70%). Mês 3+: Tom quase igualado. Varia por pessoa e tipo de mancha. Melasma demora mais (2-3 meses). Axila/virilha mais rápido (4-6 semanas)." },
                                { q: "❓ Preciso usar para sempre?", a: "FASE INTENSIVA (primeiros 2-3 meses): → 2x ao dia, TODO dia. FASE MANUTENÇÃO (depois): → 1x ao dia (só à noite) → Ou 3-4x por semana. Mancha NÃO volta se você: → Usar protetor solar → Evitar atrito excessivo → Fazer manutenção." },
                                { q: "❓ Funciona em pele negra?", a: "SIM. Funciona em TODOS os tons de pele. Peles negras têm mais melanina (natural). Clareamento é progressivo e suave. Expectativa realista: → Não vai ficar \"branco\" → Vai UNIFORMIZAR o tom → Mancha fica do tom da sua pele saudável." },
                                { q: "❓ Posso usar no rosto todo dia?", a: "PODE. Mas SEMPRE use protetor FPS 50+ depois. Sol sem protetor = mancha volta PIOR. Dica: Aplique Amazolé à noite. De manhã: protetor solar." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`prod-${i}`} className="bg-brand-gray-light border-none rounded-3xl px-8 shadow-sm">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-500 font-medium text-lg leading-relaxed pb-8 whitespace-pre-line">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* SOBRE PREÇO E PAGAMENTO */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-brand-pink uppercase tracking-widest flex items-center gap-3 border-b-2 border-brand-pink/10 pb-1">💳 SOBRE PREÇO E PAGAMENTO</h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "❓ Por que R$ 137?", a: "Ingredientes importados da Amazônia. Processo de extração caro. Fórmula patenteada. Preço justo por produto que FUNCIONA. Comparação: → Clareamento a laser: R$ 800-1.500/sessão → Cremes importados: R$ 300-600 → Amazolé: R$ 137 (rende 30 dias)." },
                                { q: "❓ Posso parcelar?", a: "SIM. Até 12x de R$ 13,90 sem juros. Ou R$ 137 no PIX (desconto aplicado)." },
                                { q: "❓ Quanto comprar?", a: "RECOMENDAMOS: 1 ÁREA (axila OU virilha OU rosto): → 2 frascos (tratamento 60 dias). 2 ÁREAS (axila + virilha): → 3 frascos (90 dias). 3+ ÁREAS: → 4-6 frascos (120-180 dias). Quanto mais tempo usar = melhor resultado." },
                                { q: "❓ E se não funcionar?", a: "GARANTIA INCONDICIONAL DE 90 DIAS. Use por 3 meses inteiros. Não clareou? Manda 1 e-mail. Devolvemos 100% do valor. Sem perguntas. Sem burocracia. Nem precisa devolver o produto." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`pay-${i}`} className="bg-brand-gray-light border-none rounded-3xl px-8 shadow-sm">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-500 font-medium text-lg leading-relaxed pb-8 whitespace-pre-line">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* SOBRE ENTREGA */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-brand-pink uppercase tracking-widest flex items-center gap-3 border-b-2 border-brand-pink/10 pb-1">📦 SOBRE ENTREGA</h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "❓ Frete é grátis?", a: "SIM. Para TODO o Brasil. Rastreio + Seguro inclusos." },
                                { q: "❓ Quanto tempo para chegar?", a: "→ Sudeste/Sul: 3-7 dias úteis → Demais regiões: 5-12 dias úteis. Envio em até 24h úteis após confirmação." },
                                { q: "❓ É seguro comprar?", a: "100% SEGURO. ✅ Certificado SSL ✅ Checkout criptografado ✅ Nota fiscal ✅ CNPJ ativo ✅ Política de privacidade LGPD." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`del-${i}`} className="bg-brand-gray-light border-none rounded-3xl px-8 shadow-sm">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-500 font-medium text-lg leading-relaxed pb-8 whitespace-pre-line">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* SOBRE USO */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-brand-pink uppercase tracking-widest flex items-center gap-3 border-b-2 border-brand-pink/10 pb-1">🧴 SOBRE USO</h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "❓ Quanto tempo dura 1 frasco?", a: "30 DIAS tratando 1 ÁREA. Áreas pequenas (axila): pode durar 45 dias. Áreas grandes (costas): dura 20 dias." },
                                { q: "❓ Posso usar durante a gravidez?", a: "Produto natural, uso externo = Geralmente seguro. MAS: Sempre consulte seu obstetra antes. (Cada gravidez é única)." },
                                { q: "❓ Posso misturar com outros cremes?", a: "NÃO RECOMENDAMOS. Use APENAS Amazolé na área. Outros produtos podem anular o efeito. Pode usar: ✅ Protetor solar (depois de absorver) ✅ Maquiagem (depois de secar) ✅ Desodorante (depois de 5 min)." },
                                { q: "❓ Preciso depilar antes de usar?", a: "NÃO precisa. Funciona com ou sem pelo. Mas se depilar: → Espere 24h antes de aplicar → Pele irritada = pode arder." },
                                { q: "❓ Ainda tenho dúvidas. Como falar com vocês?", a: "📧 contato@amazole.com.br. Resposta em até 24h úteis." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`use-${i}`} className="bg-brand-gray-light border-none rounded-3xl px-8 shadow-sm">
                                    <AccordionTrigger className="text-left font-black text-slate-900 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-500 font-medium text-lg leading-relaxed pb-8 whitespace-pre-line">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>

        {/* GARANTIA 90 DIAS INTEGRAL */}
        <section className="py-24 px-6 bg-white border-t border-slate-50">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <div className="bg-[#FDF8F3] border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><History size={150} /></div>
                    <ShieldCheck size={100} className="mx-auto text-brand-blue-dark mb-10" />
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase tracking-tighter mb-8 leading-tight">GARANTIA SATISFAÇÃO <br /> OU DINHEIRO DE VOLTA</h2>
                    <div className="space-y-6 text-2xl text-slate-600 font-medium italic mb-10 leading-relaxed max-w-2xl mx-auto">
                        <p>Use o Amazolé por 90 dias inteiros.</p>
                        <p>Se não ver clareamento visível, devolvemos 100% do seu dinheiro.</p>
                        <p>Sem perguntas. Sem enrolação.</p>
                        <p>Porque temos certeza que funciona.</p>
                    </div>
                    <div className="inline-block px-10 py-3 bg-brand-blue-dark text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl">90 DIAS DE GARANTIA</div>
                </div>
            </div>
        </section>

        {/* OFERTA FINAL (GRID DE KITS) */}
        <section id="pricing" className="py-32 px-6 bg-brand-blue-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-pink/5 animate-pulse" />
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                        SUA ÚLTIMA CHANCE DE USAR <br /> <span className="text-brand-blue italic">QUALQUER ROUPA SEM MEDO</span>
                    </h2>
                    <div className="inline-block bg-brand-pink px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-xl animate-bounce">
                        ⏰ OFERTA ENCERRA EM: {formatTime(877)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {AMAZOLÉ_KITS.map((kit, i) => (
                        <div key={i} className={cn(
                            "bg-white text-slate-900 rounded-[3rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between transition-all hover:scale-[1.03] border-4",
                            kit.popular ? "border-brand-pink scale-105 z-10 relative" : "border-white"
                        )}>
                            {kit.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                                    ⭐ MAIS VENDIDO
                                </div>
                            )}
                            {kit.bestResult && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-blue-dark text-white px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                                    🔥 MELHOR RESULTADO
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{kit.name}</h3>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-4">{kit.treatment}</p>
                                </div>
                                <div className="py-8 bg-brand-gray-light rounded-[2.5rem] space-y-2">
                                    <p className="text-sm font-bold text-slate-400 line-through">De: {kit.oldPrice}</p>
                                    <div className="space-y-0 text-brand-blue-dark">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Cartão: R$ {kit.cardPrice}</p>
                                        <div className="flex items-baseline justify-center leading-none">
                                            <span className="text-2xl font-black mr-1">R$</span>
                                            <span className="text-7xl font-black tracking-tighter">{kit.pixPrice}</span>
                                        </div>
                                        <p className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.2em] mt-2">PIX com Desconto</p>
                                        {kit.unitPrice !== kit.pixPrice && (
                                            <p className="text-[9px] font-bold opacity-40 mt-1">(R$ {kit.unitPrice} por frasco)</p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700 flex items-center justify-center gap-2"><Check size={14} strokeWidth={4} /> FRETE GRÁTIS</p>
                                    {kit.savings && <p className="text-xs font-black uppercase tracking-widest text-brand-pink">ECONOMIA: {kit.savings}</p>}
                                    {kit.bestResult && <p className="text-xs font-black uppercase tracking-widest text-brand-blue-dark flex items-center justify-center gap-2"><Check size={14} strokeWidth={4} /> GARANTIA 90 DIAS</p>}
                                </div>
                            </div>

                            <Link href={kit.checkoutUrl} target="_blank" className="mt-8">
                                <Button className={cn(
                                    "w-full h-16 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-all",
                                    kit.popular ? "bg-brand-pink hover:bg-brand-pink-dark text-white" : "bg-brand-blue-dark hover:bg-brand-blue-dark/90 text-white"
                                )}>
                                    {kit.id === '1-un' ? 'COMPRAR AGORA' : kit.id === '2-un' ? 'QUERO ESTE' : 'APROVEITAR OFERTA'}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="pt-10 space-y-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-2 text-red-500 font-black text-xs uppercase tracking-[0.3em] animate-pulse">
                            <ShieldAlert size={20} /> ATENÇÃO: ESTOQUE LIMITADO
                        </div>
                        <p className="text-slate-400 font-medium text-sm max-w-lg mx-auto leading-relaxed">
                            Devido à alta procura e extração artesanal dos ingredientes amazônicos, restam apenas: <br />
                            <strong className="text-red-500 text-lg uppercase tracking-widest">🔴 47 kits disponíveis com este desconto</strong>
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-wrap justify-center gap-10 opacity-60">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Frete Grátis Brasil</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Rastreio + Seguro</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Envio em 24h</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Garantia 90 dias</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Pagamento Seguro</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white"><CheckCircle2 className="text-emerald-400" /> Nota Fiscal</div>
                </div>

                {/* DECISÃO FINAL */}
                <div className="py-20 space-y-12">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">DECISÃO AGORA:</p>
                        <p className="text-5xl font-mono font-black text-brand-pink">{formatTime(702)}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-left space-y-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <p className="text-2xl font-black text-white uppercase tracking-tighter">1️⃣ FECHAR ESTA PÁGINA</p>
                            <ul className="space-y-4 text-white/70 font-medium">
                                <li className="flex items-start gap-3"><MinusCircle size={18} className="mt-1 shrink-0" /> Continuar escondendo axilas/virilhas</li>
                                <li className="flex items-start gap-3"><MinusCircle size={18} className="mt-1 shrink-0" /> Gastar R$ 800+ em laser</li>
                                <li className="flex items-start gap-3"><MinusCircle size={18} className="mt-1 shrink-0" /> Usar base TODO dia pra esconder melasma</li>
                                <li className="flex items-start gap-3"><MinusCircle size={18} className="mt-1 shrink-0" /> Vergonha na hora íntima</li>
                            </ul>
                        </div>
                        <div className="bg-emerald-500/10 border-4 border-emerald-500 p-10 rounded-[3rem] text-left space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                            <p className="text-2xl font-black text-emerald-600 uppercase tracking-tighter">2️⃣ CLICAR AGORA</p>
                            <ul className="space-y-4 text-emerald-50/80 font-bold">
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" strokeWidth={4} /> Kit chega em 3-7 dias</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" strokeWidth={4} /> Primeira semana: pele mais uniforme</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" strokeWidth={4} /> 4 semanas: clareamento visível</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" strokeWidth={4} /> 90 dias: usa regata/biquíni com confiança</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center pt-10">
                        <Link href={selectedKit.checkoutUrl} target="_blank" className="w-full max-w-2xl">
                            <Button className="w-full h-24 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-black text-2xl md:text-3xl uppercase tracking-tighter shadow-[0_20px_50px_rgba(229,71,143,0.5)] animate-pulse">
                                🔥 CLAREAR MANCHAS POR R$ 127 (PIX) 🔥
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 bg-brand-gray-light text-brand-text">
            <div className="max-w-6xl mx-auto px-6 space-y-20">
                
                {/* Avisos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-slate-200 pb-16">
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue-dark">Avisos e Isenções de Responsabilidade</h3>
                        <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                            <p><strong className="text-slate-900">Isenção de Responsabilidade:</strong> Este produto tem caráter cosmético. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um dermatologista antes de iniciar qualquer tratamento para manchas de pele.</p>
                            <p><strong className="text-slate-900">Aviso de Idade:</strong> Conteúdo destinado a maiores de 18 anos.</p>
                            <p><strong className="text-slate-900">Uso Responsável:</strong> Produto de uso externo. Evite contato com olhos. Faça teste de alergia antes do uso. Pessoas com condições dermatológicas pré-existentes, gestantes ou lactantes devem consultar médico antes do uso.</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right space-y-8 flex flex-col justify-center items-center md:items-end">
                        <span className="text-4xl font-black tracking-tighter text-brand-blue-dark uppercase leading-none">AMAZOLÉ</span>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                            <p>E-Business Rio Verde | Aparecida de Goiânia - GO</p>
                            <p>CNPJ: 60.357.932/0001-18</p>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <Dialog><DialogTrigger className="hover:text-brand-pink transition-colors">Termos e Condições</DialogTrigger><DialogContent className="max-w-2xl"><DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader><ScrollArea className="h-96 pr-4 text-sm leading-relaxed"><p>Ao acessar este site, o usuário concorda que todo o conteúdo exibido possui caráter informativo...</p></ScrollArea></DialogContent></Dialog>
                        <Dialog><DialogTrigger className="hover:text-brand-pink transition-colors">Política de Privacidade</DialogTrigger><DialogContent className="max-w-2xl"><DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader><ScrollArea className="h-96 pr-4 text-sm leading-relaxed"><p>Valorizamos sua privacidade. Dados são usados apenas para suporte...</p></ScrollArea></DialogContent></Dialog>
                        <Dialog><DialogTrigger className="hover:text-brand-pink transition-colors">Política de Reembolso</DialogTrigger><DialogContent className="max-w-2xl"><DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader><ScrollArea className="h-96 pr-4 text-sm leading-relaxed"><p>Você pode solicitar o reembolso em até 7 dias...</p></ScrollArea></DialogContent></Dialog>
                    </nav>
                    <div className="flex gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <ShieldCheck size={32} /> <Lock size={32} /> <CreditCard size={32} />
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col items-center gap-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">contato@amazole.com.br</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">IMPORTANTE: Os resultados podem variar de pessoa para pessoa.</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">© 2025 Amazolé - Clareador Natural da Amazônia</p>
                </div>
            </div>
        </footer>

        {/* STICKY BAR MOBILE INTEGRAL */}
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