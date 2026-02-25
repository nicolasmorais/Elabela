"use client";

import React from 'react';
import { Gift, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export const KcrPromoFreeGift = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Lado Esquerdo: Imagem do Brinde */}
                <div className="flex-1 relative w-full">
                    <div className="absolute inset-0 bg-orange-400/10 rounded-full blur-[100px] opacity-70"></div>
                    <div className="relative group">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771981988749-ChatGPT-Image-24-de-fev.-de-2026,-21_12_30.png" 
                            alt="Secador Profissional Grátis" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute -top-6 -right-6 bg-red-600 text-white p-6 rounded-3xl shadow-2xl z-20 font-black text-center rotate-12 border-4 border-white animate-bounce">
                            <p className="text-sm uppercase leading-none">GRÁTIS</p>
                            <p className="text-xs opacity-80 uppercase tracking-tighter mt-1">NO PEDIDO</p>
                        </div>
                    </div>
                </div>

                {/* Lado Direito: Texto da Oferta */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 border border-orange-200 rounded-xl text-orange-800 text-[10px] font-black uppercase tracking-widest">
                            <Sparkles size={14} /> Oferta de Lançamento
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight uppercase">
                            🎁 Ganhe um Secador Profissional — <span className="text-orange-700">Grátis no Seu Pedido</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p className="font-bold text-slate-900">
                            A partir de 10/02, as 100 primeiras clientes que finalizarem a compra do Kit Cavalo de Raça receberão um Secador Profissional completamente grátis, junto com o kit — sem custo adicional, sem frete separado.
                        </p>

                        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-[2rem] space-y-4 mt-8">
                            <div className="flex items-center gap-3 text-red-600">
                                <ShieldAlert size={24} />
                                <p className="font-black uppercase tracking-tight text-xl">São apenas 100 unidades.</p>
                            </div>
                            <p className="text-sm text-red-900 font-medium">
                                Quando esgotar, o secador sai automaticamente do pedido — sem aviso, sem segunda chance.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};