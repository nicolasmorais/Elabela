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

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
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

const KITS = [
    { 
        id: '1-unidade', 
        name: '1 kit', 
        discount: '21% OFF', 
        originalPrice: 'R$ 187,00', 
        price: '147,00', 
        unitPrice: 'R$ 147,00 por kit',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=1'
    },
    { 
        id: '3-unidades', 
        name: '3 kits', 
        discount: '40% OFF', 
        originalPrice: 'R$ 497,00', 
        price: '297,00', 
        unitPrice: 'R$ 99,00 por kit',
        badge: 'Mais Vendido',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=3'
    },
    { 
        id: '6-unidades', 
        name: '6 kits', 
        discount: '55% OFF', 
        originalPrice: 'R$ 994,00', 
        price: '447,00', 
        unitPrice: 'R$ 74,50 por kit',
        badge: 'Melhor Preço',
        badgeColor: 'bg-emerald-500',
        checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=6'
    }
];

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); // ~10h 33min
  const [activeImage, setActiveImage] = useState(GALLERY_IMAGES[0]);
  const [selectedKitId, setSelectedKitId] = useState('3-unidades');

  const [config, setConfig] = useState({
      priceCard: 'R$ 497,00',
      pricePix: '297,00',
      installmentText: 'Em até 12x de R$ 14,96 sem juros',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=3'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig({
                    priceCard: data.priceCard || 'R$ 497,00',
                    pricePix: data.pricePix || '297,00',
                    installmentText: data.installmentText || 'Em até 12x de R$ 14,96 sem juros',
                    buttonText: data.buttonText || 'Comprar agora',
                    checkoutUrl: data.checkoutUrl || 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8&qty=3'
                });
            }
        })
        .catch(e => console.error("Erro ao carregar preços."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  const selectedKit = KITS.find(k => k.id === selectedKitId) || KITS[1];

  return (
    <>
      <PageTracker contentId="antiqueda2" />
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
                <div className="lg:col-span-6 space-y-4">
                    <div className="aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 relative group">
                        <img src={activeImage} alt="Produto Principal" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImage(img)}
                                className={cn(
                                    "aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300",
                                    activeImage === img ? "border-orange-500 shadow-lg scale-105" : "border-slate-100 opacity-60 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA (50%) */}
                <div className="lg:col-span-6 space-y-6">
                    
                    {/* Badge de Destaque */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Kit Antiqueda do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 2322 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">40% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            {config.installmentText}
                        </p>
                    </div>

                    {/* NOVO DEPOIMENTO ABAIXO DO PREÇO */}
                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl space-y-2">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">
                            "Todo Dia Era um Bolo de Cabelo no Pente... <br />
                            Hoje Não Cai Quase Nada."
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Ana Júlia, Brasília
                        </p>
                    </div>

                    {/* BOTÃO COMPRAR AGORA MELHORADO */}
                    <div className="space-y-4 pt-4">
                        <Link href={config.checkoutUrl} target="_blank">
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
                                O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Por R$ 147.</span>
                            </h2>
                            <div className="pt-8 space-y-6">
                                <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "💔 Chora vendo tanto cabelo caindo no ralo",
                                        "💔 Evita passar a mão no cabelo com medo que caia mais",
                                        "💔 Já escondeu o couro cabeludo com truques de penteado",
                                        "💔 Não pode (ou não quer) gastar R$ 500 em dermatologista",
                                        "💔 Trabalha, cuida da casa e não tem tempo para salão toda semana"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                    <p>Porque você merece acordar SEM cabelo no travesseiro.</p>
                                    <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre: Tratar a queda OU pagar as contas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                            <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-10"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Mulher Confiante com Cabelo Lindo" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO COMPLETA: TRIPLA ANCORAGEM */}
            <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Cavalo de Raça</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                            POR QUE ESTE KIT PARA A QUEDA EM <span className="text-orange-600">7 DIAS?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                            TECNOLOGIA TRIPLA ANCORAGEM™
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-orange-50 text-orange-700 rounded-2xl shadow-sm border border-orange-100">
                                    <Microscope size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                            </div>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed">
                                Seu cabelo cai por <span className="text-orange-600 font-black">3 MOTIVOS:</span>
                            </p>
                            <div className="space-y-4">
                                {[
                                    { n: "1", t: "RAIZ ENFRAQUECIDA", d: "Seu folículo não tem força para segurar o peso do fio." },
                                    { n: "2", t: "FIBRA QUEBRADA", d: "O fio está tão seco que parte ao meio antes mesmo de cair." },
                                    { n: "3", t: "PROTEÇÃO DESTRUÍDA", d: "Cutículas abertas deixam o fio solto e vulnerável." }
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
                            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-orange-200 pl-6 py-2">
                                Imagine um cabo de aço tentando segurar um peso enorme enquanto a base está solta no barro. Não importa quão forte seja o cabo, ele vai soltar. Nossa tecnologia "cimenta" a base enquanto reforça o cabo.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[100px]"></div>
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                                alt="Tecnologia Tripla Ancoragem" 
                                className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-1000 hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Anchor, 
                                title: "CAMADA 1: ANCORA A RAIZ", 
                                prod: "Shampoo Reconstrutor",
                                desc: "Remove resíduos químicos que DISSOLVEM a proteção da raiz e deposita aminoácidos que RECONSTROEM a bainha folicular.",
                                feels: ["1ª lavada: Couro cabeludo respira", "3 dias: Fios param de soltar", "7 dias: Raiz firme (Zero quebra)"],
                                analogia: "É como cimentar um poste que estava solto no chão. O fio PARA de cair porque ele está PRESO de verdade."
                            },
                            { 
                                icon: Layers, 
                                title: "CAMADA 2: RECONSTRÓI A FIBRA", 
                                prod: "Máscara Intensiva",
                                desc: "Penetra na ESTRUTURA INTERNA do fio com queratina biomimética, unindo pontas quebradas como se fossem soldar.",
                                feels: ["1ª aplicação: Fio fica pesado", "1 semana: Para de ver fios partidos", "2 semanas: Fio DOBRA sem quebrar"],
                                analogia: "É como consertar rachaduras numa parede. Não adianta pintar. Tem que TAPAR o buraco."
                            },
                            { 
                                icon: ShieldCheck, 
                                title: "CAMADA 3: SELA E PROTEGE", 
                                prod: "Condicionador + Leave-in",
                                desc: "Fecha as cutículas e cria um FILME PROTETOR contra atrito e calor, impedindo que o fio quebre no dia a dia.",
                                feels: ["Imediato: Fio desembaraça sozinho", "3 dias: ZERO eletricidade estática", "1 semana: Escova sem fios no chão"],
                                analogia: "É como envernizar madeira. Protege de água, sol, atrito. Dura MUITO mais."
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
                                    <div className="mt-auto pt-6">
                                        <div className="p-5 bg-[#FDF8F3] rounded-3xl border border-orange-50 text-xs text-slate-500 italic leading-relaxed">
                                            <span className="font-black text-slate-900 not-italic uppercase block mb-1 text-[9px] tracking-widest">Analogia Profissional:</span>
                                            {step.analogia}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO: O QUE VEM NO KIT (DETALHADA) */}
            <section className="py-24 px-6 bg-[#FDF8F3] border-b border-orange-100">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-4 border-white relative overflow-hidden">
                        <div className="space-y-12">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tight">
                                <div className="p-2.5 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-200">
                                    <ShoppingBag size={24} />
                                </div>
                                VOCÊ RECEBE O KIT COMPLETO:
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                {[
                                    { t: "Shampoo Reconstrutor 300ml", d: "Ancora a raiz (fio para de SOLTAR)" },
                                    { t: "Condicionador Fortificante 300ml", d: "Sela cutícula (fio para de QUEBRAR)" },
                                    { t: "Máscara Anti-Queda Intensiva 250g", d: "Reconstrói fibra (fio fica FORTE)" },
                                    { t: "Leave-in Protetor 200ml", d: "Protege estrutura (resultado DURA)" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-14 h-14 shrink-0 bg-[#FDF8F3] rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform shadow-sm">
                                            <span className="text-3xl">🧴</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="font-black text-slate-950 text-xl leading-tight uppercase tracking-tight">{item.t}</p>
                                            <p className="text-slate-400 font-bold text-base leading-tight italic">→ {item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-10 md:gap-16">
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> FRETE GRÁTIS
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> ENVIO IMEDIATO
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> SEGURO DE ENTREGA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🆕 SEÇÃO: POR QUE CAVALO DE RAÇA E OUTROS NÃO? 🆕 */}
            <section className="py-32 px-6 bg-white overflow-hidden border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block">Diferencial Bio Instinto</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                                    POR QUE <span className="text-orange-700 italic">CAVALO DE RAÇA</span> E OUTROS NÃO?
                                </h2>
                                <p className="text-xl text-slate-500 font-bold uppercase tracking-tight">3 Ingredientes Científicos Que Fazem a Diferença</p>
                            </div>

                            <div className="space-y-10 relative">
                                {/* Linha Decorativa Vertical */}
                                <div className="absolute left-6 top-8 bottom-8 w-1 bg-orange-100 -z-10 rounded-full"></div>

                                {[
                                    { 
                                        icon: Anchor, 
                                        n: "1️⃣", 
                                        t: "BIOTINA (Vitamina H)", 
                                        bullets: ["Ancora o fio na raiz", "Reduz queda por enfraquecimento"], 
                                        feel: "Menos fios no ralo em 3 dias" 
                                    },
                                    { 
                                        icon: Dumbbell, 
                                        n: "2️⃣", 
                                        t: "PROTEÍNA DE TRIGO HIDROLISADA", 
                                        bullets: ["Reconstrói fibra capilar", "Preenche \"buracos\" do fio"], 
                                        feel: "Fio 3x mais forte em 1 semana" 
                                    },
                                    { 
                                        icon: Droplets, 
                                        n: "3️⃣", 
                                        t: "PANTENOL (Pró-Vitamina B5)", 
                                        bullets: ["Sela cutículas e protege", "Forma filme protetor"], 
                                        feel: "Escova sem quebra imediata" 
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-white border-2 border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-orange-500 transition-colors">
                                            <item.icon className="h-6 w-6 text-orange-700" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase">{item.t}</h4>
                                            <ul className="space-y-2">
                                                {item.bullets.map((b, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                        <Check size={14} className="text-emerald-500" strokeWidth={4} /> {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100/50 inline-block">
                                                <p className="text-[10px] font-black text-orange-900 uppercase tracking-widest leading-none mb-1">Você Sente:</p>
                                                <p className="text-sm font-bold text-orange-700 leading-none">{item.feel}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-950 rounded-[4rem] p-10 md:p-16 text-white space-y-12 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><FlaskConical size={180} /></div>
                            
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <Microscope className="text-orange-500" />
                                    <h3 className="text-xl font-black uppercase tracking-widest">🔬 FÓRMULA EXCLUSIVA</h3>
                                </div>
                                <div className="h-0.5 w-full bg-white/10"></div>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <h4 className="text-lg font-black uppercase tracking-[0.2em] text-orange-500">✅ MAIS 3 DIFERENCIAIS:</h4>
                                <div className="space-y-6">
                                    {[
                                        "pH Balanceado (não agride raiz)",
                                        "Concentração Profissional (dose terapêutica)",
                                        "Sistema 4 Passos (sinergia completa)"
                                    ].map((diff, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:scale-[2] transition-transform"></div>
                                            <p className="text-xl font-bold tracking-tight text-white/90">{diff}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/10 relative z-10">
                                <div className="bg-orange-600 p-8 rounded-[2.5rem] text-center shadow-xl transform hover:scale-[1.02] transition-transform cursor-default">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-orange-100">RESULTADO COMPROVADO:</p>
                                    <p className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
                                        87% Menos Queda em 7 Dias
                                    </p>
                                    <p className="text-xs font-bold text-orange-200 uppercase tracking-widest">Não é promessa. É ciência aplicada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🆕 SEÇÃO: COMO USAR O KIT CAVALO DE RAÇA 🆕 */}
            <section className="py-32 px-6 bg-[#FDF8F3] relative overflow-hidden border-b border-orange-100">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm">
                            <Play className="h-4 w-4 text-orange-600 fill-current" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">Guia de Aplicação</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">
                            COMO USAR O <span className="text-orange-700">KIT CAVALO DE RAÇA</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                            15 Minutos no Banho = Resultado Profissional
                        </p>
                        <p className="text-sm font-bold text-orange-600 italic">(Tão Fácil Quanto Seu Shampoo Normal)</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* ROTINA DIÁRIA */}
                        <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-orange-50 space-y-10 h-full">
                            <div className="flex items-center gap-4 border-b border-orange-50 pb-6">
                                <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-100">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">ROTINA DIÁRIA</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">(TODO BANHO)</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { n: "1️⃣", t: "SHAMPOO RECONSTRUTOR", d: "Aplique no cabelo molhado, massageie o couro cabeludo até espumar. Enxágue e REPITA (segunda lavada = absorção melhor).", time: "3 minutos" },
                                    { n: "2️⃣", t: "CONDICIONADOR FORTIFICANTE", d: "Aplique do meio às pontas (evite raiz). Deixe agir por 2 minutos e enxágue completamente.", time: "2 minutos" },
                                    { n: "3️⃣", t: "LEAVE-IN PROTETOR", d: "Com o cabelo úmido, espalhe nas mãos e aplique do meio às pontas. NÃO enxágue. Seque normalmente.", time: "1 minuto" }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="h-10 w-10 shrink-0 bg-[#FDF8F3] rounded-xl flex items-center justify-center font-black text-orange-800 text-lg border border-orange-100 group-hover:scale-110 transition-transform">{step.n.replace(/[^\d]/g, '')}</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-black text-slate-950 text-sm uppercase tracking-wider">{step.t}</h4>
                                                <span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full">
                                                    <Clock size={10} /> {step.time}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-orange-50">
                                <div className="bg-slate-950 text-white p-6 rounded-3xl text-center shadow-lg relative overflow-hidden group">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-1">TOTAL DIÁRIO:</p>
                                    <p className="text-4xl font-black tracking-tighter">6 MINUTOS</p>
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform"><Clock size={80} /></div>
                                </div>
                            </div>
                        </div>

                        {/* ROTINA SEMANAL */}
                        <div className="space-y-8 h-full flex flex-col">
                            <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-orange-50 space-y-10 flex-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none rotate-12 text-orange-200"><Sparkles size={180} /></div>
                                
                                <div className="flex items-center gap-4 border-b border-orange-50 pb-6">
                                    <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">ROTINA SEMANAL</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">(2X POR SEMANA)</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex gap-6 group">
                                        <div className="h-10 w-10 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center font-black text-orange-800 text-lg border border-orange-200">4</div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-black text-slate-950 text-lg uppercase tracking-tight">MÁSCARA ANTI-QUEDA</h4>
                                                <span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                                                    <Clock size={12} /> 15 min
                                                </span>
                                            </div>
                                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-none mb-2">(Substitui o condicionador 2x na semana)</p>
                                            <ul className="space-y-3">
                                                {[
                                                    "Após o shampoo, retire o excesso de água",
                                                    "Aplique do comprimento às pontas",
                                                    "Massageie suavemente mecha a mecha",
                                                    "Deixe agir de 10 a 15 minutos",
                                                    "Enxágue completamente"
                                                ].map((li, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                                        <Check size={14} className="text-orange-600" strokeWidth={4} /> {li}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 space-y-3 mt-6">
                                    <div className="flex items-center gap-2 text-orange-900 font-black text-[10px] uppercase tracking-widest">
                                        <Lightbulb size={14} /> DICA EXTRA DE SALÃO:
                                    </div>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                                        Se quiser resultado MÁXIMO, aplique o <strong className="text-orange-800">condicionador após a máscara</strong>. Ele vai selar ainda mais as cutículas e "trancar" o tratamento dentro do fio.
                                    </p>
                                </div>
                            </div>

                            {/* RESUMO SIMPLES */}
                            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 space-y-4 shadow-sm">
                                <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-emerald-500" /> RESUMO SIMPLES:
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Segunda a Domingo:</p>
                                        <p className="text-xs font-bold text-slate-700">Shampoo + Condicionador + Leave-in</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Terça e Sexta (ex):</p>
                                        <p className="text-xs font-bold text-orange-700">Shampoo + MÁSCARA + Leave-in</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-200 text-center">
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Não tem segredo. É seu banho normal + resultado profissional.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VOCÊ RECEBE O KIT COMPLETO CARD */}
                    <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-4 border-white relative overflow-hidden">
                        <div className="space-y-12">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tight">
                                <div className="p-2.5 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-200">
                                    <ShoppingBag size={24} />
                                </div>
                                VOCÊ RECEBE O KIT COMPLETO:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                {[
                                    { t: "Shampoo Reconstrutor 300ml", d: "Ancora a raiz (fio para de SOLTAR)" },
                                    { t: "Condicionador Fortificante 300ml", d: "Sela cutícula (fio para de QUEBRAR)" },
                                    { t: "Máscara Anti-Queda Intensiva 250g", d: "Reconstrói fibra (fio fica FORTE)" },
                                    { t: "Leave-in Protetor 200ml", d: "Protege estrutura (resultado DURA)" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-14 h-14 shrink-0 bg-[#FDF8F3] rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform shadow-sm">
                                            <span className="text-3xl">🧴</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="font-black text-slate-950 text-xl leading-tight uppercase tracking-tight">{item.t}</p>
                                            <p className="text-slate-400 font-bold text-base leading-tight italic">→ {item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-10 md:gap-16">
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> FRETE GRÁTIS
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> ENVIO IMEDIATO
                                </div>
                                <div className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                    <CheckCircle2 size={20} className="text-emerald-500" /> SEGURO DE ENTREGA
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* POTENCIALIZAR RESULTADOS */}
                    <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-orange-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tight">
                                    <Lightbulb className="text-orange-500" /> DICAS PARA POTENCIALIZAR O RESULTADO:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        { t: "SHAMPOO EM DOBRO", d: "Sempre repita o shampoo (2ª lavada limpa PROFUNDO)." },
                                        { t: "ENXÁGUE FRIO", d: "Use água morna/fria no enxágue final para fechar as cutículas." },
                                        { t: "NÃO PULE A MÁSCARA", d: "É o tratamento intensivo. Não abra mão das 2x por semana." },
                                        { t: "LEAVE-IN SEMPRE", d: "Ele é o escudo que protege o fio reconstruído do calor e atrito." }
                                    ].map((tip, i) => (
                                        <div key={i} className="space-y-1">
                                            <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest leading-none mb-1 flex items-center gap-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-orange-600"></div> {tip.t}
                                            </p>
                                            <p className="text-sm text-slate-500 font-medium leading-tight">{tip.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#FDF8F3] p-10 rounded-[3rem] border border-orange-100 space-y-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12 text-slate-950 group-hover:scale-110 transition-transform"><ShieldAlert size={120} /></div>
                                <h4 className="text-lg font-black text-orange-950 uppercase tracking-widest flex items-center gap-2">
                                    <Info size={18} className="text-orange-700" /> INFORMAÇÕES IMPORTANTES:
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Produtos rendem 2-3 MESES de uso regular",
                                        "Use TODOS os 4 produtos (trabalham em sinergia)",
                                        "Não substitua por outros (quebra o ciclo de tratamento)",
                                        "Consistência é a chave: 7 dias para ver, 30 para transformar"
                                    ].map((li, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700 leading-snug">
                                            <div className="mt-1"><AlertCircle size={16} className="text-orange-800" /></div>
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO: DEPOIMENTOS RECEBIMENTO */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-2">Comunidade Cavalo de Raça</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                          ENQUANTO VOCÊ LÊ, MILHARES JÁ ESTÃO USANDO ✨
                        </h2>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">Fotos reais enviadas por nossas clientes ao receberem seus kits Cavalo de Raça.</p>
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

            {/* SEÇÃO: FAQ (PERGUNTAS FREQUENTES) */}
            <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                        <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {/* SOBRE O PRODUTO */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">💰 SOBRE O PRODUTO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias. Garantia de 7 dias: não funcionou = dinheiro de volta." },
                                    { q: "❓ Já tentei outros produtos e não funcionaram. Por que este seria diferente?", a: "Formulação profissional com Biotina + Proteína de Trigo + Pantenol. Produtos comuns mascaram. Este reconstrói a raiz." },
                                    { q: "❓ Funciona para queda pós-parto?", a: "SIM. É quando mais funciona. Fortalece raiz enfraquecida pelos hormônios." },
                                    { q: "❓ Funciona para queda por estresse?", a: "SIM. Fortalece a raiz independente da causa." },
                                    { q: "❓ Tenho couro cabeludo oleoso/seco. Posso usar?", a: "PODE. pH balanceado para todos os tipos." },
                                    { q: "❓ Quanto tempo para ver resultado?", a: "→ 3-5 dias: Queda reduz 40-50%\n→ 7 dias: Queda estanca 80-90%\n→ 14 dias: Fios param de quebrar\n→ 30 dias: Bebês começam a nascer" },
                                    { q: "❓ Preciso usar para sempre?", a: "NÃO. Após 2-3 meses intensivos, pode fazer manutenção 2-3x por semana." },
                                    { q: "❓ Funciona para calvície?", a: "Se você ainda TEM cabelo, funciona. Fortalece raiz viva. Calvície total (sem raiz) = Não resolve." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`produto-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* SOBRE PREÇO E PAGAMENTO */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">💳 SOBRE PREÇO E PAGAMENTO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Por que R$ 127?", a: "Venda direta da indústria. Sem intermediários. Sem markup. Preço normal em salões: R$ 297" },
                                    { q: "❓ Posso parcelar?", a: "SIM. Até 12x de R$ 12,25 sem juros. Ou R$ 127 no PIX (desconto aplicado)." },
                                    { q: "❓ Tem desconto maior?", a: "NÃO. Este é o menor preço possível. De R$ 297 por R$ 127 = 57% OFF" },
                                    { q: "❓ E se não funcionar?", a: "GARANTIA DE 7 DIAS. Use por 1 semana. Não funcionou? Devolvemos 100% do valor. Sem perguntas. Sem burocracia." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`pagamento-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* SOBRE ENTREGA */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">📦 SOBRE ENTREGA</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Frete é grátis?", a: "SIM. Para todo o Brasil. Rastreio + Seguro inclusos." },
                                    { q: "❓ Quanto tempo para chegar?", a: "→ Sudeste/Sul: 3-7 dias úteis\n→ Demais regiões: 5-12 dias úteis\nEnvio em até 24h úteis após confirmação." },
                                    { q: "❓ É seguro comprar?", a: "SIM.\n✅ Certificado SSL\n✅ Checkout seguro\n✅ Nota fiscal\n✅ CNPJ ativo" }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`entrega-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* SOBRE USO */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">🧴 SOBRE USO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ É difícil de usar?", a: "NÃO. Banho normal:\n1. Shampoo (3 min)\n2. Condicionador (2 min)\n3. Leave-in (1 min)\n4. Máscara 2x/semana (15 min)" },
                                    { q: "❓ Quanto tempo dura o kit?", a: "2 a 3 meses de uso normal.\nR$ 127 ÷ 75 dias = R$ 1,69/dia" },
                                    { q: "❓ Preciso usar os 4 produtos?", a: "SIM. Eles trabalham juntos:\n→ Shampoo: Ancora raiz\n→ Condicionador: Sela cutícula\n→ Máscara: Reconstrói fibra\n→ Leave-in: Protege\nUsar só alguns = Resultado pela metade." },
                                    { q: "❓ Posso misturar com outros produtos?", a: "NÃO RECOMENDAMOS. Quebra a sinergia dos 4 produtos. Use APENAS o kit por 30 dias. Depois você decide." },
                                    { q: "❓ Tenho química no cabelo. Posso usar?", a: "PODE. E deve. Química enfraquece. Kit reconstrói." },
                                    { q: "❓ Grávida pode usar?", a: "Produtos de uso externo = Seguro. Mas consulte seu médico antes." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`uso-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* SOBRE ESTOQUE */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">⚠️ SOBRE ESTOQUE</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ \"Últimas unidades\" é verdade?", a: "SIM. Produção em lotes pequenos. Alta demanda. Quando acaba = Acaba." },
                                    { q: "❓ Posso comprar depois?", a: "PODE. Mas:\n→ Preço volta para R$ 297\n→ Frete deixa de ser grátis\n→ Esta oferta não se repete" },
                                    { q: "❓ Ainda tenho dúvidas. Como falar com vocês?", a: "📧 contato@cavalo-de-raca.pro\nResposta em até 24h úteis." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`estoque-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    <div className="mt-16 bg-white border-2 border-orange-500 border-dashed p-8 md:p-12 rounded-[3rem] text-center space-y-6">
                        <div className="mx-auto w-16 h-16 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">GARANTIA TOTAL DE 7 DIAS</h4>
                        <p className="text-lg text-slate-600 font-medium italic">
                            Use o kit por 1 semana. Não ver resultado? Devolvemos 100%. <br />
                            <strong className="text-orange-800 uppercase not-italic">O risco é TODO nosso.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO: GARANTIA (ORIGINAL) */}
            <section className="py-24 px-6 bg-white border-t border-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                        <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">
                            Use o Kit Cavalo de Raça por 7 dias. Se você não AMAR o resultado, nós devolvemos 100% do seu dinheiro. Sem perguntas. Porque temos certeza que você vai se apaixonar.
                        </p>
                        <div className="inline-block px-8 py-2 bg-slate-950 text-orange-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">Compromisso Bio Instinto</div>
                    </div>
                </div>
            </section>

            {/* FOOTER COMPLETO COM POLÍTICAS */}
            <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-orange-950 uppercase tracking-[0.2em]">Avisos e Isenções de Responsabilidade</h3>
                        <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                            <div>
                                <p className="font-bold text-slate-700 mb-1">Isenção de Responsabilidade</p>
                                <p>Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar any mudança na dieta, no consumo de chás, suplementos ou rotina de bem-estar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="OneBase Logo" className="h-14 mx-auto md:mx-0" />
                        <div className="space-y-2">
                            <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
                            <p className="text-xs text-slate-500 leading-relaxed">E-Business Rio Verde | Aparecida de Goiania - GO<br />CNPJ: 60.357.932/0001-18</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start mb-20">
                  <div className="space-y-6 text-center md:text-left">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Links Úteis</p>
                    <nav className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <Dialog>
                            <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Termos e Condições</button></DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                                <DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader>
                                <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                                    <p>Ao acessar este site, o usuário concorda que todo o conteúdo exibido possui caráter exclusivamente informativo.</p>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Privacidade</button></DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                                <DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader>
                                <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                                    <p>Valorizamos sua privacidade. Suas informações são protegidas.</p>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </nav>
                  </div>
                </div>

                <div className="pt-12 border-t border-slate-200 space-y-8">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-[0.1em] text-center italic"><strong>IMPORTANTE:</strong> Os resultados podem variar de pessoa para pessoa.</p>
                        <div className="flex flex-col items-center gap-4"><p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Cavalo de Raça</p></div>
                    </div>
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