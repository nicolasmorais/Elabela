"use client";

import React, { useState } from 'react';
import { Star, Award, Zap, ShoppingBag, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772416572105-unnamed-(5)-(1).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772421083925-image-(2)-(1).jpg",
];

interface KcrOriginalHeroProps {
  config: any;
  formatTime: (seconds: number) => string;
  timeLeft: number;
}

export const KcrOriginalHero = ({ config, formatTime, timeLeft }: KcrOriginalHeroProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <header className="relative pt-12 pb-24 px-6 overflow-hidden bg-white">
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,_rgba(249,115,22,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_20%_80%,_rgba(236,72,153,0.03),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* GALERIA - LADO ESQUERDO (5 colunas) */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="relative aspect-square rounded-[3.5rem] bg-[#FDFDFD] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] group">
                        <img 
                            src={PRODUCT_IMAGES[activeImageIndex]} 
                            alt="Kit Cavalo de Raça" 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute bottom-8 right-8 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-white/10">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                        {/* Selo Flutuante de Qualidade */}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-50 animate-in fade-in zoom-in duration-700">
                             <Sparkles className="text-orange-500 h-6 w-6" />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImageIndex(i)} 
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative group", 
                                    activeImageIndex === i ? "border-orange-500 scale-110 shadow-lg shadow-orange-100" : "border-slate-50 opacity-50 hover:opacity-100 hover:border-slate-200"
                                )}
                            >
                                <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                                {activeImageIndex === i && <div className="absolute inset-0 bg-orange-500/5"></div>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* INFOS DE COMPRA - LADO DIREITO (7 colunas) */}
                <div className="lg:col-span-7 space-y-8 pt-4">
                    
                    {/* Badge de Destaque e Título */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-sm text-[11px] font-black text-slate-600 uppercase tracking-widest">
                            <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-1.5 rounded-lg text-white shadow-md">
                                <Award size={14} />
                            </div> 
                            Eleito o melhor Kit do Brasil
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[1.05]">
                            Kit Cavalo de Raça <br />
                            <span className="text-orange-600 italic">Reconstrução + Antiqueda</span>
                        </h1>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm w-fit">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-900 ml-1">4.9</span>
                            </div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                (2.322 avaliações 5 estrelas)
                            </p>
                        </div>
                    </div>

                    {/* Preços com Design de E-commerce */}
                    <div className="space-y-4 bg-slate-50/50 p-8 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-orange-600 group-hover:scale-110 transition-transform">
                            <Zap size={120} fill="currentColor" />
                        </div>
                        
                        <div className="space-y-2 relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-400 line-through text-xl font-bold">{config.priceCard}</span>
                                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">21% OFF HOJE</span>
                            </div>
                            <div className="flex items-baseline gap-2 leading-none">
                                <span className="text-3xl font-black text-slate-900 mt-2">R$</span>
                                <span className="text-7xl md:text-8xl font-black text-slate-950 tracking-tighter">{config.pricePix}</span>
                                <span className="text-emerald-600 font-bold text-2xl ml-2">no pix</span>
                            </div>
                            <p className="text-slate-500 font-black text-xs uppercase tracking-[0.2em] pt-2">{config.installmentText}</p>
                        </div>
                    </div>

                    {/* Depoimento em Destaque */}
                    <div className="bg-orange-50/50 border-l-[6px] border-orange-400 p-6 md:p-8 rounded-r-[2.5rem] shadow-sm relative group">
                        <div className="absolute -top-4 -left-4 text-orange-200 text-6xl font-serif select-none pointer-events-none opacity-40">“</div>
                        <p className="text-slate-800 font-black text-xl md:text-2xl italic leading-tight relative z-10">
                            "Todo Dia Era um Bolo de Cabelo no Pente... Hoje Não Cai Quase Nada."
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-xs font-bold text-orange-700 uppercase tracking-widest">
                            <Heart size={14} fill="currentColor" /> Depoimento Verificado
                        </div>
                    </div>

                    {/* Ação e Entrega */}
                    <div className="space-y-6 pt-4">
                        <Link href={config.checkoutUrl} target="_blank" className="block group/btn">
                            <Button className="w-full h-24 text-white rounded-[2rem] font-black text-2xl uppercase tracking-[0.15em] shadow-[0_20px_50px_rgba(53,200,103,0.3)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 relative overflow-hidden" style={{ backgroundColor: '#35c867' }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                <ShoppingBag size={28} className="shrink-0" /> 
                                <span className="relative z-10">{config.buttonText}</span>
                                <ArrowRight size={28} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                            </Button>
                        </Link>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 flex items-center gap-5 group/box hover:bg-emerald-100/80 transition-colors">
                                <div className="bg-emerald-500 text-white p-3 rounded-2xl shadow-lg shadow-emerald-500/20 group-hover/box:scale-110 transition-transform">
                                    <Zap size={22} fill="currentColor" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">ENTREGA ACELERADA</p>
                                    <p className="text-[11px] font-bold text-slate-500 leading-tight">
                                        Envio hoje se comprar em <br />
                                        <span className="text-slate-950 font-black text-sm">{formatTime(timeLeft)}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50/80 border border-blue-100 rounded-3xl p-6 flex items-center gap-5 group/box hover:bg-blue-100/80 transition-colors">
                                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-600/20 group-hover/box:scale-110 transition-transform">
                                    <ShieldCheck size={22} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">PAGAMENTO SEGURO</p>
                                    <p className="text-[11px] font-bold text-slate-500 leading-tight">
                                        Seus dados protegidos <br />
                                        <span className="text-slate-950 font-black text-sm">Criptografia 256-bit</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};