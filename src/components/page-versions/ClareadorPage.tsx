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
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Droplets,
  FlaskConical,
  Beaker,
  Calendar,
  Lightbulb,
  Info,
  Play
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

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png",
    text: "Chegou super rápido! Já comecei meu tratamento clareador hoje. O cheiro é maravilhoso e a textura na pele é incrível.",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png",
    text: "Entrega relâmpago aqui no RJ! Usei hoje pela primeira vez e o perfume é incrível. Já sinto a pele mais hidratada.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558644450-3.png",
    text: "Recebi em tempo recorde! O sérum é lindo e muito cheiroso. Fiz a primeira aplicação e a absorção é imediata.",
    author: "Fernanda L., Belo Horizonte"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558648736-4.png",
    text: "Chegou voando! Começando o tratamento de clareamento agora. O perfume fixou e a pele ficou super macia.",
    author: "Carla T., Curitiba"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png",
    text: "Impecável a entrega! O cheiro é viciante e o resultado no toque da pele me surpreendeu. Nota 10.",
    author: "Renata M., Salvador"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558657652-6.png",
    text: "Meu kit chegou antes do esperado! Já iniciei o tratamento. Sinto a pele bem mais viçosa logo de cara.",
    author: "Beatriz A., Porto Alegre"
  }
];

// DADOS DOS KITS ATUALIZADOS
const KITS = [
  {
    id: 1,
    name: "1 unidade",
    discount: "21% OFF",
    pricePerUnit: "R$ 117,70",
    oldPrice: "R$ 149,90",
    totalPrice: "117,70",
    installment: "Em até 6x de R$ 19,61 sem juros",
    badge: null,
    checkoutUrl: "https://seguro.elabela.store/r/M1MW6QA99S?kit=1"
  },
  {
    id: 3,
    name: "3 unidades",
    discount: "40% OFF",
    pricePerUnit: "R$ 89,23",
    oldPrice: "R$ 449,70",
    totalPrice: "267,70",
    installment: "Em até 6x de R$ 44,61 sem juros",
    badge: { text: "Mais Vendido", color: "bg-pink-500" },
    checkoutUrl: "https://seguro.elabela.store/r/M1MW6QA99S?kit=3"
  },
  {
    id: 5,
    name: "5 unidades",
    discount: "55% OFF",
    pricePerUnit: "R$ 79,54",
    oldPrice: "R$ 899,40",
    totalPrice: "397,70",
    installment: "Em até 6x de R$ 66,28 sem juros",
    badge: { text: "Melhor Preço", color: "bg-emerald-500", extra: "Promoção Carro" },
    checkoutUrl: "https://seguro.elabela.store/r/M1MW6QA99S?kit=5"
  }
];

