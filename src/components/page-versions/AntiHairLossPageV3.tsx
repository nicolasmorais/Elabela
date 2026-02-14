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

export function AntiHairLossPageV3() {
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
      .catch(() => {});

    // Busca configurações específicas para o novo slug
    fetch('/api/page-settings/antiqueda3')
        .then(res => res.json())
        .then(data => {
            if (data && data.checkoutUrl) {
                setConfig(prev => ({ ...prev, ...data }));
            }
        });

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  const nextImage = () => { setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length); };
  const prevImage = () => { setActiveImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length); };

  return (
    <>
      <PageTracker contentId="antiqueda3" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-8" />
            </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hidden md:block"><ChevronLeft size={24} /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hidden md:block"><ChevronRight size={24} /></button>
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">{activeImageIndex + 1} / {PRODUCT_IMAGES.length}</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-orange-500 scale-105" : "border-slate-100 opacity-60")}><img src={img} alt="Thumb" className="w-full h-full object-cover" /></button>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white"><Award size={14} /></div> Eleito o melhor Kit Antiqueda do Brasil
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva</h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                            <span>4.9 | 2322 avaliações 5 estrelas</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3"><span className="text-slate-400 line-through text-lg">{config.priceCard}</span><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span></div>
                        <div className="flex items-baseline gap-2 leading-none"><span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span><span className="text-emerald-600 font-bold text-xl">no pix</span></div>
                        <p className="text-slate-500 font-medium text-sm">{config.installmentText}</p>
                    </div>
                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">"Todo Dia Era um Bolo de Cabelo no Pente... Hoje Não Cai Quase Nada."</p>
                    </div>
                    <div className="space-y-4 pt-4">
                        <Link href={config.checkoutUrl} target="_blank">
                            <Button className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-4 group" style={{ backgroundColor: '#35c867' }}>
                                <ShoppingBag size={28} /> {config.buttonText} <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
                            <div className="bg-emerald-500 text-white p-2 rounded-lg"><Zap size={20} fill="currentColor" /></div>
                            <div><p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL</p><p className="text-[10px] font-bold text-slate-500">Envio imediato se comprar em <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* --- DESCRIÇÃO --- */}
        <div className="border-t border-slate-100 bg-white">
            <section className="py-24 px-6 bg-white border-b border-orange-100">
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">Resultados Reais</h2>
                  <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {GALLERY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-orange-100"><img src={url} alt="Resultado" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" /></div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-32 px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="text-center"><h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">TECNOLOGIA TRIPLA ANCORAGEM™</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Anchor, title: "CAMADA 1: ANCORA A RAIZ", desc: "Reconstrói a bainha folicular e trava o fio.", analogia: "Cimentar um poste solto." },
                            { icon: Layers, title: "CAMADA 2: RECONSTRÓI A FIBRA", desc: "Une pontas quebradas com queratina.", analogia: "Consertar rachaduras na parede." },
                            { icon: ShieldCheck, title: "CAMADA 3: SELA E PROTEGE", desc: "Fecha as cutículas e protege contra calor.", analogia: "Envernizar madeira." }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform"><step.icon className="h-8 w-8 text-orange-700" /></div>
                                <h4 className="text-xl font-black text-slate-950 uppercase mb-4">{step.title}</h4>
                                <p className="text-sm text-slate-500 mb-6">{step.desc}</p>
                                <div className="mt-auto p-5 bg-[#FDF8F3] rounded-3xl text-xs text-slate-500 italic"><strong>Analogia:</strong> {step.analogia}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO: DEPOIMENTOS RECEBIMENTO */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">CLIENTES RECEBENDO ✨</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {DELIVERY_TESTIMONIALS.map((test, i) => (
                            <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-orange-50 flex flex-col">
                                <div className="aspect-square relative"><img src={test.image} className="absolute inset-0 w-full h-full object-cover" /></div>
                                <div className="p-8 space-y-4">
                                    <div className="flex gap-1 text-orange-400">{[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}</div>
                                    <p className="text-slate-600 italic">"{test.text}"</p>
                                    <p className="font-black text-orange-900 text-sm uppercase">{test.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-14 mx-auto mb-8" />
                <p className="text-xs text-slate-500">© 2024 Cavalo de Raça - Original Bio Instinto</p>
              </div>
            </footer>
        </div>

        <MobileStickyBar installmentText="12x de 14,96" buttonText={config.buttonText} checkoutUrl={config.checkoutUrl} />
      </div>
    </>
  );
}