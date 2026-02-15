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
        
        {/* NAV */}
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <span className="text-2xl font-black tracking-tighter text-emerald-800">AMAZOLÉ</span>
            </div>
        </nav>

        {/* HERO SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
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

                {/* DIREITA: COMPRA */}
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

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">{selectedKit.originalPrice}</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">{selectedKit.discount}</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-slate-950">R$ {selectedKit.price}</span>
                            <span className="text-emerald-600 font-bold text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm italic">
                            ou em até 12x no cartão
                        </p>
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

                    <div className="space-y-6 pt-4">
                        <KitSelector 
                            options={AMAZOLÉ_KITS}
                            selectedId={selectedKit.id}
                            onSelect={setSelectedKit}
                        />

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
            
            {/* MIDIA */}
            <section className="py-12 bg-white border-b border-slate-50 opacity-30 grayscale flex justify-center gap-16 items-center">
                <span className="text-2xl font-black">G1</span><span className="text-2xl font-black italic">R7</span><span className="text-2xl font-black">GLOBO</span><span className="text-2xl font-black underline">SBT</span>
            </section>

            {/* NOVA SEÇÃO: PAIXÃO NACIONAL / RESULTADOS REAIS */}
            <section className="py-24 px-6 bg-white border-b border-orange-100">
              <div className="max-w-6xl mx-auto space-y-16 text-center">
                <div className="space-y-4">
                  <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                    Resultados Reais, Mulheres Reais
                  </h2>
                </div>
                
                {/* GRID DA GALERIA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  {GALLERY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-orange-100 shadow-md hover:shadow-xl transition-all duration-500">
                       <img 
                          src={url} 
                          alt={`Resultado Real ${i + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <p className="text-slate-500 font-medium text-lg italic">
                    Milhares de mulheres compartilhando seus resultados reais todos os dias.
                  </p>
                </div>
              </div>
            </section>

            {/* TRIPLA ANCORAGEM */}
            <section className="py-32 px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">TECNOLOGIA TRIPLA ANCORAGEM™</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Anchor, title: "CAMADA 1: ANCORA A RAIZ", desc: "Reconstrói a bainha folicular e trava o fio na raiz.", analogia: "É como cimentar um poste solto." },
                            { icon: Layers, title: "CAMADA 2: RECONSTRÓI A FIBRA", desc: "Une pontas quebradas com queratina biomimética.", analogia: "É como consertar rachaduras na parede." },
                            { icon: ShieldCheck, title: "CAMADA 3: SELA E PROTEGE", desc: "Fecha as cutículas e protege contra calor e atrito.", analogia: "É como envernizar madeira." }
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

            {/* FAQ COMPLETO */}
            <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2></div>
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">💰 SOBRE O PRODUTO</h3>
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {[
                                    { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias. Garantia de 7 dias: não funcionou = dinheiro de volta." },
                                    { q: "❓ Por que este seria diferente?", a: "Formulação profissional com Biotina + Proteína de Trigo + Pantenol. Reconstroi a raiz em vez de apenas mascarar." },
                                    { q: "❓ Funciona para queda pós-parto?", a: "SIM. Fortalece a raiz enfraquecida pelas mudanças hormônios." },
                                    { q: "❓ Quanto tempo para ver resultado?", a: "3-5 dias: Queda reduz 50%. 7 dias: Queda estanca 90%." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`prod-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6"><AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger><AccordionContent className="text-slate-600 pb-6">{item.a}</AccordionContent></AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* GARANTIA */}
            <section className="py-24 px-6 bg-white border-t border-slate-50 text-center">
                <div className="max-w-4xl mx-auto bg-emerald-50 border-[6px] border-dashed border-emerald-500/30 p-12 md:p-24 rounded-[4rem]">
                    <ShieldCheck className="mx-auto h-24 w-24 text-emerald-700 mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">GARANTIA SATISFAÇÃO OU DINHEIRO DE VOLTA</h2>
                    <p className="text-xl text-slate-600 italic mb-10 max-w-2xl mx-auto">
                        Use o Amazolé por 90 dias inteiros. Se não ver clareamento visível, devolvemos 100% do seu dinheiro. Sem perguntas. Sem enrolação. Porque temos certeza que funciona.
                    </p>
                    <div className="inline-block px-10 py-3 bg-slate-900 text-emerald-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">90 DIAS DE GARANTIA</div>
                </div>
            </section>

            {/* OFERTA FINAL REDESENHADA */}
            <section id="pricing" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
                
                <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                            SUA ÚLTIMA CHANCE DE USAR <br /> <span className="text-emerald-500 italic underline decoration-emerald-500/30">QUALQUER ROUPA SEM MEDO</span>
                        </h2>
                        <p className="text-emerald-400 font-black text-xl animate-pulse">⏰ OFERTA ENCERRA EM: {formatTime(timeLeft)}</p>
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

            {/* FOOTER */}
            <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em]">Avisos e Isenções</h3>
                        <div className="text-xs text-slate-500 leading-relaxed"><p>Este conteúdo tem caráter informativo. Não substitui consulta médica. Os resultados variam de pessoa para pessoa.</p></div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-14 mx-auto md:mx-0" />
                        <div className="text-xs text-slate-500"><p>OneBase | Soluções Digitais</p><p>CNPJ: 60.357.932/0001-18</p></div>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-slate-200"><p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">© 2024 Amazolé - Clareador Natural da Amazônia</p></div>
              </div>
            </footer>
        </div>

        {/* STICKY BAR MOBILE */}
        <MobileStickyBar 
          installmentText="12x de 14,96"
          buttonText="Comprar agora" 
          checkoutUrl={selectedKit.checkoutUrl} 
        />
      </div>
    </>
  );
}