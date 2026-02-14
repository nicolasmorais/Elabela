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

// IMAGENS EXCLUSIVAS DA GALERIA DE PRODUTO (TOPO)
const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
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

export function ClareadorPage() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: '12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

    fetch('/api/page-settings/clareador')
        .then(res => res.json())
        .then(data => {
            if (data && data.checkoutUrl) {
                setConfig(prev => ({
                    ...prev,
                    ...data
                }));
            }
        })
        .catch(e => console.error("Erro ao carregar link de checkout."));

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
                    
                    {/* NOVO BADGE: ELEITO MELHOR CLAREADOR NATURAL */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Clareador Natural do Brasil
                    </div>

                    <div className="space-y-2">
                        {/* NOVO NOME DO PRODUTO: AMAZOLÉ */}
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

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">25% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            {config.installmentText}
                        </p>
                    </div>

                    {/* DEPOIMENTO HERO */}
                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl space-y-2">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">
                            "Minhas manchas de anos sumiram em 3 semanas... <br />
                            Finalmente posso sair sem quilos de maquiagem."
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Juliana M., Goiânia
                        </p>
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <Button 
                                className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 group"
                                style={{ backgroundColor: '#35c867' }}
                            >
                                <ShoppingBag size={28} />
                                {config.buttonText}
                                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        
                        {/* ENTREGA FULL BANNER */}
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

        {/* --- SEÇÃO DE DESCRIÇÃO --- */}
        <div className="border-t border-slate-100 bg-white">
            
            {/* SEÇÃO: MÍDIA / PORTAIS */}
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

            {/* GALERIA DE RESULTADOS REAIS */}
            <section className="py-24 px-6 bg-white border-b border-orange-100">
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                  <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                    Resultados Reais, Mulheres Reais
                  </h2>
                  <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {GALLERY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-orange-100">
                       <img 
                          src={url} 
                          alt={`Imagem da Galeria ${i + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
                <div className="text-center pt-8">
                  <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
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
                                O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Com Amazolé.</span>
                            </h2>
                            <div className="pt-8 space-y-6">
                                <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "💔 Sente vergonha das manchas no rosto e mãos",
                                        "💔 Não sai de casa sem maquiagem pesada para esconder",
                                        "💔 Já gastou fortunas com ácidos que queimam a pele",
                                        "💔 Não pode (ou não quer) gastar R$ 500 em peeling",
                                        "💔 Busca uma solução natural, segura e definitiva"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                    <p>Porque você merece acordar SEM precisar de corretivo.</p>
                                    <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre: Tratar as manchas OU pagar as contas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                            <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-10"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Pele Lindo com Amazolé" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO COMPLETA: TRIPLA ANCORAGEM (Adaptada para Pele) */}
            <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Amazolé</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                            POR QUE ESTE KIT PARA AS MANCHAS EM <span className="text-orange-600">7 DIAS?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                            TECNOLOGIA TRIPLA AÇÃO CLAREADORA™
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-orange-50 text-orange-700 rounded-2xl shadow-sm border border-orange-100">
                                    <Microscope size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">🔬 COMO FUNCIONA</h3>
                            </div>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed">
                                Suas manchas surgem por <span className="text-orange-600 font-black">3 MOTIVOS:</span>
                            </p>
                            <div className="space-y-4">
                                {[
                                    { n: "1", t: "HIPERPIGMENTAÇÃO", d: "Sua pele produz melanina em excesso por sol ou hormônios." },
                                    { n: "2", t: "INFLAMAÇÃO CELULAR", d: "Células cansadas não renovam e retêm o pigmento escuro." },
                                    { n: "3", t: "BARREIRA DESPROTEGIDA", d: "Sua pele não consegue se defender de novas agressões." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-[#FDF8F3] rounded-2xl border border-orange-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                        <div className="h-8 w-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black shrink-0 shadow-sm">{item.n}</div>
                                        <div>
                                            <p className="font-black text-orange-950 uppercase text-sm tracking-widest mb-1">{item.t}</p>
                                            <p className="text-slate-500 font-medium text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[100px]"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                                alt="Tecnologia Amazolé" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-1000 hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Anchor, 
                                title: "CAMADA 1: DESPIGMENTAÇÃO", 
                                prod: "Sérum Amazolé",
                                desc: "Ativos que penetram na derme e quebram as moléculas de pigmento que formam a mancha escura.",
                                feels: ["1ª aplicação: Pele sedosa", "3 dias: Manchas clareando", "7 dias: Tom muito mais uniforme"],
                                analogia: "É como usar uma borracha mágica que remove a tinta acumulada sem riscar o papel."
                            },
                            { 
                                icon: Layers, 
                                title: "CAMADA 2: RENOVAÇÃO", 
                                prod: "Peeling Enzimático",
                                desc: "Estimula a troca celular acelerada, trazendo uma camada de pele nova e clara para a superfície.",
                                feels: ["Pele iluminada", "Textura de bebê", "Fim das manchas de idade"],
                                analogia: "É como trocar o revestimento de uma parede velha por um porcelanato novo e brilhante."
                            },
                            { 
                                icon: ShieldCheck, 
                                title: "CAMADA 3: BLOQUEIO", 
                                prod: "Escudo Protetor",
                                desc: "Inibe a enzima que cria novas manchas, garantindo que o clareamento seja definitivo.",
                                feels: ["Pele protegida 24h", "Zero efeito rebote", "Viço natural"],
                                analogia: "É como passar um verniz protetor que impede o sol de queimar a madeira novamente."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col p-8 md:p-10 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-500 group">
                                <div className="p-4 bg-[#FDF8F3] rounded-2xl shadow-sm w-fit mb-8 group-hover:scale-110 transition-transform">
                                    <step.icon className="h-8 w-8 text-orange-700" />
                                </div>
                                <div className="space-y-6 flex-1">
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight leading-tight">{step.title}</h4>
                                        <p className="text-xs font-black text-orange-600 uppercase tracking-widest">({step.prod})</p>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                    <div className="space-y-3 pt-4 border-t border-orange-50">
                                        {step.feels.map((feel, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                                <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                                                {feel}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO: DEPOIMENTOS RECEBIMENTO */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-2">Comunidade Amazolé</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                          ENQUANTO VOCÊ LÊ, MILHARES JÁ ESTÃO USANDO ✨
                        </h2>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">Fotos reais enviadas por nossas clientes ao receberem seus kits Amazolé.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DELIVERY_TESTIMONIALS.map((test, i) => (
                            <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-orange-50 transition-all hover:scale-[1.02] hover:shadow-orange-200/30 flex flex-col">
                                <div className="aspect-square relative overflow-hidden border-b border-orange-50">
                                    <img src={test.image} alt="Kit Recebido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-orange-600 shadow-lg"><Verified size={20} /></div>
                                </div>
                                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex gap-1 text-orange-400">
                                            {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed italic text-lg">"{test.text}"</p>
                                    </div>
                                    <div className="pt-6 border-t border-orange-50"><p className="font-black text-orange-900 text-sm uppercase tracking-widest">{test.author}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🚀 NOVA SEÇÃO DE OFERTA COM 3 KITS 🚀 */}
            <section id="pricing" className="py-24 px-6 bg-[#FDF8F3] relative overflow-hidden border-y border-orange-100">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent opacity-50"></div>
                
                <div className="max-w-6xl mx-auto relative z-10 space-y-16">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight uppercase">
                            🚨 ESCOLHA O SEU KIT ABAIXO 🚨
                        </h2>
                        <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
                        <p className="text-slate-500 font-bold text-lg md:text-xl">
                            Frete Grátis e Garantia Blindada em Todos os Kits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {/* KIT 1 FRASCO */}
                        <div className="bg-white border-2 border-orange-100 rounded-[3rem] p-10 text-center space-y-6 flex flex-col hover:border-orange-300 transition-all shadow-sm hover:shadow-xl group">
                            <h3 className="text-2xl font-black leading-tight uppercase">Kit Tratamento <br /> (1 Mês)</h3>
                            <div className="relative inline-block mx-auto">
                                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png" alt="1 frasco" className="w-48 h-auto rounded-2xl mx-auto group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-slate-400 line-through font-bold">R$ 297,00</p>
                                <div className="flex flex-col items-center leading-none">
                                    <p className="text-5xl font-black text-slate-950">R$ 147,00</p>
                                    <p className="text-emerald-600 font-bold text-sm mt-2">à vista no PIX</p>
                                </div>
                                <p className="text-slate-400 font-bold text-xs uppercase mt-4 tracking-widest">Ou 12x de R$ 14,96</p>
                            </div>
                            <Link href={config.checkoutUrl} className="mt-auto" target="_blank">
                                <Button className="w-full h-14 bg-slate-900 hover:bg-black text-white font-black rounded-2xl uppercase tracking-widest text-sm">Comprar Agora</Button>
                            </Link>
                        </div>

                        {/* KIT 3 FRASCOS (MAIS VENDIDO) */}
                        <div className="bg-white border-[6px] border-orange-500 rounded-[3rem] p-10 text-center space-y-6 flex flex-col scale-105 shadow-2xl relative group">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-8 py-2 rounded-full font-black text-sm uppercase shadow-xl tracking-widest">Mais Vendido</div>
                            <h3 className="text-2xl font-black leading-tight uppercase">Kit Reconstrução <br /> (3 Meses)</h3>
                            <div className="relative inline-block mx-auto">
                                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg" alt="3 frascos" className="w-48 h-auto rounded-2xl mx-auto group-hover:scale-105 transition-transform" />
                                <div className="absolute -bottom-2 -right-4 bg-emerald-500 text-white p-2 rounded-xl text-[10px] font-black shadow-lg">ECONOMIA MÁXIMA</div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-slate-400 line-through font-bold">R$ 891,00</p>
                                <div className="flex flex-col items-center leading-none">
                                    <p className="text-6xl font-black text-orange-600">R$ 297,00</p>
                                    <p className="text-emerald-600 font-bold text-sm mt-2">à vista no PIX</p>
                                </div>
                                <p className="text-slate-500 font-bold text-xs uppercase mt-4 tracking-widest">Ou 12x de R$ 30,22</p>
                            </div>
                            <Link href={config.checkoutUrl} className="mt-auto" target="_blank">
                                <Button className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl text-xl uppercase tracking-widest shadow-xl animate-pulse">Quero Este Agora</Button>
                            </Link>
                        </div>

                        {/* KIT 6 FRASCOS (MELHOR CUSTO) */}
                        <div className="bg-white border-2 border-orange-100 rounded-[3rem] p-10 text-center space-y-6 flex flex-col hover:border-orange-300 transition-all shadow-sm hover:shadow-xl group">
                            <h3 className="text-2xl font-black leading-tight uppercase">Kit Renovação <br /> (6 Meses)</h3>
                            <div className="relative inline-block mx-auto">
                                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png" alt="6 frascos" className="w-48 h-auto rounded-2xl mx-auto group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-slate-400 line-through font-bold">R$ 1.782,00</p>
                                <div className="flex flex-col items-center leading-none">
                                    <p className="text-5xl font-black text-slate-950">R$ 447,00</p>
                                    <p className="text-emerald-600 font-bold text-sm mt-2">à vista no PIX</p>
                                </div>
                                <p className="text-slate-400 font-bold text-xs uppercase mt-4 tracking-widest">Ou 12x de R$ 45,46</p>
                            </div>
                            <Link href={config.checkoutUrl} className="mt-auto" target="_blank">
                                <Button className="w-full h-14 bg-slate-900 hover:bg-black text-white font-black rounded-2xl uppercase tracking-widest text-sm">Melhor Custo</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Benefícios de Entrega */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-orange-200">
                        <div className="flex items-center justify-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest">
                            <Truck className="text-orange-600" /> Frete Grátis Todo Brasil
                        </div>
                        <div className="flex items-center justify-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest">
                            <Verified className="text-orange-600" /> Entrega 100% Segura
                        </div>
                        <div className="flex items-center justify-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest">
                            <Zap className="text-orange-600" /> Envio Imediato
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ (PERGUNTAS FREQUENTES) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                        <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {[
                            { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias. Garantia de 7 dias: não funcionou = dinheiro de volta." },
                            { q: "❓ Já tentei outros produtos e não funcionaram. Por que este seria diferente?", a: "Formulação profissional com Biotina + Proteína de Trigo + Pantenol. Produtos comuns mascaram. Este reconstrói a raiz." },
                            { q: "❓ Quanto tempo para ver resultado?", a: "→ 3-5 dias: Queda reduz 40-50%\n→ 7 dias: Queda estanca 80-90%\n→ 14 dias: Fios param de quebrar\n→ 30 dias: Bebês começam a nascer" }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#FDF8F3] border border-orange-50 rounded-2xl px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-white border-t border-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                        <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950">Garantia de Satisfação Amazolé</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">
                            Use o Kit Amazolé por 7 dias. Se você não AMAR o resultado na sua pele, nós devolvemos 100% do seu dinheiro. Sem perguntas.
                        </p>
                        <div className="inline-block px-8 py-2 bg-slate-950 text-orange-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">Compromisso Qualidade Total</div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-30"></div>
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                    <div className="space-y-4 text-center md:text-left">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                            alt="OneBase Logo" 
                            className="h-14 mx-auto md:mx-0"
                        />
                        <p className="text-sm font-black text-orange-800 uppercase tracking-widest">Amazolé | Pele Perfeita</p>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Amazolé - O Poder da Natureza na Sua Pele</p>
                </div>
              </div>
            </footer>

        </div>

        {/* STICKY BAR MOBILE */}
        <MobileStickyBar 
          installmentText={config.installmentText.split('de ')[1] || config.installmentText}
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}