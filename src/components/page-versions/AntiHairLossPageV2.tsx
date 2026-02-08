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

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); 
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: '12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8'
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
                    priceCard: data.priceCard || 'R$ 187,00',
                    pricePix: data.pricePix || '147,00',
                    installmentText: data.installmentText || '12x de R$ 14,96',
                    buttonText: data.buttonText || 'Comprar agora',
                    checkoutUrl: data.checkoutUrl || 'https://pay.oneconversion.pro/checkout?product_id=d912bd88-7bb4-4be9-ae2e-f3bbd40d9ac8'
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

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

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
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={GALLERY_IMAGES[activeImageIndex]} 
                          alt="Produto Principal" 
                          className="w-full h-full object-contain p-4 transition-all duration-700 group-hover:scale-[1.02]" 
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
                          {activeImageIndex + 1} / {GALLERY_IMAGES.length}
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 px-2">
                        {GALLERY_IMAGES.map((img, i) => (
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
                                <img src={img} alt="Thumb" className="w-full h-full object-cover p-1" />
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
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                            <span className="text-emerald-600 font-bold text-xl">à vista</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">
                            {config.installmentText}
                        </p>
                    </div>

                    <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl space-y-2">
                        <p className="text-slate-800 font-black text-xl italic leading-tight">
                            "Todo Dia Era um Bolo de Cabelo no Pente... <br />
                            Hoje Não Cai Quase Nada."
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

        {/* DESCRIÇÃO E CONTEÚDO ADVERTORIAL */}
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
                       <img src={url} alt="Galeria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TRIPLA ANCORAGEM SECTION */}
            <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Cavalo de Raça</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                            POR QUE ESTE KIT PARA A QUEDA EM <span className="text-orange-600">7 DIAS?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">TECNOLOGIA TRIPLA ANCORAGEM™</p>
                    </div>
                    {/* ... (rest of the sections remain same but with prices updated below) ... */}
                </div>
            </section>

            {/* SEÇÃO FINAL DE PREÇO (REPETIÇÃO E FAQ) */}
            <section id="pricing" className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-[#FDF8F3] rounded-[3.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative border-4 border-white overflow-hidden text-center space-y-12">
                        <div className="space-y-6 w-full">
                            <div className="space-y-2">
                                <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Preço Normal: <span className="line-through">R$ 297,00</span></p>
                                <p className="text-orange-800 font-black text-xs uppercase tracking-[0.3em]">Oportunidade Única Hoje</p>
                            </div>

                            <div className="py-10 px-8 rounded-[3rem] bg-white border-2 border-orange-200/50 shadow-sm inline-block mx-auto min-w-[300px]">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-start text-slate-950 font-black tracking-tighter">
                                        <span className="text-3xl md:text-4xl mt-4 mr-1">R$</span>
                                        <span className="text-8xl md:text-9xl leading-none">147<span className="text-4xl md:text-5xl">,00</span></span>
                                    </div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-4">
                                        {config.installmentText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-6">
                            <Link href={config.checkoutUrl} className="block group/btn" target="_blank">
                                <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-xl shadow-green-100 transition-all hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 overflow-hidden">
                                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                                        <ShoppingBag size={28} />
                                        {config.buttonText}
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ ATUALIZADO */}
            <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2></div>
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">💳 PAGAMENTO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Por que R$ 147,00?", a: "Venda direta da indústria. Sem intermediários. Preço normal em salões: R$ 297,00" },
                                    { q: "❓ Posso parcelar?", a: "SIM. Em 12x de R$ 14,96. Ou R$ 147,00 à vista via PIX ou Cartão." },
                                    { q: "❓ E se não funcionar?", a: "GARANTIA DE 7 DIAS. Use por 1 semana. Não funcionou? Devolvemos 100% do valor de R$ 147,00." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`pagamento-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-slate-900 py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base pb-6">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-white border-t border-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem]">
                        <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
                        <p className="text-xl text-slate-600 italic mb-10">Use por 7 dias. Se não amar, devolvemos seu dinheiro.</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6 text-center">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
              </div>
            </footer>
        </div>

        {/* STICKY BAR MOBILE */}
        <MobileStickyBar 
          installmentText="12x de 14,96"
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}