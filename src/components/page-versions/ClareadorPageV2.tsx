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
  Target,
  Package,
  Truck,
  ShieldAlert,
  Dna
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

// IMAGENS EXCLUSIVAS DA GALERIA DE PRODUTO (TOPO)
const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

// IMAGENS DA SEÇÃO RESULTADOS REAIS
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

export function ClareadorPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState<KitOption>(AMAZOLÉ_KITS[1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => {});

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
                            </div>
                        </div>
                        
                        <div className="flex-1 relative w-full order-1 lg:order-2">
                            <div className="absolute inset-0 bg-brand-blue rounded-full blur-[100px] opacity-10"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Pele iluminada" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO: DESIGN REDESENHADO (CIÊNCIA) */}
            <section className="py-24 md:py-32 px-6 bg-brand-beige/10 relative overflow-hidden border-b border-brand-beige/50">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
              
              <div className="max-w-6xl mx-auto space-y-20 relative z-10">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-brand-beige rounded-full text-brand-pink text-[10px] font-black uppercase tracking-[0.4em] shadow-sm">
                        <Beaker size={14} className="animate-pulse" /> Tecnologia Bio-Botânica
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black text-brand-blue-dark uppercase tracking-tighter leading-[0.9] text-center">
                        A CIÊNCIA POR TRÁS DO <br /> <span className="text-brand-pink italic">CLAREAMENTO REAL</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-brand-pink mx-auto rounded-full shadow-sm" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  
                  {/* CARD PRINCIPAL - ETAPA 1 */}
                  <div className="lg:col-span-7 bg-white rounded-[4rem] p-8 md:p-16 border border-brand-beige shadow-[0_40px_80px_-15px_rgba(139,121,94,0.15)] relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000" />
                    <div className="absolute top-12 right-12 text-brand-blue/10 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                        <Leaf size={180} />
                    </div>

                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-7xl font-black text-brand-blue/20 leading-none select-none">01</span>
                                <h3 className="text-3xl md:text-4xl font-black text-brand-blue-dark uppercase tracking-tighter leading-tight">
                                    Bloqueio Inteligente <br /> <span className="text-brand-pink italic">da Pigmentação</span>
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 bg-brand-blue-dark rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Microscope size={60} /></div>
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-brand-blue">Ativo Principal:</p>
                                <p className="text-xl md:text-2xl font-bold leading-snug">
                                    Concentrado de <span className="text-brand-pink italic">Mulateiro:</span> A árvore da juventude que paralisa a produção de melanina na raiz da mancha.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Inibe a Tirosinase", d: "Desliga a 'fábrica' de cor escura na pele." },
                                    { t: "Efeito clareador contínuo", d: "Age por 24h após a aplicação." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-brand-gray-light rounded-3xl border border-slate-100">
                                        <div className="h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-black text-sm text-brand-blue-dark uppercase leading-none">{item.t}</p>
                                            <p className="text-xs text-slate-500 font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* CARDS SECUNDÁRIOS */}
                  <div className="lg:col-span-5 flex flex-col gap-10">
                    
                    {/* ETAPA 2 */}
                    <div className="flex-1 bg-white rounded-[3.5rem] p-10 border border-brand-beige shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-5 text-brand-pink group-hover:scale-110 transition-transform"><Sun size={100} /></div>
                        <div className="flex items-center gap-5 mb-8">
                            <span className="text-4xl font-black text-brand-pink/20 leading-none">02</span>
                            <h4 className="text-xl font-black text-brand-blue-dark uppercase tracking-tight">Escudo contra <br /> inflamações</h4>
                        </div>
                        <div className="space-y-5">
                            <p className="text-slate-600 font-medium leading-relaxed">
                                <strong className="text-brand-pink uppercase tracking-widest text-xs block mb-1">Dolomita + Melaleuca:</strong> 
                                Acalma o couro cabeludo e as áreas sensíveis, impedindo que novas manchas nasçam por irritação de depilação.
                            </p>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-brand-pink/10 text-brand-pink border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">Proteção Ativa</Badge>
                            </div>
                        </div>
                    </div>

                    {/* ETAPA 3 */}
                    <div className="flex-1 bg-brand-blue-dark rounded-[3.5rem] p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-white group-hover:scale-110 transition-transform"><Waves size={100} /></div>
                        <div className="flex items-center gap-5 mb-8">
                            <span className="text-4xl font-black text-white/20 leading-none">03</span>
                            <h4 className="text-xl font-black text-white uppercase tracking-tight">Renovação de <br /> Camadas</h4>
                        </div>
                        <div className="space-y-5">
                            <p className="text-white/80 font-medium leading-relaxed">
                                <strong className="text-brand-blue uppercase tracking-widest text-xs block mb-1">Argila Branca:</strong> 
                                Promove um peeling natural suave que remove a "capa" escura de células mortas, revelando a pele iluminada por baixo.
                            </p>
                            <div className="flex items-center gap-2">
                                <Badge className="bg-white/10 text-brand-blue border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">Efeito Iluminador</Badge>
                            </div>
                        </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* SEÇÃO: COMO USAR */}
            <section className="py-24 px-6 bg-white border-b border-brand-blue/10">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase leading-[0.9]">COMO USAR O <span className="text-brand-pink">AMAZOLÉ</span></h2>
                        <p className="text-xl font-bold text-slate-400 uppercase">Tão fácil quanto seu hidratante normal</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { n: "1", t: "Limpe a área", d: "Lave com sabonete neutro e seque bem a região que deseja clarear.", icon: Droplets },
                            { n: "2", t: "Aplique e Massageie", d: "Pegue uma pequena quantidade e espalhe com movimentos circulares.", icon: Activity },
                            { n: "3", t: "Deixe Agir", d: "Não precisa enxaguar. Use 2x ao dia para resultados mais rápidos.", icon: Clock }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                                <div className="h-20 w-20 rounded-[2rem] bg-brand-blue/10 flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 transition-transform">
                                    <step.icon size={32} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black text-brand-blue-dark uppercase tracking-tight">{step.n}. {step.t}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO: FAQ COMPLETO */}
            <section className="py-24 px-6 bg-brand-gray-light border-y border-orange-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                        <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-brand-pink uppercase tracking-[0.2em] border-b-2 border-brand-pink/30 inline-block pb-1">💰 SOBRE O PRODUTO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de manchas visíveis em semanas. Garantia de 90 dias: não funcionou = dinheiro de volta." },
                                    { q: "❓ Tem contraindicação?", a: "Não. É um produto 100% natural e testado dermatologicamente. Seguro para todos os tipos de pele." },
                                    { q: "❓ Em quanto tempo vejo resultado?", a: "Os primeiros sinais de uniformização aparecem em 15 dias. O resultado completo ocorre entre 60 a 90 dias de uso contínuo." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`produto-${i}`} className="bg-white border border-brand-blue/10 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-brand-blue-dark hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-white border-t border-slate-50 text-center">
                <div className="max-w-4xl mx-auto bg-brand-blue/5 border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem]">
                    <ShieldCheck className="mx-auto h-24 w-24 text-brand-blue-dark mb-10 drop-shadow-lg" />
                    <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase text-brand-blue-dark">Garantia 90 Dias</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">
                        Use o Amazolé por 90 dias. Se você não AMAR o resultado ou sentir que sua pele não clareou, nós devolvemos 100% do seu dinheiro. Sem perguntas.
                    </p>
                    <div className="inline-block px-8 py-2 bg-brand-blue-dark text-white rounded-full text-xs font-black uppercase tracking-[0.4em]">Compromisso Amazolé</div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-brand-gray-light text-brand-text border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue-dark">Avisos e Isenções</h3>
                        <div className="text-xs text-slate-500 font-medium leading-relaxed text-justify">
                            <p>Este conteúdo tem caráter informativo e educacional. Não oferece diagnóstico ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <span className="text-3xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-loose">
                            <p>OneBase | Soluções Digitais</p>
                            <p>CNPJ: 60.357.932/0001-18</p>
                        </div>
                    </div>
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