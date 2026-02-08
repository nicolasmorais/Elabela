"use client";

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  Award,
  Clock,
  ShieldCheck,
  Lock,
  CreditCard,
  Heart,
  Sparkles,
  Droplets,
  Anchor,
  Layers,
  Truck,
  Verified,
  ShieldAlert,
  Microscope,
  Check,
  X,
  FileCheck,
  ZapIcon,
  FlaskConical,
  Dumbbell
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

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
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

const DELIVERY_FEED = [
    { img: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png", author: "Marta S.", city: "São Paulo", text: "Chegou super rápido! O cheiro é maravilhoso." },
    { img: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png", author: "Juliana P.", city: "Rio", text: "Notei que caiu bem menos fios no banho logo de cara." },
    { img: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558644450-3.png", author: "Fernanda L.", city: "MG", text: "O kit é lindo e muito cheiroso. Recomendo!" }
];

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); 
  const [activeImage, setActiveImage] = useState(GALLERY_IMAGES[0]);
  const [selectedKitId, setSelectedKitId] = useState('3-unidades');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

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
        
        {/* NAVIGATION */}
        <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img 
                    src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                    alt="Logo" className="h-7 md:h-8"
                />
                <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="text-orange-600">Kit Antiqueda</span>
                    <span>Colágeno</span>
                    <span>Vitaminas</span>
                    <span>Cabelo & Unha</span>
                </div>
                <div className="flex items-center gap-4">
                    <ShoppingBag size={20} className="text-slate-400" />
                </div>
            </div>
        </nav>

        {/* HERO / PRODUCT SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA (50%) */}
                <div className="space-y-4">
                    <div className="aspect-square bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 relative group">
                        <img src={activeImage} alt="Produto Principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-6 left-6">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest text-orange-600 flex items-center gap-2">
                                <Award size={14} /> RESULTADO REAL
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImage(img)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300",
                                    activeImage === img ? "border-orange-500 shadow-lg scale-105" : "border-slate-100 opacity-60 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA (50%) */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                        <div className="bg-pink-500 p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Eleito o melhor Kit Antiqueda do Brasil
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                            Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <div className="flex gap-0.5 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="font-bold text-slate-900">4.9</span>
                            <span>| 2322 avaliações 5 estrelas</span>
                        </div>
                        <p className="text-emerald-600 font-bold text-sm">
                            Mais de 50800 compras no mês passado.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg">R$ 297,00</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">40% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-6xl font-black text-slate-950 tracking-tighter">R$ {selectedKit.price}</span>
                            <span className="text-emerald-600 font-black text-xl">no pix</span>
                        </div>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
                            Ou em 12x de R$ 14,96 no cartão
                        </p>
                    </div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {[
                            { icon: Zap, label: "Antiqueda Real" },
                            { icon: Droplets, label: "Raiz Fortalecida" },
                            { icon: Heart, label: "Brilho Intenso" },
                            { icon: Sparkles, label: "Crescimento Acelerado" },
                            { icon: Clock, label: "Resultados em 7 dias" }
                        ].map((tag, i) => (
                            <div key={i} className="flex items-center gap-1.5 px-3 py-2 border border-pink-200 rounded-xl text-pink-600 text-[10px] font-black uppercase tracking-tight">
                                <tag.icon size={12} />
                                {tag.label}
                            </div>
                        ))}
                    </div>

                    {/* SELEÇÃO DE KITS */}
                    <div className="space-y-4 pt-6">
                        <h3 className="font-black text-lg uppercase tracking-tighter">SELECIONE O KIT</h3>
                        <div className="space-y-3">
                            {KITS.map((kit) => (
                                <div 
                                    key={kit.id}
                                    onClick={() => setSelectedKitId(kit.id)}
                                    className={cn(
                                        "relative flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all cursor-pointer group",
                                        selectedKitId === kit.id ? "border-slate-950 bg-white shadow-xl" : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                                    )}
                                >
                                    {kit.badge && (
                                        <div className={cn("absolute -top-3 right-8 px-4 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg", kit.badgeColor || "bg-pink-600")}>
                                            {kit.badge}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors",
                                            selectedKitId === kit.id ? "border-slate-950" : "border-slate-300 group-hover:border-slate-400"
                                        )}>
                                            {selectedKitId === kit.id && <div className="w-3.5 h-3.5 rounded-full bg-slate-950 animate-in zoom-in-50 duration-300" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-black text-slate-950 text-xl tracking-tight">{kit.name}</span>
                                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg text-[9px] font-black uppercase">{kit.discount}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kit.unitPrice}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-300 line-through font-bold uppercase tracking-widest">{kit.originalPrice}</p>
                                        <p className="text-2xl font-black text-slate-950 tracking-tight leading-none">R$ {kit.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link href={selectedKit.checkoutUrl} target="_blank" className="block">
                            <Button className="w-full h-20 bg-slate-950 hover:bg-slate-900 text-white rounded-[2rem] font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99]">
                                Comprar agora
                            </Button>
                        </Link>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-500 text-white p-2.5 rounded-xl shadow-lg shadow-emerald-200"><Zap size={20} fill="currentColor" /></div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-950 uppercase tracking-widest">ENTREGA FULL — <span className="text-slate-500">Envio em até 24h</span></p>
                                    <p className="text-[10px] font-bold text-slate-500 tracking-tight">Comprando nas próximas <span className="text-slate-950 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <ShieldCheck className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* COMPOSIÇÃO PODEROSA */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">Fórmula Avançada</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase">O que faz a mágica acontecer?</h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto">Ativos de alta performance que agem diretamente no bulbo capilar e na estrutura do fio.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: FlaskConical, t: "BIOTINA (VITAMINA H)", d: "A 'vitamina do crescimento'. Estimula a produção de queratina e fortalece o fio desde a raiz, impedindo a queda por quebra." },
                        { icon: Droplets, t: "D-PANTENOL (VIT B5)", d: "Retém a umidade natural do fio por muito mais tempo. Acaba com o aspecto seco e poroso logo na primeira lavagem." },
                        { icon: Layers, t: "QUERATINA BIOMIMÉTICA", d: "Preenche as falhas na fibra capilar causadas por químicas e calor. Devolve a massa e a elasticidade natural do cabelo." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 text-center space-y-6 hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto text-orange-600">
                                <item.icon size={32} />
                            </div>
                            <h4 className="font-black text-lg uppercase tracking-widest text-orange-950">{item.t}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* DETALHAMENTO DO KIT (O que vem dentro) */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-tight">Um tratamento <br /> <span className="text-orange-600 italic">Completo de 4 Etapas</span></h2>
                        <div className="space-y-6">
                            {[
                                { t: "Passo 1: Shampoo Fortalecedor (300ml)", d: "Limpeza profunda sem agredir, preparando o couro cabeludo para receber os nutrientes." },
                                { t: "Passo 2: Máscara Reconstrutora (250g)", d: "O coração do tratamento. Reposição de massa e reconstrução intensiva em 15 minutos." },
                                { t: "Passo 3: Condicionador Selante (300ml)", d: "Fecha as cutículas, retém o tratamento e proporciona desembaraço imediato e brilho." },
                                { t: "Passo 4: Leave-in Protetor (200ml)", d: "Proteção térmica e contra raios UV. Cabelo alinhado e cheiroso o dia todo." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-black text-xs">{i+1}</div>
                                    <div>
                                        <p className="font-black text-slate-950 uppercase text-sm tracking-tight">{step.t}</p>
                                        <p className="text-slate-500 text-sm">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" 
                            alt="Kit Completo" 
                            className="w-full h-auto drop-shadow-2xl rounded-[3rem]"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* TABELA COMPARATIVA */}
        <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Por que investir no Cavalo de Raça?</h2>
                </div>
                <div className="bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/10">
                                <th className="p-8 font-black uppercase text-xs tracking-widest">Diferencial</th>
                                <th className="p-8 font-black uppercase text-xs tracking-widest text-center text-orange-500 bg-white/5">Cavalo de Raça</th>
                                <th className="p-8 font-black uppercase text-xs tracking-widest text-center opacity-30">Outros Produtos</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { f: "Tratamento de Queda Real", c: true, o: false },
                                { f: "Biotina e Pantenol em Alta Conc.", c: true, o: false },
                                { f: "Fórmula Sem Parabenos", c: true, o: false },
                                { f: "Resultado Profissional em Casa", c: true, o: false },
                                { f: "Aprovado pela ANVISA", c: true, o: "Alguns" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/5 last:border-0">
                                    <td className="p-8 font-bold text-slate-300">{row.f}</td>
                                    <td className="p-8 text-center bg-white/5"><Check className="mx-auto text-emerald-500" size={24} /></td>
                                    <td className="p-8 text-center opacity-30">
                                        {typeof row.o === 'string' ? row.o : <X className="mx-auto text-red-500" size={24} />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* ANVISA / FÁBRICA / CONFIANÇA */}
        <section className="py-24 px-6 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-widest">
                            <Verified size={14} /> Procedência Garantida
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase leading-tight">Direto da fábrica <br /> <span className="text-blue-600">Bio Instinto</span> para você.</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            O Kit Cavalo de Raça é produzido em um dos maiores laboratórios cosméticos do Brasil. Seguimos rigorosos padrões de qualidade e segurança farmacêutica.
                        </p>
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <img src="https://logodownload.org/wp-content/uploads/2017/02/anvisa-logo.png" alt="Anvisa" className="h-6 opacity-60" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aprovado Anvisa</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <ShieldCheck className="text-emerald-500" size={32} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">100% Seguro</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <Dumbbell className="text-orange-500" size={32} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Não Testado em Animais</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png" 
                            alt="Fábrica Bio Instinto" 
                            className="w-full h-auto rounded-[2rem] shadow-xl"
                        />
                        <p className="text-center mt-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Instalações Bio Instinto — Goiás, Brasil</p>
                    </div>
                </div>
            </div>
        </section>

        {/* FEED DE ENTREGA */}
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase">Quem recebe, <span className="text-orange-700 italic">se apaixona</span> ✨</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DELIVERY_FEED.map((item, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 transition-all hover:-translate-y-2">
                            <div className="aspect-square relative overflow-hidden">
                                <img src={item.img} alt="Recebido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-orange-600 shadow-lg"><Verified size={20} /></div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 font-medium italic text-lg leading-relaxed">"{item.text}"</p>
                                <div className="pt-4 border-t border-slate-50">
                                    <p className="font-black text-slate-950 text-sm uppercase tracking-widest">{item.author}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-[#FDF8F3]">
            <div className="max-w-4xl mx-auto text-center bg-white border-[6px] border-dashed border-orange-200 p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-orange-800 rotate-12"><ShieldCheck size={200} /></div>
                <ShieldCheck className="mx-auto h-20 w-20 text-orange-700 mb-8" />
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950 leading-tight">7 dias para testar ou seu dinheiro de volta</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">
                    Use o Kit Cavalo de Raça por uma semana inteira. Se você não sentir seu cabelo mais forte, cheiroso e ver a queda diminuir drasticamente, nós devolvemos cada centavo investido. Risco zero para você.
                </p>
                <div className="inline-block px-10 py-3 bg-slate-950 text-orange-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">COMPROMISSO BIO INSTINTO</div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter uppercase text-slate-950">Dúvidas Comuns</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {[
                        { q: "Em quanto tempo vejo resultados?", a: "Logo na primeira aplicação você sente o brilho e a maciez. O estancamento da queda e o fortalecimento da raiz ocorrem em média em 7 dias de uso contínuo." },
                        { q: "Serve para qualquer tipo de cabelo?", a: "Sim! Nossa tecnologia de reconstrução biomimética se adapta a cabelos lisos, ondulados, cacheados e crespos, com ou sem química." },
                        { q: "O kit substitui o condicionador comum?", a: "O kit é um tratamento completo. O condicionador do Kit Cavalo de Raça tem tecnologia superior aos comuns, focado em selagem e proteção antiqueda." },
                        { q: "Quais são as formas de pagamento?", a: "Aceitamos Cartão de Crédito (parcelado em até 12x), PIX com envio prioritário e Boleto Bancário." }
                    ].map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-slate-50/50 rounded-[2rem] px-8 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-left font-black text-slate-950 hover:text-orange-700 text-lg py-6 no-underline hover:no-underline uppercase tracking-tight">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-500 text-lg leading-relaxed pb-8 font-medium italic">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
            <div className="flex justify-center gap-10 opacity-30">
                <Lock size={28} /> <CreditCard size={28} /> <Truck size={28} /> <ShieldCheck size={28} />
            </div>
            <div className="space-y-4">
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
                <p className="text-slate-300 text-[10px] leading-relaxed uppercase tracking-[0.15em] max-w-2xl mx-auto italic">
                    AVISO LEGAL: Os resultados podem variar de pessoa para pessoa. Este produto é um tratamento cosmético capilar e não substitui diagnósticos médicos ou dermatológicos em casos de alopecia patológica.
                </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}