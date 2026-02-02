"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, Star, Clock, ShieldCheck, Zap, Sparkles, Award, ShoppingBag, CreditCard, Truck, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896113265-ChatGPT-Image-31-de-jan.-de-2026,-18_44_47.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896125840-Gemini_Generated_Image_kw7t7bkw7t7bkw7t-(1).png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896189867-ChatGPT-Image-31-de-jan.-de-2026,-18_49_38.png"
];

const TIKTOK_VIDEOS = [
  "https://vhost.onebasex.pro/video/1769896865284-ssstik.io_%40renatadelpasso_1769896654074.mp4",
  "https://vhost.onebasex.pro/video/1769897057244-ssstik.io_%40donademim_pvh_1769896463897.mp4",
  "https://vhost.onebasex.pro/video/1769897045880-ssstik.io_%40studioestefaniribeiro_1769896850804.mp4"
];

export function HairCarePage() {
  const [timeLeft, setTimeLeft] = useState(1194);
  const [config, setConfig] = useState({ priceCard: 'R$ 157,00', pricePix: '97,00', checkoutUrl: '#' });

  useEffect(() => {
    // Carregar preços dinâmicos
    fetch('/api/settings/haircare')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(e => console.error("Erro ao carregar preços"));

    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="cavalo-de-raca" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        <div className="bg-slate-950 py-2 px-4 text-center border-b border-orange-900/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">PROMOÇÃO EXCLUSIVA DIRETO DA INDÚSTRIA</p>
            <div className="hidden md:flex items-center gap-2 text-white text-xs font-bold bg-orange-900/40 px-4 py-1 rounded-full">
              <Clock size={12} className="text-orange-400" /> Oferta termina em: <span className="font-mono text-orange-400">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        <header className="relative pt-12 md:pt-24 pb-20 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-black uppercase mb-8">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">Solte Esse Cabelo <span className="text-orange-800 italic">Sem Medo</span></h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">Recupere em 7 dias a força e o brilho que você perdeu com a mesma tecnologia profissional de salões.</p>
            <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" className="mx-auto max-w-3xl w-full" alt="Produto" />
          </div>
        </header>

        {/* ... Restante da página permanece visualmente idêntico ... */}
        
        <section id="pricing" className="py-24 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-16 tracking-tighter">
                    Qual dessas mulheres você quer ser <span className="text-orange-700 underline decoration-orange-300">daqui a 7 dias?</span>
                </h2>

                <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl relative border-[6px] border-white space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* PREÇO CARTÃO - DINÂMICO */}
                        <div className="bg-amber-400 p-10 rounded-[3rem] border-4 border-white shadow-xl flex flex-col justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest opacity-80">
                                <CreditCard size={18} /> Pagamento no Cartão
                            </div>
                            <div className="space-y-1">
                                <p className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">{config.priceCard}</p>
                                <p className="text-xs font-black text-slate-900/60 uppercase">Em até 12x sem juros</p>
                            </div>
                        </div>

                        {/* PREÇO PIX - DINÂMICO */}
                        <div className="bg-emerald-600 p-10 rounded-[3rem] border-4 border-white shadow-2xl flex flex-col justify-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-white"><Zap size={80} /></div>
                            <div className="flex items-center justify-center gap-2 text-white font-black text-xs uppercase tracking-widest relative z-10">
                                <Zap size={14} fill="currentColor" /> Desconto Exclusivo PIX
                            </div>
                            <div className="space-y-1 relative z-10">
                                <div className="flex items-start justify-center gap-1">
                                    <span className="text-2xl font-black text-emerald-100 mt-4">R$</span>
                                    <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">{config.pricePix}</span>
                                </div>
                                <p className="text-xs font-black text-emerald-100 uppercase bg-black/10 py-1 rounded-full px-4 inline-block">À vista no PIX</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12 bg-[#FDF8F3] p-8 rounded-[2.5rem] border border-orange-100">
                        {["Kit Completo 4 Passos", "Frascos Profissionais", "Tratamento para 3 meses", "Garantia Total de 7 Dias", "Bio Instinto Original"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                                <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={16} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* LINK DE COMPRA - DINÂMICO */}
                    <a href={config.checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 group">
                            <div className="flex flex-col items-center">
                                <span className="flex items-center gap-4 text-xl md:text-3xl font-black">
                                    <ShoppingBag className="h-6 w-6 md:h-10 md:w-10" />
                                    COMPRAR AGORA
                                </span>
                            </div>
                        </Button>
                    </a>

                    <div className="flex flex-wrap justify-center gap-8 opacity-30 grayscale text-[10px] font-black tracking-widest">
                        <div className="flex items-center gap-2"><ShieldCheck size={20} /> ORIGINAL</div>
                        <div className="flex items-center gap-2"><Zap size={20} /> ENVIO EXPRESS</div>
                        <div className="flex items-center gap-2"><CreditCard size={20} /> PIX / CARTÃO</div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="py-20 bg-[#FDF8F3] text-center border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
            <p className="text-[10px] text-slate-400 uppercase leading-relaxed italic max-w-4xl mx-auto">
                IMPORTANTE: Os resultados podem variar de pessoa para pessoa. Este produto é um cosmético de uso externo e não garante cura de condições patológicas.
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
          </div>
        </footer>
      </div>
    </>
  );
}