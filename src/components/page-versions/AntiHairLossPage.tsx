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
  AlertCircle
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
import { MobileStickyBar } from './MobileStickyBar';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421091644-ChatGPT-Image-6-de-fev.-de-2026,-20_37_37.png"
];

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
    text: "Acabou de chegar! Muito bem embalado e o cheiro é maravilhoso. Começando meu tratamento hoje mesmo, super ansiosa pelos resultados!",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
    text: "Entrega super rápida aqui no RJ. O kit é lindo e já fiz a primeira aplicação. Meu cabelo ficou com um brilho que eu não via há anos.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421091644-ChatGPT-Image-6-de-fev.-de-2026,-20_37_37.png",
    text: "Recebi tudo certinho em Minas. Estava com medo de comprar online mas o suporte foi ótimo. Agora é focar no cronograma antiqueda!",
    author: "Fernanda L., Belo Horizonte"
  }
];

export function AntiHairLossPage() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(877); // 14:37 em segundos

  const [config, setConfig] = useState({
      priceCard: '147,00',
      pricePix: '147,00',
      installmentText: 'ou em 12x no cartão de crédito',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: '#'
  });

  useEffect(() => {
    // Timer Logic
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    // Cidade detection
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setCity(data.city);
      })
      .catch(() => console.log("Não foi possível detectar a cidade."));

    // Preços dinâmicos (mantendo a lógica mas forçando o valor se necessário)
    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig({
                    priceCard: data.priceCard || '147,00',
                    pricePix: data.pricePix || '147,00',
                    installmentText: data.installmentText || 'ou em 12x no cartão de crédito',
                    buttonText: data.buttonText || 'COMPRAR AGORA',
                    checkoutUrl: data.checkoutUrl || '#'
                });
            }
        })
        .catch(e => console.error("Erro ao carregar preços."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="antiqueda" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen pb-24 md:pb-0">
        
        {/* BARRA DE AVISO */}
        <div className="bg-slate-900 py-3 px-4 text-center border-b border-orange-500/20 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-3">
            <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </div>
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.15em] text-white leading-tight">
                Mais de 4.000 mulheres de <span className="text-emerald-400 border-b border-emerald-400/30 pb-0.5 mx-0.5">{city ? city : 'sua região'}</span> já estancaram a queda com este kit
            </p>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-6 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter text-slate-950 max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
                  "Todo Dia Era um Bolo de Cabelo no Pente... <br /> 
                  <span className="text-orange-600 italic relative inline-block mt-2">
                    Hoje Não Cai Quase Nada."
                  </span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 md:mt-20">
                <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
                    <div className="relative group p-8 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(249,115,22,0.15)] overflow-hidden transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(249,115,22,0.2)] animate-in fade-in slide-in-from-left-6 duration-1000 delay-500">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Caso Real #12.847</span>
                        </div>
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-black text-slate-950 leading-tight">
                                O cabelo de Ana estava <span className="text-red-500 italic relative px-1">cedendo.<span className="absolute bottom-0 left-0 w-full h-1 bg-red-100 -z-10"></span></span>
                            </p>
                            <div className="flex items-start gap-4 py-6 border-y border-slate-50">
                                <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-200 shrink-0">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                                    Em <strong className="text-orange-900 font-black">7 dias</strong>, o Kit Cavalo de Raça reconstruiu a raiz e reduziu <strong className="text-emerald-600 font-black bg-emerald-50 px-2 rounded-lg border border-emerald-100">87% da queda</strong>.
                                </p>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-orange-600 rounded-full"></div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Ass: Ana Júlia, Brasília</span>
                                </div>
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                            <Sparkles size={200} className="text-orange-600" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 relative lg:-ml-16 animate-in fade-in slide-in-from-right-6 duration-1000 delay-700">
                    <div className="absolute inset-0 bg-orange-400/10 blur-[100px] rounded-full scale-110 pointer-events-none transform translate-x-12 translate-y-12 opacity-70"></div>
                    <div className="relative group">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                            alt="Kit Cavalo de Raça Antiqueda" 
                            className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:scale-[1.02] transition-transform duration-1000"
                        />
                    </div>
                </div>
            </div>
          </div>
        </header>

        {/* 1. SEÇÃO: GALERIA DE IMAGENS */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
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

        {/* 2. SEÇÃO: SOLUÇÃO E PÚBLICO-ALVO */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
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
                                <p className="text-orange-800 italic underline decoration-orange-300">
                                    Sem precisar escolher entre: <br />
                                    Tratar a queda OU ter dinheiro no final do mês.
                                </p>
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

        {/* 3. SEÇÃO: TRIPLA ANCORAGEM */}
        <section className="py-32 px-6 bg-white relative overflow-hidden">
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
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[100px]"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                            alt="Tecnologia Tripla Ancoragem" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl"
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
                                        <span className="font-black text-slate-900 not-italic uppercase block mb-1">Analogia:</span>
                                        {step.analogia}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. SEÇÃO: DEPOIMENTOS RECEBIMENTO */}
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

        {/* 🚀 SEÇÃO DE OFERTA REDESENHADA (ÚNICO PREÇO) 🚀 */}
        <section id="pricing" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50 via-transparent to-transparent opacity-50"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight uppercase">
                        🚨 SUA ÚLTIMA CHANCE DE PARAR A QUEDA EM CASA 🚨
                    </h2>
                    <p className="text-slate-500 font-bold text-lg md:text-xl">
                        Acorde Sem Cabelo no Travesseiro. Penteia Sem Medo. <br className="hidden md:block" />
                        Viva Sem Precisar Esconder o Couro Cabeludo.
                    </p>
                </div>

                <div className="bg-[#FDF8F3] rounded-[3.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative border-4 border-white overflow-hidden">
                    
                    {/* Timer Suave */}
                    <div className="bg-orange-100/50 -mx-12 -mt-12 mb-12 py-4 px-6 text-center text-orange-900 font-black text-sm md:text-base tracking-widest flex items-center justify-center gap-3 border-b border-orange-100">
                        <Clock size={20} className="text-orange-600 animate-pulse" />
                        OFERTA ENCERRA EM: <span className="font-mono text-orange-700">{formatTime(timeLeft)}</span>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-12">
                        
                        {/* Preço Único Centralizado */}
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
                                    <div className="mt-6 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                                        <Zap size={10} fill="currentColor" /> Pix ou Cartão de Crédito
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lista de Itens do Kit */}
                        <div className="w-full text-left bg-white p-8 md:p-10 rounded-[3rem] border border-orange-100 space-y-8">
                            <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 border-b border-orange-50 pb-4">
                                <ShoppingBag size={20} className="text-orange-600" /> VOCÊ RECEBE O KIT COMPLETO:
                            </h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                {[
                                    { icon: "🧴", t: "Shampoo Reconstrutor 300ml", d: "Ancora a raiz (fio para de SOLTAR)" },
                                    { icon: "🧴", t: "Condicionador Fortificante 300ml", d: "Sela cutícula (fio para de QUEBRAR)" },
                                    { icon: "🧴", t: "Máscara Anti-Queda Intensiva 250g", d: "Reconstrói fibra (fio fica FORTE)" },
                                    { icon: "🧴", t: "Leave-in Protetor 200ml", d: "Protege estrutura (resultado DURA)" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                        <div className="space-y-0.5">
                                            <p className="font-black text-slate-800 text-sm leading-tight">{item.t}</p>
                                            <p className="text-xs text-slate-400 font-medium">→ {item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-orange-50 flex flex-wrap justify-center gap-6 md:gap-12">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-700"><CheckCircle2 size={16} /> Frete GRÁTIS</div>
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-700"><CheckCircle2 size={16} /> Envio IMEDIATO</div>
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-700"><CheckCircle2 size={16} /> Seguro de entrega</div>
                            </div>
                        </div>

                        {/* Botão de Compra */}
                        <div className="w-full space-y-6">
                            <Link href={config.checkoutUrl || '#'} className="block group/btn" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-xl shadow-green-100 transition-all hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center gap-1 overflow-hidden relative">
                                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 relative z-10">
                                        <ShoppingBag size={28} className="group-hover/btn:scale-110 transition-transform" />
                                        {config.buttonText}
                                    </span>
                                    <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em] relative z-10">Acesso 100% seguro | Envio hoje</span>
                                </Button>
                            </Link>
                            <div className="flex justify-center gap-8 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><ShieldCheck size={14} /> Original</div>
                                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><Lock size={14} /> SSL</div>
                                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><CreditCard size={14} /> PIX / Cartão</div>
                            </div>
                        </div>

                        {/* Barra de Estoque */}
                        <div className="w-full pt-8 border-t border-orange-100 space-y-4">
                            <div className="flex items-center justify-center gap-2 text-orange-800 font-black text-xs uppercase tracking-[0.2em]">
                                <ShieldAlert size={18} className="text-orange-600" /> ATENÇÃO: ESTOQUE LIMITADO
                            </div>
                            <div className="space-y-3 max-w-md mx-auto">
                                <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-orange-100">
                                    <div className="h-full bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{ width: '82%' }}></div>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                    Restam apenas <span className="text-orange-700">14 unidades</span> com este desconto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-white">
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

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-30"></div>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
                <div className="space-y-4">
                    <h3 className="text-sm font-black text-orange-950 uppercase tracking-[0.2em]">Avisos e Isenções de Responsabilidade</h3>
                    <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Isenção de Responsabilidade</p>
                            <p>Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer mudança na dieta, no consumo de chás, suplementos ou rotina de bem-estar.</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Aviso de Idade</p>
                            <p>Conteúdo destinado a maiores de 18 anos.</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-700 mb-1">Declaração de Risco</p>
                            <p>O uso de qualquer product natural deve ser feito com responsabilidade. Pessoas com condições médicas pré-existentes, gestantes, lactantes ou usuários de medicamentos devem buscar orientação profissional antes do consumo.</p>
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
                                <p>Ao acessar este site, o usuário concorda que todo o conteúdo exibido — incluindo textos, imagens, vídeos e informações — possui caráter exclusivamente informativo.</p><br/>
                                <p>Os produtos apresentados não substituem consultas, diagnósticos ou recomendações de profissionais da saúde.</p><br/>
                                <p>As informações sobre preços, disponibilidade, frete e políticas comerciais podem ser modificadas a qualquer momento, sem aviso prévio.</p><br/>
                                <p>O uso dos produtos adquiridos é de responsabilidade do consumidor, que deve sempre seguir as orientações descritas na embalagem ou no material que acompanha o produto.</p>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Privacidade</button></DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                            <DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader>
                            <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                                <p>Valorizamos sua privacidade. Todas as informações fornecidas voluntariamente pelo usuário — como nome, e-mail ou dados inseridos em formulários — são utilizadas apenas para fins de atendimento, envio de comunicações solicitadas ou suporte relacionado aos produtos oferecidos.</p><br/>
                                <p>Não compartilhamos, vendemos ou divulgamos dados a terceiros sem autorização do usuário, exceto quando exigido por lei.</p><br/>
                                <p>O usuário pode solicitar a remoção ou alteração de seus dados a qualquer momento por meio de nossos canais de suporte. Consulte esta página regularmente, pois nossa Política de Privacidade pode ser atualizada conforme necessário.</p>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Reembolso</button></DialogTrigger>
                        <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
                            <DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader>
                            <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600 space-y-4">
                                <p>Por se tratar de um product digital, o acesso ao conteúdo é liberado imediatamente após a confirmação do pagamento. Ainda assim, oferecemos uma política de reembolso transparente para garantir a satisfação do cliente.</p>
                                <p>Você pode solicitar o reembolso em até 7 dias corridos após a compra, conforme o Código de Defesa do Consumidor, desde que respeitadas as condições abaixo:</p>
                                <p><strong>Como solicitar o reembolso:</strong> Para iniciar o processo, envie um e-mail para nosso suporte: 📩 contato@oneconversion.pro</p>
                                <p>Inclua obrigatoriamente as seguintes informações: Nome completo, E-mail utilizado na compra, Número do pedido, Data da compra e Motivo da solicitação (opcional).</p>
                                <p><strong>Processo de avaliação:</strong> Após recebermos seu e-mail: Nossa equipe irá confirmar os dados da compra; O acesso ao product digital será revogado; O pedido de reembolso será processado em até 5 dias úteis.</p>
                                <p><strong>Forma de reembolso:</strong> Pagamentos via cartão (5 a 15 dias úteis); Pagamentos via Pix (até 5 dias úteis); Pagamentos via boleto (necessário informar conta bancária).</p>
                                <p><strong>Casos em que o reembolso pode ser recusado:</strong> Solicitação após 7 dias; evidência de uso excessivo ou violação de direitos autorais; falta de dados de identificação.</p>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </nav>
              </div>
              <div className="space-y-6 text-center md:text-left">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Precisa de Ajuda?</p>
                <div className="space-y-4"><div className="inline-block p-4 rounded-2xl bg-black/5 border border-slate-200 w-full"><p className="text-[10px] font-black uppercase text-orange-800 mb-1">E-mail de Suporte</p><p className="text-sm font-bold text-slate-900">contato@cavalo-de-raca.pro</p></div></div>
              </div>
              <div className="space-y-6 text-center md:text-left">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Segurança</p>
                <div className="flex justify-center md:justify-start gap-4 opacity-50"><ShieldCheck size={40} strokeWidth={1} /><Lock size={40} strokeWidth={1} /><CreditCard size={40} strokeWidth={1} /></div>
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

        {/* STICKY BAR MOBILE */}
        <MobileStickyBar 
          price={config.pricePix} 
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}