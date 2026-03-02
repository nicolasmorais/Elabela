"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Award,
  ShoppingBag,
  Microscope,
  Anchor,
  Layers,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Info,
  AlertCircle,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png"
];

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772412756942-Gemini_Generated_Image_6eit2k6eit2k6eit.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772417287492-unnamed-(6).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772416572105-unnamed-(5)-(1).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772414134566-722f3359e9000ba0c1cb3cba3384328c-(1).jpg"
];

export function AntiHairLossPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: '12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${m}m`;
  };

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-slate-900 font-sans antialiased min-h-screen">
        
        {/* BARRA DE FRETE NO TOPO */}
        <div className="bg-slate-900 text-white py-2 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          FRETE GRÁTIS PARA TODO BRASIL
        </div>

        {/* NAVIGATION */}
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-8" />
            </div>
        </nav>

        {/* HERO / PRODUCT SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA (50%) */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group">
                        <img src={PRODUCT_IMAGES[activeImageIndex]} alt="Produto" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-slate-900/80 text-white text-[10px] font-black px-3 py-1 rounded-full">{activeImageIndex + 1} / {PRODUCT_IMAGES.length}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button key={i} onClick={() => setActiveImageIndex(i)} className={cn("aspect-square rounded-2xl overflow-hidden border-2 transition-all", activeImageIndex === i ? "border-orange-500 scale-105" : "border-slate-100 opacity-60")}>
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white"><Award size={14} /></div> Eleito o melhor Kit Antiqueda do Brasil
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva</h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                            <span>4.9 | 2.322 avaliações 5 estrelas</span>
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
                            <Button className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-4" style={{ backgroundColor: '#35c867' }}>
                                <ShoppingBag size={28} /> {config.buttonText} <ArrowRight size={28} />
                            </Button>
                        </Link>
                        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
                            <div className="bg-emerald-500 text-white p-2 rounded-lg"><Zap size={20} fill="currentColor" /></div>
                            <div><p className="text-xs font-black text-slate-900 uppercase">ENTREGA ACELERADA</p><p className="text-[10px] font-bold text-slate-500">Envio hoje se comprar em <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* RESULTADOS REAIS - 1:1 */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                Resultados Reais
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md border border-orange-100">
                   <img src={url} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO OCULTA (A PEDIDO) */}
        <section className="hidden py-24 px-6 bg-slate-50">
            {/* Imagem que estava na linha 395 foi ocultada via classe 'hidden' no pai */}
        </section>

        {/* TRIPLA ANCORAGEM */}
        <section className="py-32 px-6 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">TECNOLOGIA TRIPLA ANCORAGEM™</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Anchor, title: "CAMADA 1: ANCORA A RAIZ", desc: "Aminoácidos que travam o fio no folículo.", analogia: "É como cimentar um poste solto." },
                        { icon: Layers, title: "CAMADA 2: RECONSTRÓI A FIBRA", desc: "Queratina biomimética que une pontas quebradas.", analogia: "É como consertar rachaduras na parede." },
                        { icon: ShieldCheck, title: "CAMADA 3: SELA E PROTEGE", desc: "Fecha as cutículas contra calor e atrito.", analogia: "É como envernizar madeira." }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl transition-all group">
                            <div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform"><step.icon className="h-8 w-8 text-orange-700" /></div>
                            <h4 className="text-xl font-black text-slate-950 uppercase mb-4">{step.title}</h4>
                            <p className="text-sm text-slate-500 mb-6 font-medium">{step.desc}</p>
                            <div className="mt-auto p-5 bg-[#FDF8F3] rounded-3xl text-xs text-slate-500 italic"><strong>Analogia:</strong> {step.analogia}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2></div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                    {[
                        { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias." },
                        { q: "❓ Quanto tempo para ver resultado?", a: "3-5 dias: Queda reduz 50%. 7 dias: Queda estanca 90%." },
                        { q: "❓ Frete é grátis?", a: "SIM. Para todo o Brasil." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6"><AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger><AccordionContent className="text-slate-600 pb-6">{item.a}</AccordionContent></AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-14 mx-auto mb-8" />
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
          </div>
        </footer>

      </div>
    </>
  );
}