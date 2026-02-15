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
    text: "Chegou super rápido! Já comecei meu tratamento hoje. O cheiro é maravilhoso e na primeira lavada já senti o cabelo mais firme e cheiroso.",
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
    text: "Chegou voando! Começando o cronograma agora. O perfume fixou no cabelo e já sinto os fios mais resistentes, caiu quase nada no pente hoje.",
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
  const [timeLeft, setTimeLeft] = useState(38010); // ~10h 33min
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

    fetch('/api/page-settings/novoclareador')
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
      <PageTracker contentId="novoclareador" />
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
                        Eleito o melhor Kit de Reconstrução do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Kit de Reconstrução Intensiva - Edição Especial
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span>4.9 | 2322 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50.800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            {config.installmentText}
                        </p>
                    </div>

                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl space-y-2">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">
                            "A transformação que eu precisava... <br />
                            Hoje meu cabelo brilha como nunca."
                        </p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                            Ass: Ana Júlia, Brasília
                        </p>
                    </div>

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
            
            {/* SEÇÃO: MÍDIA */}
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

            {/* RESULTADOS REAIS */}
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
              </div>
            </section>

            {/* SEÇÃO: PÚBLICO-ALVO */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-16">
                        <div className="flex-1 space-y-8">
                            <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                                O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Por R$ 147,00.</span>
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
                            </div>
                        </div>
                        <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                            <img 
                                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                                alt="Mulher Confiante" 
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
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Tecnologia de Ponta</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                            POR QUE ESTE MÉTODO EM <span className="text-orange-700">7 DIAS?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                            TECNOLOGIA TRIPLA ANCORAGEM™
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Anchor, 
                                title: "CAMADA 1: ANCORA A RAIZ", 
                                prod: "Shampoo Reconstrutor",
                                desc: "Remove resíduos químicos que DISSOLVEM a proteção da raiz e deposita aminoácidos que RECONSTROEM a bainha folicular.",
                                feels: ["1ª lavada: Couro cabeludo respira", "3 dias: Fios param de soltar", "7 dias: Raiz firme"],
                                analogia: "É como cimentar um poste que estava solto no chão."
                            },
                            { 
                                icon: Layers, 
                                title: "CAMADA 2: RECONSTRÓI A FIBRA", 
                                prod: "Máscara Intensiva",
                                desc: "Penetra na ESTRUTURA INTERNA do fio com queratina biomimética, unindo pontas quebradas como se fossem soldar.",
                                feels: ["1ª aplicação: Fio fica pesado", "1 semana: Para de ver fios partidos", "2 semanas: Fio DOBRA sem quebrar"],
                                analogia: "É como consertar rachaduras numa parede."
                            },
                            { 
                                icon: ShieldCheck, 
                                title: "CAMADA 3: SELA E PROTEGE", 
                                prod: "Condicionador + Leave-in",
                                desc: "Fecha as cutículas e cria um FILME PROTETOR contra atrito e calor, impedindo que o fio quebre no dia a dia.",
                                feels: ["Imediato: Fio desembaraça sozinho", "3 dias: ZERO eletricidade estática", "1 semana: Escova sem fios no chão"],
                                analogia: "É como envernizar madeira."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col p-8 md:p-10 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                                    <step.icon className="h-8 w-8 text-orange-700" />
                                </div>
                                <div className="space-y-6 flex-1">
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight leading-tight">{step.title}</h4>
                                        <p className="text-xs font-black text-orange-600 uppercase tracking-widest">({step.prod})</p>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                    <div className="mt-auto p-5 bg-[#FDF8F3] rounded-3xl text-xs text-slate-500 italic">
                                        <span className="font-black text-slate-900 not-italic uppercase block mb-1">Analogia:</span>
                                        {step.analogia}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO: FAQ */}
            <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                    </div>

                    <div className="space-y-6">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {[
                                { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias." },
                                { q: "❓ Posso parcelar?", a: "SIM. Em 12x de R$ 14,96 no cartão." },
                                { q: "❓ E se não funcionar?", a: "GARANTIA DE 7 DIAS. Use por 1 semana. Não funcionou? Devolvemos 100% do valor." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                    <AccordionTrigger className="text-left font-bold text-slate-900 py-5">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                        <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                            Use o Kit por 7 dias. Se você não AMAR o resultado, nós devolvemos 100% do seu dinheiro. Sem perguntas.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                    <div className="space-y-4 text-center md:text-left">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                            alt="Logo" className="h-14 mx-auto md:mx-0"
                        />
                        <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
                    </div>
                    <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                        <p>Este conteúdo tem caráter informativo e educacional. Não oferece diagnóstico ou cura de condições de saúde. Resultados podem variar entre indivíduos.</p>
                    </div>
                </div>
                <div className="pt-12 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                    © 2024 Reconstrução Intensiva - Todos os direitos reservados.
                </div>
              </div>
            </footer>

        </div>

        {/* STICKY BAR MOBILE (Seção line 997 duplicada) */}
        <MobileStickyBar 
          installmentText={config.installmentText.split('de ')[1] || config.installmentText}
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}