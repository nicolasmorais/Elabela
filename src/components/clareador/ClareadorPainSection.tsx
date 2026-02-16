"use client";

import React from 'react';
import { Check, CheckCircle2, Truck, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ClareadorPainSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
            
            {/* PARTE 1: AGITAÇÃO DA DOR */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                
                {/* Lado Esquerdo: Conteúdo */}
                <div className="flex-1 space-y-8 order-2 lg:order-1">
                    <div className="space-y-2">
                        <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter leading-tight uppercase">
                            Clareie Manchas Difíceis <span className="text-brand-pink">Sem Ácidos Agressivos.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400">
                            100% Natural da Amazônia.
                        </p>
                    </div>

                    <div className="pt-4 space-y-6">
                        <h4 className="text-2xl font-black text-slate-900 border-b-2 border-brand-pink/20 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                        <ul className="space-y-4">
                            {[
                                "Esconde axilas escuras e não usa regata há anos",
                                "Evita biquíni ou calcinha porque a virilha tá manchada",
                                "Melasma te faz usar base TODOS os dias (mesmo em casa)",
                                "Já tentou mil cremes que arderam, descascaram e não clarearam",
                                "Tem vergonha de tirar a roupa na frente do parceiro"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg font-bold text-brand-text leading-tight">
                                    <span className="shrink-0">💔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Lado Direito: Imagem Atualizada */}
                <div className="flex-1 order-1 lg:order-2 w-full">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-pink rounded-full blur-[100px] opacity-10"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/ChatGPT%20Image%2016%20de%20fev.%20de%202026,%2018_16_49.png" 
                            alt="Amazolé Clareador" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>

            {/* PARTE 2: O QUE VOCÊ RECEBE (NOVA SEÇÃO) */}
            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-4 border-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-brand-blue-dark pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                    <Zap size={200} />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-black text-brand-blue-dark uppercase tracking-tighter leading-none">
                                O QUE VOCÊ <span className="text-brand-pink">RECEBE:</span>
                            </h3>
                            <div className="h-1.5 w-24 bg-brand-blue rounded-full"></div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 rounded-3xl bg-brand-blue/10 flex items-center justify-center text-3xl shadow-sm shrink-0">🧴</div>
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-black text-brand-blue-dark uppercase leading-none">AMAZOLÉ CLAREADOR</h4>
                                    <p className="text-brand-pink font-bold uppercase tracking-widest text-sm">50g (rende 30 dias em 1 área)</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Fórmula patenteada 100% natural",
                                    "Mulateiro + Dolomita + Melaleuca + Argila",
                                    "Textura leve, absorção rápida",
                                    "Sem ácidos agressivos",
                                    "Testado dermatologicamente"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm font-bold text-slate-600">
                                        <div className="mt-1"><ArrowRight size={14} className="text-brand-pink" strokeWidth={3} /></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Benefícios de Compra */}
                    <div className="bg-brand-gray-light p-8 md:p-10 rounded-[3rem] border border-slate-100 grid grid-cols-2 gap-6 relative">
                        {[
                            { icon: Truck, t: "FRETE GRÁTIS", c: "text-emerald-600" },
                            { icon: Zap, t: "ENVIO IMEDIATO", c: "text-orange-600" },
                            { icon: ShieldCheck, t: "SEGURO DE ENTREGA", c: "text-blue-600" },
                            { icon: CheckCircle2, t: "GARANTIA 90 DIAS", c: "text-brand-pink" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3 bg-white p-5 rounded-2xl shadow-sm hover:scale-105 transition-transform group/item">
                                <div className={cn("p-3 rounded-xl bg-slate-50 transition-colors group-hover/item:bg-white", item.c)}>
                                    <item.icon size={24} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-slate-900">{item.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};