export function ClareadorPage() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState(KITS[2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

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
      <PageTracker contentId="clareador" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* NAVIGATION E-COMMERCE CENTRALIZADA */}
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <img 
                    src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                    alt="Logo" className="h-8"
                />
            </div>
        </nav>

        {/* HERO / PRODUCT SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA (50%) */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={PRODUCT_IMAGES[activeImageIndex]} 
                          alt="Produto Principal" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                        />
                        
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                        >
                          <ChevronRight size={24} />
                        </button>
                        
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImageIndex(i)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative group",
                                    activeImageIndex === i 
                                      ? "border-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.1)] scale-105" 
                                      : "border-slate-100 opacity-60 hover:opacity-100 hover:border-slate-300"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                                {activeImageIndex === i && (
                                  <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA (50%) */}
                <div className="lg:col-span-6 space-y-6">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Clareador Natural do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Amazolé - Clareador de Manchas 100% Natural
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 3.427 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 12.500 compras no mês passado.
                        </p>
                    </div>

                    {/* SEÇÃO DE PREÇO (FORMATO EXATO DA IMAGEM) */}
                    <div className="space-y-1.5 py-4">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-2xl font-light">{selectedKit.oldPrice}</span>
                            <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight">
                                {selectedKit.discount}
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-900">R$ {selectedKit.totalPrice}</span>
                            <span className="text-emerald-500 font-medium text-2xl">no pix</span>
                        </div>
                        <p className="text-slate-500 text-lg">
                            {selectedKit.installment}
                        </p>
                    </div>

                    {/* SELETOR DE KITS */}
                    <div className="space-y-4 pt-2">
                        <p className="font-bold text-slate-700">Selecione o kit</p>
                        <div className="space-y-3">
                            {KITS.map((kit) => (
                                <div 
                                    key={kit.id}
                                    onClick={() => setSelectedKit(kit)}
                                    className={cn(
                                        "relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer group hover:bg-slate-50",
                                        selectedKit.id === kit.id ? "border-slate-900 bg-white" : "border-slate-100 bg-white"
                                    )}
                                >
                                    <div className="absolute -top-3 right-4 flex gap-2">
                                        {kit.badge?.extra && (
                                            <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                                {kit.badge.extra}
                                            </span>
                                        )}
                                        {kit.badge && (
                                            <span className={cn(kit.badge.color, "text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg")}>
                                                {kit.badge.text}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                            selectedKit.id === kit.id ? "border-slate-900 bg-white" : "border-slate-200"
                                        )}>
                                            {selectedKit.id === kit.id && <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />}
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-black text-slate-900 text-lg uppercase tracking-tight">{kit.name}</span>
                                                <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full text-[10px] font-black">
                                                    {kit.discount}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm font-medium">{kit.pricePerUnit} por unidade</p>
                                        </div>
                                    </div>

                                    <div className="text-right space-y-1 leading-none">
                                        <p className="text-slate-300 line-through font-bold text-sm">{kit.oldPrice}</p>
                                        <div className="flex items-baseline gap-1 justify-end">
                                            <span className="text-slate-950 font-black text-xs">R$</span>
                                            <span className="text-slate-950 font-black text-2xl">{kit.totalPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                        
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2 rounded-lg">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — <span className="text-slate-500 font-bold">Envio imediato em até 24h</span></p>
                                    <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <ShieldCheck className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" size={24} />
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <div className="border-t border-slate-100 bg-white">
            
            <section className="py-12 bg-white border-b border-slate-50 overflow-hidden">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-30 grayscale group">
                   <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-2 md:mb-0">Destaque na Mídia:</p>
                   <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">G1</span>
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans italic">R7</span>
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">GLOBO</span>
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">BAND</span>
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans underline decoration-4">SBT</span>
                   </div>
                </div>
              </div>
            </section>

            {/* SEÇÃO: PÚBLICO-ALVO */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-16">
                        <div className="flex-1 space-y-8">
                            <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCINA</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                                Clareie Manchas Difíceis Sem Ácidos Agressivos. <span className="text-orange-700">100% Natural da Amazônia Por R$ 137,00.</span>
                            </h2>
                            <div className="pt-8 space-y-6">
                                <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "💔 Esconde axilas escuras e não usa regata há anos",
                                        "💔 Evita biquíni ou calcinha porque a virilha tá manchada",
                                        "💔 Melasma te faz usar base TODOS os dias (mesmo em casa)",
                                        "💔 Já tentou mil cremes que arderam, descascaram e não clarearam",
                                        "💔 Tem vergonha de tirar a roupa na frente do parceiro"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                            <div className="bg-orange-100 p-1 rounded-full text-orange-600"><Check size={16} strokeWidth={3} /></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                    <p>Porque você merece usar QUALQUER roupa sem medo.</p>
                                    <p className="text-orange-800 italic underline decoration-orange-300">
                                        Sem precisar escolher entre: <br />
                                        Clarear as manchas OU irritar a pele.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                            <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-10"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Mulher confiante de regata" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO DE OFERTA FINAL REVERTIDA PARA DESIGN LIMPO */}
            <section id="pricing" className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight uppercase">
                            🚨 SUA ÚLTIMA CHANCE DE RECUPERAR SUA PELE 🚨
                        </h2>
                        <p className="text-slate-500 font-bold text-lg md:text-xl">
                            Selecione um dos kits no topo da página para garantir seu desconto de fábrica.
                        </p>
                    </div>

                    <div className="bg-[#FDF8F3] rounded-[3.5rem] p-12 text-center border-4 border-white shadow-xl">
                        <div className="space-y-8">
                            <div className="flex justify-center gap-12 opacity-50">
                                <Truck size={48} className="text-orange-600" />
                                <Verified size={48} className="text-emerald-600" />
                                <ShieldCheck size={48} className="text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-slate-900">Entrega Garantida para todo o Brasil</h3>
                            <p className="text-slate-500 font-medium max-w-xl mx-auto">
                                Seu pedido é processado imediatamente pela nossa indústria e enviado com seguro total e código de rastreamento em até 24h.
                            </p>
                            <Button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="h-16 px-10 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-black transition-all"
                            >
                                ESCOLHER MEU KIT AGORA
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6 text-center">
                    <img 
                        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                        alt="OneBase Logo" 
                        className="h-14 mx-auto mb-4"
                    />
                    <p className="text-sm font-black text-orange-800 uppercase tracking-widest mb-4">Amazolé | Pele Perfeita</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Amazolé - O Poder da Natureza na Sua Pele</p>
              </div>
            </footer>
        </div>

        {/* STICKY BAR MOBILE */}
        <MobileStickyBar 
          installmentText={selectedKit.installment.split('de ')[1].split(' sem')[0]}
          buttonText="Comprar agora" 
          checkoutUrl={selectedKit.checkoutUrl} 
        />
      </div>
    </>
  );
}