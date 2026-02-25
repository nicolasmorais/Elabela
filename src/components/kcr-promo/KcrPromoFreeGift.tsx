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

                        <div className="space-y-4 pt-4 border-t border-orange-100">
                            <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-2">
                                <div className="p-2 bg-slate-900 text-white rounded-lg"><Zap size={18} fill="currentColor" /></div>
                                Por que estamos incluindo um secador?
                            </h3>
                            <p>
                                A maioria das mulheres trata a queda no banho e destrói tudo na hora de secar. 
                                O calor excessivo abre as cutículas, fragiliza a fibra e quebra exatamente o fio que o kit acabou de reconstruir. É como reformar uma parede e bater nela com um martelo logo depois.
                            </p>
                            <p className="bg-white p-6 rounded-2xl border-l-4 border-orange-500 shadow-sm font-medium italic">
                                "O Secador que você vai receber tem a Tecnologia <strong className="text-orange-800">IonShield X3</strong> — que libera íons negativos durante a secagem, selando as cutículas em vez de abri-las, reduzindo o atrito e protegendo a estrutura do fio reconstruído pelo kit."
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-black text-slate-950 uppercase text-sm tracking-widest">Na prática:</p>
                            <p className="text-xl">
                                O kit para a queda <strong className="text-orange-700">por dentro</strong>. O secador protege <strong className="text-orange-700">por fora</strong>. Os dois juntos fecham o ciclo completo do tratamento.
                            </p>
                        </div>

                        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-[2rem] space-y-4">
                            <div className="flex items-center gap-3 text-red-600">
                                <ShieldAlert size={24} />
                                <p className="font-black uppercase tracking-tight text-xl">São apenas 100 unidades.</p>
                            </div>
                            <p className="text-sm text-red-900 font-medium">
                                Quando esgotar, o secador sai automaticamente do pedido — sem aviso, sem segunda chance. <br />
                                <strong className="underline">Se você está lendo isso, ainda há unidades disponíveis.</strong>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};