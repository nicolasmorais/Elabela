"use client";

import React from 'react';
import { Star, Award, Zap, ShoppingBag, ShieldCheck, TrendingDown, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface KcrPromoHeroProps {
    activeImageIndex: number;
    productImages: string[];
    setActiveImageIndex: (index: number) => void;
    nextImage: () => void;
    prevImage: () => void;
    config: any;
    formatTime: (seconds: number) => string;
    timeLeft: number;
}

export const KcrPromoHero = ({ 
    activeImageIndex, 
    productImages, 
    config,
    formatTime,
    timeLeft
}: KcrPromoHeroProps) => {
  const checkoutUrl = 'https://seguro.elabela.store/r/I83HKZOFGP';

  return (
    <header className="relative pt-0 md:pt-16 pb-16 md:pb-24 px-0 md:px-6 overflow-hidden bg-white">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-50/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
                
                {/* ESQUERDA: GALERIA - DESIGN CLEAN */}
                <div className="lg:col-span-6">
                    <div className="relative aspect-square bg-[#F9F9F9] rounded-none md:rounded-[3rem] overflow-hidden border-0 md:border border-slate-100 shadow-none md:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={productImages[activeImageIndex]} 
                          alt="Kit Cavalo de Raça" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                        
                        {/* Selo de Originalidade Flutuante */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
                            <ShieldCheck className="text-orange-600 h-5 w-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Produto Original</span>
                        </div>
                    </div>
                </div>

                {/* DIREITA: INFOS DE COMPRA - HIERARQUIA PREMIUM */}
                <div className="lg:col-span-6 space-y-8 px-6 md:px-0 mt-4 md:mt-0">
                    
                    {/* Header: Badges & Title */}
                    <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full border border-orange-100 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Sparkles size={12} fill="currentColor" /> Eleito o Nº 1 em Reconstrução
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                            Kit Cavalo de Raça <br className="hidden lg:block" />
                            <span className="text-orange-600">Antiqueda Intensiva</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-900 ml-1">4.9</span>
                            </div>
                            <span className="text-sm font-medium text-slate-400">
                                (2.322 avaliações • 50k+ pedidos no mês)
                            </span>
                        </div>
                    </div>

                    {/* BLOCO DE PREÇO: FOCO NA OFERTA 1+1 */}
                    <div className="w-full bg-white rounded-[3rem] border-2 border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:border-orange-200">
                        <div className="p-8 md:p-10 space-y-8">
                            
                            {/* Promo Label */}
                            <div className="flex items-center gap-4">
                                <div className="h-0.5 flex-1 bg-slate-100"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 whitespace-nowrap">Oferta Especial Limitada</span>
                                <div className="h-0.5 flex-1 bg-slate-100"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                {/* Lado do Preço */}
                                <div className="space-y-1 text-center md:text-left">
                                    <p className="text-slate-400 line-through font-bold text-base">R$ 297,00</p>
                                    <div className="flex items-baseline justify-center md:justify-start gap-1">
                                        <span className="text-2xl font-black text-slate-900">R$</span>
                                        <span className="text-7xl font-black text-slate-950 tracking-tighter">147<span className="text-2xl">,00</span></span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{config.installmentText}</p>
                                </div>

                                {/* Lado da Vantagem */}
                                <div className="flex-1 max-w-[240px] mx-auto md:mx-0">
                                    <div className="p-5 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-center space-y-2 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:scale-125 transition-transform">
                                            <Zap size={40} fill="currentColor" className="text-emerald-600" />
                                        </div>
                                        <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-none">Vantagem Exclusiva:</p>
                                        <p className="text-lg font-black text-slate-900 leading-tight">
                                            Compre 1 e <span className="text-emerald-600">Leve +1 Grátis</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Badges de Confiança */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { icon: Check, text: "Frete Grátis", color: "text-emerald-600", bg: "bg-emerald-50" },
                                    { icon: ShieldCheck, text: "Garantia 7 Dias", color: "text-blue-600", bg: "bg-blue-50" },
                                    { icon: Zap, text: "Envio em 24h", color: "text-orange-600", bg: "bg-orange-50" }
                                ].map((item, i) => (
                                    <div key={i} className={cn("flex items-center justify-center gap-2 py-2 rounded-xl border border-transparent transition-all hover:shadow-sm", item.bg)}>
                                        <item.icon size={14} className={item.color} strokeWidth={3} />
                                        <span className={cn("text-[10px] font-black uppercase tracking-wider", item.color)}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTÃO CTA & BANNER DE ENTREGA */}
                    <div className="space-y-6 pt-2">
                        <Link href={checkoutUrl} target="_blank" className="hidden md:block group/btn">
                            <Button 
                                className="w-full h-20 text-white rounded-3xl font-black text-2xl uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(53,200,103,0.4)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4"
                                style={{ backgroundColor: '#35c867' }}
                            >
                                <ShoppingBag size={24} />
                                <span>Aproveitar Oferta 1+1</span>
                                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        
                        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 flex items-center justify-between group w-full overflow-hidden relative">
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="bg-slate-900 text-white p-2.5 rounded-xl shadow-lg shrink-0">
                                    <Zap size={20} fill="currentColor" className="text-orange-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-950 uppercase tracking-widest">Entrega Acelerada</p>
                                    <p className="text-xs text-slate-500 font-medium">Envio hoje se comprar em <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                                </div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-inner relative z-10">
                                <TrendingDown size={20} className="text-emerald-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
  );
};