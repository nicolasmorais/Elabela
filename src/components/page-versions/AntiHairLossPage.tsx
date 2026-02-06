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
  CreditCard
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
import { ScrollArea } from "@/components/ui/scroll-area";

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

export function AntiHairLossPage() {
  // ESTADO DA LOCALIZAÇÃO
  const [city, setCity] = useState('');

  // ESTADO DOS DADOS DINÂMICOS
  const [config, setConfig] = useState({
      priceCard: 'R$ 157,00',
      pricePix: '97,00',
      installmentText: 'Parcelamento em até 12x',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: '#'
  });

  useEffect(() => {
    // Busca a cidade da usuária
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setCity(data.city);
      })
      .catch(() => console.log("Não foi possível detectar a cidade."));

    // Busca configurações do banco
    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig({
                    priceCard: data.priceCard || 'R$ 157,00',
                    pricePix: data.pricePix || '97,00',
                    installmentText: data.installmentText || 'Parcelamento em até 12x',
                    buttonText: data.buttonText || 'COMPRAR AGORA',
                    checkoutUrl: data.checkoutUrl || '#'
                });
            }
        })
        .catch(e => console.error("Erro ao carregar preços."));
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageTracker contentId="antiqueda" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* BARRA DE AVISO DINÂMICA - REFINADA MOBILE */}
        <div className="bg-[#0C0A09] py-2.5 px-4 text-center border-b border-orange-500/10 sticky top-0 z-50 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)]">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-3">
            {/* Ponto de Alerta Estilizado */}
            <div className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            </div>
            
            <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-orange-200/90 leading-tight">
                Mais de 4.000 mulheres de <span className="text-white border-b border-emerald-500/60 pb-0.5 mx-0.5 transition-all">{city ? city : 'sua região'}</span> e região já compraram nosso kit
            </p>
          </div>
        </div>

        {/* HERO SECTION - REFINED TOP AREA */}
        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden bg-white">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_var(--tw-gradient-stops))] from-orange-50/60 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
            {/* Authority Badge - Refined with Gold Glow */}
            <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#1A120B] text-orange-200 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-12 border border-orange-800/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] group hover:border-orange-500/50 transition-colors duration-500 animate-in fade-in slide-in-from-top-4 duration-1000">
                <div className="bg-gradient-to-br from-orange-400 to-orange-700 p-1.5 rounded-full text-white shadow-inner group-hover:rotate-12 transition-transform duration-500">
                    <Award size={14} fill="currentColor" />
                </div>
                <span className="drop-shadow-sm">+12.847 Mulheres Estancaram a Queda em 1 Semana</span>
            </div>
            
            {/* Headline - Enhanced Contrast and Impact */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tighter text-slate-950 mb-8 max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              "Via Montes de Cabelo no Ralo Todo Dia... 🚿 <br /> 
              <span className="text-orange-800 italic relative inline-block">
                Hoje Não Cai Quase Nada. Eu Não Acreditei."
                <span className="absolute -bottom-1 left-0 w-full h-[8px] bg-orange-200/40 -z-10 rounded-full blur-[1px]"></span>
              </span> 😱✨
            </h1>

            {/* Testimonial Author Citation - Keep same position but refine typography */}
            <div className="flex items-center gap-4 mb-14 animate-in fade-in duration-1000 delay-500">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-slate-200"></div>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] drop-shadow-sm">
                   Ana Júlia, 41 anos, Brasília
                </p>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-slate-200"></div>
            </div>
            
            {/* Sub-headline - PRESERVED AS REQUESTED */}
            <div className="bg-orange-50/50 backdrop-blur-sm px-8 py-4 rounded-3xl border border-orange-100/50 mb-16">
                <p className="text-lg md:text-2xl text-slate-700 font-medium max-w-3xl leading-relaxed">
                  O Kit Bio Instinto que Ana usou estanca <strong className="text-orange-900 font-black">87% da queda em 7 dias</strong> reconstruindo a raiz que shampoos comuns destroem...
                </p>
            </div>

            {/* PRODUCT IMAGE BLOCK - PRESERVED AS REQUESTED */}
            <div className="relative group max-w-4xl w-full">
              <div className="absolute inset-0 bg-orange-400/10 blur-[80px] rounded-full scale-75 pointer-events-none"></div>
              <div className="relative z-10 p-2 bg-gradient-to-b from-white via-white to-orange-50/30 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                  <img 
                    src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                    alt="Kit Bio Instinto Antiqueda" 
                    className="rounded-[3.5rem] mx-auto w-full h-auto"
                  />
              </div>

              <div className="absolute -top-6 -right-4 md:right-0 transform lg:translate-x-1/2 z-20">
                 <div className="bg-white p-5 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border-2 border-orange-100 flex flex-col items-center gap-1 animate-bounce">
                    <Sparkles className="text-orange-500 h-6 w-6" fill="currentColor" />
                    <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest leading-none">Resultados</p>
                    <p className="text-xs font-bold text-slate-500">Comprovados</p>
                 </div>
              </div>
            </div>
          </div>
        </header>

        {/* ... restante do componente continua exatamente igual ... */}
        {/* 1. SEÇÃO: GALERIA DE IMAGENS */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                O kit mais Amado do Brasil
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Grid da Galeria */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-orange-100">
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

        {/* 2. SEÇÃO: SOLUÇÃO E PÚBLICO-ALVO */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">A SOLUÇÃO QUE VOCÊ PRECISAVA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Resultado de salão no seu chuveiro. <span className="text-orange-700">Sem gastar R$ 300 todo mês.</span>
                        </h2>

                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Trabalha, cuida da casa, tem mil coisas pra resolver",
                                    "Não tem R$ 300 livre no orçamento todo mês",
                                    "Não pode passar o sábado inteiro no salão",
                                    "Não abre mão de se sentir bonita e confiante"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <div className="bg-orange-100 p-1 rounded-full text-orange-600"><Check size={16} strokeWidth={3} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                <p>Porque você merece olhar no espelho e gostar do que vê.</p>
                                <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre cabelo bonito ou pagar as contas.</p>
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

        {/* 3. SEÇÃO: DIFERENCIAIS */}
        <section className="py-32 px-6 bg-white relative">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <span className="inline-block text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.5em] mb-2">Por que somos os melhores</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-none">
                        POR QUE ESSE KIT É <span className="text-orange-700">DIFERENTE?</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Sparkles, 
                                t: "Tecnologia Bio Instinto Profissional", 
                                d: "O mesmo produto que cabeleireiros usam para entregar resultados rápidos." 
                            },
                            { 
                                icon: Dumbbell, 
                                t: "Trata de verdade, não mascara", 
                                d: "Reconstrução real na fibra capilar, tratando o fio de dentro para fora." 
                            },
                            { 
                                icon: Zap, 
                                t: "Resultado na primeira aplicação", 
                                d: "Você sente a diferença no toque e no brilho assim que termina o banho." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 bg-[#FDF8F3] rounded-[3rem] border border-orange-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(139,94,60,0.1)] hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group">
                                <div className="p-5 rounded-[1.5rem] bg-white shadow-sm group-hover:scale-110 transition-transform w-fit">
                                    <item.icon className="h-8 w-8 text-orange-700" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-3">
                                    <p className="font-black text-slate-900 text-xl uppercase tracking-tight leading-tight">{item.t}</p>
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
                        {[
                            { 
                                icon: Home, 
                                t: "15 minutos no banho", 
                                d: "Desenvolvido para caber na rotina da mulher moderna que não tem tempo a perder." 
                            },
                            { 
                                icon: DollarSign, 
                                t: "Menos de R$ 2 por dia", 
                                d: "Um único kit rende de 2 a 3 meses de tratamento completo de alto nível." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 bg-[#FDF8F3] rounded-[3rem] border border-orange-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(139,94,60,0.1)] hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group">
                                <div className="p-5 rounded-[1.5rem] bg-white shadow-sm group-hover:scale-110 transition-transform w-fit">
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
            </div>
        </section>

        {/* 4. SEÇÃO: O QUE VEM NESSE KIT COMPLETO */}
        <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">O QUE VEM NESSE KIT COMPLETO:</h2>
                    <p className="text-orange-700 font-bold text-lg md:text-xl uppercase tracking-widest">
                        🧴 4 PRODUTOS PROFISSIONAIS QUE VÃO RESSUSCITAR SEU CABELO:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { 
                          n: "1️⃣ SHAMPOO", 
                          v: "300ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Limpa PROFUNDAMENTE sem destruir",
                            "Espuma cremosa que você NUNCA viu igual",
                            "Perfume viciante que dura DIAS",
                            "Prepara o fio pra reconstrução REAL"
                          ] 
                        },
                        { 
                          n: "2️⃣ CONDICIONADOR", 
                          v: "300ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Desembaraça na PRIMEIRA PASSADA",
                            "Você vai sentir a diferença IMEDIATAMENTE",
                            "Brilho absurdo, maciez de comercial",
                            "Sela as cutículas e protege os fios"
                          ] 
                        },
                        { 
                          n: "3️⃣ MÁSCARA", 
                          v: "250g", 
                          t: "MÁSCARA CAPILAR", 
                          bullets: [
                            "Aqui é onde a MÁGICA ACONTECE",
                            "Reconstrução PROFUNDA na fibra capilar",
                            "Força e resistência que você VAI SENTIR",
                            "É tipo esteróides pro seu cabelo (só que legal)"
                          ] 
                        },
                        { 
                          n: "4️⃣ CREME DE PENTEAR", 
                          v: "200ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Finalização IMPECÁVEL",
                            "Controla frizz, protege do calor, nutre",
                            "Deixa aquele acabamento de salão",
                            "Seu cabelo vai parecer de OUTRA PESSOA"
                          ] 
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all hover:-translate-y-2 group shadow-sm">
                            <div className="space-y-4">
                                <div className="text-orange-800 font-black text-xs uppercase tracking-widest">{item.n} ({item.v})</div>
                                <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.t}</h3>
                                <div className="space-y-3 pt-2">
                                  {item.bullets.map((bullet, idx) => (
                                    <p key={idx} className="text-slate-600 text-sm font-medium leading-snug flex items-start gap-2">
                                      <span className="text-orange-600 shrink-0">→</span>
                                      {bullet}
                                    </p>
                                  ))}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="h-2 w-12 bg-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RESULTADOS SECTION */}
                <div className="bg-white text-slate-900 rounded-[3.5rem] p-10 md:p-16 shadow-xl relative overflow-hidden border border-orange-100">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.15] pointer-events-none text-orange-200">
                      <Sparkles size={250} />
                    </div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-200/20 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-orange-950">
                          🔥 RESULTADOS QUE VÃO TE FAZER CHORAR:
                        </h2>
                        <div className="h-1.5 w-24 bg-orange-400 mx-auto rounded-full shadow-sm"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                        {[
                          { t: "FORÇA ABSURDA", d: "Fios que aguentam TUDO" },
                          { t: "ZERO QUEBRA", d: "Acabou aquele cabelo no pente" },
                          { t: "HIDRATAÇÃO REAL", d: "Não aquela ilusão temporária" },
                          { t: "MACIEZ INSANA", d: "Você não vai parar de passar a mão" },
                          { t: "BRILHO DE REVISTA", d: "Tipo aqueles comerciais impossíveis" },
                          { t: "CRESCIMENTO ACELERADO", d: "Fios fortes crescem RÁPIDO" },
                          { t: "AUTOESTIMA LÁ EM CIMA", d: "Isso não tem preço" }
                        ].map((res, i) => (
                          <div key={i} className="flex items-center gap-4 bg-slate-50/80 p-5 rounded-2xl border border-orange-100 shadow-sm hover:bg-white hover:border-orange-300 transition-all duration-300 group/item">
                              <div className="bg-orange-100 text-orange-700 p-2 rounded-full group-hover/item:scale-110 transition-transform">
                                <Check size={18} strokeWidth={4} />
                              </div>
                              <div>
                                <span className="font-black text-orange-900 mr-1 tracking-tight uppercase text-sm">{res.t}</span>
                                <span className="font-medium text-slate-500 text-sm">- {res.d}</span>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. SEÇÃO: GALERIA DE VÍDEOS */}
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-2">Comunidade Cavalo de Raça</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                      Aperte o Play na <span className="text-orange-700 underline decoration-orange-300 decoration-8 underline-offset-8">Sua Nova Versão</span> ✨
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">Veja por que o Kit Cavalo de Raça é a maior febre do momento entre as brasileiras.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TIKTOK_VIDEOS.map((url, i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-all hover:scale-[1.02] hover:shadow-orange-200/50">
                            <iframe 
                                src={url} 
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0" 
                                allowFullScreen 
                                allow="autoplay; fullscreen"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 6. SEÇÃO: BIO INSTINTO */}
        <section className="py-24 px-6 bg-orange-50/50 text-slate-900 relative overflow-hidden border-y border-orange-100">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-800 text-[10px] font-black uppercase tracking-widest">
                            <Microscope size={14} /> Ciência Aplicada
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-slate-950">
                            Desenvolvido por <span className="text-orange-700 italic">Especialistas.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                                Bio Instinto: 12 anos de expertise capilar
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                Não é produto genérico de farmácia. É tecnologia profissional da Bio Instinto - uma das maiores indústrias de cosméticos do Brasil.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "12 anos transformando cabelos", 
                                "500 mil clientes ativos", 
                                "Linha profissional de salão", 
                                "Fórmulas testadas em laboratório"
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-300 transition-all group">
                                    <div className="bg-orange-100 p-1.5 rounded-full text-orange-700 group-hover:scale-110 transition-transform">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                    <span className="font-bold text-sm text-slate-800">{stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white text-slate-950 p-10 md:p-16 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(249,115,22,0.1)] relative border border-orange-100">
                        <div className="absolute -top-6 -right-6 bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-black rotate-12 shadow-xl border-4 border-white">
                            TOP 1
                        </div>
                        <h3 className="text-3xl font-black mb-6 leading-tight flex items-center gap-3">
                            <Award className="text-orange-600" /> Qualidade Garantida
                        </h3>
                        <div className="space-y-4 mb-10">
                            <p className="text-lg text-slate-600 font-medium">O que isso significa para você?</p>
                            <ul className="space-y-4">
                                {[
                                    "Você leva pra casa o mesmo produto que profissionais usam",
                                    "O mesmo tratamento que já transformou meio milhão de cabelos",
                                    "Direto da indústria. Sem intermediário e sem taxas extras"
                                ].map((item, i) => (
                                    <li key={item} className="flex items-start gap-3 font-bold text-slate-800 leading-snug">
                                        <div className="mt-1 text-orange-600"><Check size={18} strokeWidth={3} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-[#FDF8F3] rounded-3xl border border-orange-100 text-center">
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Veredito Profissional</p>
                            <p className="text-xl font-black text-slate-950 tracking-tight italic">"Não é promessa. É ciência aplicada."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* TESTEMUNHOS */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">Mulheres Reais</h2>
                    <div className="flex justify-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "Mariana R.", i: "34 anos", t: "Chorei na primeira vez que usei. Eu não acreditava que meu cabelo pudesse voltar a ser assim." },
                        { n: "Juliana S.", i: "29 anos", t: "Meu marido perguntou se eu tinha ido ao salão. O perfume é incrível e o brilho é absurdo!" },
                        { n: "Camila F.", i: "41 anos", t: "Gastava R$200 todo mês no salão. Esse kit me deu resultado profissional em casa por muito menos." }
                    ].map((test, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl relative group hover:-translate-y-2 transition-all">
                            <div className="absolute -top-6 -left-4 text-orange-100 text-9xl font-serif select-none pointer-events-none group-hover:text-orange-200 transition-colors opacity-50">“</div>
                            <p className="italic text-slate-700 text-lg font-medium leading-relaxed relative z-10 mb-8">"{test.t}"</p>
                            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center font-black text-orange-800">{test.n[0]}</div>
                                <div>
                                    <p className="font-black text-slate-900">{test.n}</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{test.i}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 🚀 OFERTA FINAL 🚀 */}
        <section id="pricing" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                        SUA ÚLTIMA CHANCE DE <br /> <span className="text-orange-500 italic">SOLTAR O CABELO</span> ✨
                    </h2>
                </div>

                <div className="bg-white rounded-[4rem] p-6 md:p-12 shadow-[0_64px_128px_-24px_rgba(249,115,22,0.4)] relative border-[8px] border-white group overflow-hidden text-center">
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-orange-600 text-white w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center font-black rotate-12 shadow-2xl border-4 border-white z-20 group-hover:scale-110 transition-transform">
                        <span className="text-xl md:text-3xl">35%</span>
                        <span className="text-[10px] md:text-sm uppercase leading-none">OFF</span>
                    </div>

                    <div className="flex flex-col items-center space-y-10 relative z-10">
                        <div className="space-y-2">
                            <span className="text-slate-400 font-black text-xs uppercase tracking-[0.4em]">Oferta Direto da Fábrica</span>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Kit Completo 4 Passos</h3>
                        </div>

                        <div className="bg-emerald-50 border-2 border-emerald-500/20 p-8 md:p-12 rounded-[3rem] w-full max-w-2xl relative overflow-hidden">
                            <div className="space-y-4 relative z-10">
                                <p className="text-slate-400 line-through font-bold text-lg mb-2">{config.priceCard}</p>
                                <p className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2 justify-center">
                                    <Zap size={14} fill="currentColor" /> Exclusivo no PIX
                                </p>
                                <div className="flex items-start justify-center text-slate-950 font-black tracking-tighter">
                                    <span className="text-3xl md:text-4xl mt-4 mr-2">R$</span>
                                    <span className="text-8xl md:text-[10rem] leading-none">
                                        {config.pricePix.split(',')[0]}<span className="text-5xl md:text-6xl">,{config.pricePix.split(',')[1] || '00'}</span>
                                    </span>
                                </div>
                                <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{config.installmentText}</p>
                            </div>
                        </div>

                        <Link href={config.checkoutUrl || '#'} className="w-full max-w-xl" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(22,163,74,0.4)] transition-all hover:scale-[1.03] active:scale-95 flex flex-col items-center gap-1 group overflow-hidden">
                                <span className="flex items-center gap-4 text-xl md:text-3xl font-black uppercase tracking-tight">
                                    <ShoppingBag className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
                                    {config.buttonText}
                                </span>
                            </Button>
                        </Link>

                        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><ShieldCheck size={18} /> Original</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Lock size={18} /> SSL Seguro</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Zap size={18} /> PIX Prioritário</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><CreditCard size={18} /> Cartão</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                <div className="space-y-4 text-left">
                    <h3 className="text-sm font-black text-orange-950 uppercase tracking-[0.2em]">Avisos e Isenções</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer mudança na dieta ou rotina de bem-estar.</p>
                </div>
                <div className="space-y-6 text-center md:text-right">
                    <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
                    <p className="text-xs text-slate-500">CNPJ: 60.357.932/0001-18</p>
                </div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Bio Instinto Original</p>
          </div>
        </footer>
      </div>
    </>
  );
}