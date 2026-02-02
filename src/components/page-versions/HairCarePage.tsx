"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Heart, 
  Sparkles, 
  Award,
  ShoppingBag,
  DollarSign,
  Home,
  Dumbbell,
  Microscope,
  Truck,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';

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
  const [pricing, setPricing] = useState({ cardPrice: '157,00', pixPrice: '97,00', checkoutUrl: '#' });

  useEffect(() => {
    // Busca os preços dinâmicos
    fetch('/api/settings/hair-care')
      .then(res => res.json())
      .then(data => setPricing(data))
      .catch(e => console.error("Erro ao carregar preços", e));

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
        
        {/* BARRA DE URGÊNCIA */}
        <div className="bg-slate-950 py-2 px-4 text-center border-b border-orange-900/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                Promoção Exclusiva Direto da Indústria
            </p>
            <div className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-orange-900/40 px-4 py-1 rounded-full border border-orange-500/20">
              <Clock size={12} className="text-orange-400" />
              Oferta termina em: <span className="font-mono text-orange-400">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/30 shadow-2xl">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-950 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-800 italic underline decoration-orange-500/30 underline-offset-8">Sem Medo, Sem Vergonha, Sem Desculpas</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 font-medium max-w-2xl leading-relaxed">
              Recupere em 7 dias a força, o brilho e a autoestima que você perdeu - com a mesma tecnologia profissional que salões cobram R$ 500 por sessão.
            </p>

            {/* IMAGEM DO PRODUTO */}
            <div className="relative group max-w-3xl w-full">
              <img 
                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" 
                alt="Kit Cavalo de Raça Bio Instinto" 
                className="rounded-[3rem] relative z-10 mx-auto"
              />
            </div>
          </div>
        </header>

        {/* GALERIA */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                O kit mais Amado do Brasil
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md border border-orange-100">
                   <img src={url} alt={`Galeria ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-32 px-6 bg-white relative">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Sparkles, t: "Bio Instinto Profissional", d: "O mesmo produto que cabeleireiros usam para entregar resultados rápidos." },
                        { icon: Dumbbell, t: "Trata de verdade", d: "Reconstrução real na fibra capilar, tratando o fio de dentro para fora." },
                        { icon: Zap, t: "Resultado na 1ª aplicação", d: "Você sente a diferença no toque e no brilho assim que termina o banho." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-6 p-10 bg-[#FDF8F3] rounded-[3rem] border border-orange-100 transition-all hover:-translate-y-2 group">
                            <div className="p-5 rounded-[1.5rem] bg-white w-fit group-hover:scale-110 transition-transform">
                                <item.icon className="h-8 w-8 text-orange-700" strokeWidth={2.5} />
                            </div>
                            <div className="space-y-3">
                                <p className="font-black text-slate-900 text-xl uppercase tracking-tight leading-tight">{item.t}</p>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* VÍDEOS TIKTOK */}
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">Aperte o Play ✨</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TIKTOK_VIDEOS.map((url, i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-all hover:scale-[1.02]">
                            <iframe src={url} className="absolute inset-0 w-full h-full" frameBorder="0" allowFullScreen allow="autoplay; fullscreen"></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PRICING & OFFER (DINÂMICO) */}
        <section id="pricing" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-16 tracking-tighter leading-none">
                    Qual dessas mulheres você quer ser <br /> <span className="text-orange-700 underline decoration-orange-300">daqui a 7 dias?</span>
                </h2>

                <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl relative border-[6px] border-white space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* OPÇÃO CARTÃO (DINÂMICO) */}
                        <div className="bg-amber-400 p-10 rounded-[3rem] border-4 border-white shadow-xl flex flex-col justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 text-slate-900 font-black text-xs md:text-sm uppercase tracking-[0.3em] opacity-80">
                                <CreditCard size={18} /> Pagamento no Cartão
                            </div>
                            <div className="space-y-1">
                                <p className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">R$ {pricing.cardPrice}</p>
                                <p className="text-sm md:text-base font-black text-slate-900/60 uppercase tracking-widest">Em até 12x sem juros</p>
                            </div>
                        </div>

                        {/* OPÇÃO PIX (DINÂMICO) */}
                        <div className="bg-emerald-600 p-10 rounded-[3rem] border-4 border-white shadow-2xl flex flex-col justify-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-white"><Zap size={80} /></div>
                            <div className="flex items-center justify-center gap-2 text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] relative z-10">
                                <Zap size={14} fill="currentColor" /> Desconto Exclusivo PIX
                            </div>
                            <div className="space-y-1 relative z-10">
                                <div className="flex items-start justify-center gap-1">
                                    <span className="text-2xl font-black text-emerald-100 mt-4">R$</span>
                                    <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">{pricing.pixPrice.split(',')[0]}<span className="text-4xl">,{pricing.pixPrice.split(',')[1] || '00'}</span></span>
                                </div>
                                <p className="text-xs md:text-sm font-black text-emerald-100 uppercase tracking-widest bg-black/10 py-1 rounded-full px-4 inline-block">À vista no PIX</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 py-6 border-y border-slate-100">
                        <p className="text-green-600 font-black text-xs md:text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                            <Truck size={18} /> Frete Grátis Para Todo Brasil
                        </p>
                    </div>

                    <a href={pricing.checkoutUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 group overflow-hidden">
                            <span className="flex items-center gap-4 text-xl md:text-3xl font-black uppercase">
                                <ShoppingBag className="h-6 w-6 md:h-10 md:w-10" />
                                COMPRAR AGORA
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem]">
                    <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                        Use o Kit Cavalo de Raça por 7 dias. Se você não AMAR o resultado, nós devolvemos 100% do seu dinheiro.
                    </p>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
            <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-[0.1em] italic">
                IMPORTANTE: Os resultados podem variar de pessoa para pessoa. Este produto é um cosmético de uso externo.
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
          </div>
        </footer>
      </div>
    </>
  );
}