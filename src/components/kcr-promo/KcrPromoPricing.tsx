"use client";

import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Lock, CreditCard, Zap, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface KcrPromoPricingProps {
    config: any;
    formatTime: (seconds: number) => string;
    timeLeft: number;
}

export const KcrPromoPricing = ({ config, formatTime, timeLeft }: KcrPromoPricingProps) => {
  return (
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
                <div className="bg-orange-100/50 -mx-12 -mt-12 mb-12 py-4 px-6 text-center text-orange-900 font-black text-sm md:text-base tracking-widest flex items-center justify-center gap-3 border-b border-orange-100">
                    <Clock size={20} className="text-orange-600 animate-pulse" />
                    OFERTA ENCERRA EM: <span className="font-mono text-orange-700">{formatTime(timeLeft)}</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-12">
                    <div className="space-y-6 w-full">
                        <div className="space-y-2">
                            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Preço Normal: <span className="line-through">R$ 297,00</span></p>
                            <p className="text-orange-800 font-black text-xs uppercase tracking-[0.3em]">Oportunidade Única Hoje</p>
                        </div>
                        <div className="py-10 px-8 rounded-[3rem] bg-white border-2 border-orange-200/50 shadow-sm inline-block mx-auto min-w-[300px]">
                            <div className="flex flex-col items-center leading-none">
                                <div className="flex items-start text-slate-950 font-black tracking-tighter">
                                    <span className="text-3xl md:text-4xl mt-4 mr-1">R$</span>
                                    <span className="text-8xl md:text-9xl">{config.pricePix.split(',')[0]}<span className="text-4xl md:text-5xl">,{config.pricePix.split(',')[1] || '00'}</span></span>
                                </div>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-4">{config.installmentText}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full space-y-6">
                        <Link href={config.checkoutUrl} className="block group/btn" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-xl shadow-green-100 transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-1 overflow-hidden">
                                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 relative z-10">
                                    <ShoppingBag size={28} /> {config.buttonText}
                                </span>
                            </Button>
                        </Link>
                        <div className="flex justify-center gap-8 opacity-30 grayscale">
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><ShieldCheck size={14} /> Original</div>
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><Lock size={14} /> SSL</div>
                            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest"><CreditCard size={14} /> PIX / Cartão</div>
                        </div>
                    </div>

                    <div className="w-full pt-8 border-t border-orange-100 space-y-4">
                        <div className="flex items-center justify-center gap-2 text-orange-800 font-black text-xs uppercase tracking-[0.2em]"><ShieldAlert size={18} className="text-orange-600" /> ATENÇÃO: ESTOQUE LIMITADO</div>
                        <div className="space-y-3 max-w-md mx-auto">
                            <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-orange-100">
                                <div className="h-full bg-orange-500 rounded-full animate-pulse" style={{ width: '82%' }}></div>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Restam apenas <span className="text-orange-700">14 unidades</span> com este desconto</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};