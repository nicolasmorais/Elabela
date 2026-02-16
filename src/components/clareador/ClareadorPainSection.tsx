"use client";

import React from 'react';
import { Check } from 'lucide-react';

export const ClareadorPainSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Lado Esquerdo: Conteúdo */}
                <div className="flex-1 space-y-8 order-2 lg:order-1">
                    <div className="space-y-2">
                        <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter leading-tight">
                            Clareie Manchas Difíceis <span className="text-brand-pink">Sem Ácidos Agressivos.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-400">
                            100% Natural da Amazônia Por R$ 137,00.
                        </p>
                    </div>

                    <div className="pt-8 space-y-6">
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
                        
                        <div className="space-y-4 text-2xl font-black text-brand-blue-dark tracking-tight leading-tight pt-4">
                            <p>Porque você merece usar <span className="text-brand-pink underline decoration-4 underline-offset-4">QUALQUER</span> roupa sem medo.</p>
                            <p className="text-slate-500 italic text-xl">
                                Sem precisar escolher entre: <br />
                                Clarear as manchas OU irritar a pele.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Lado Direito: Imagem */}
                <div className="flex-1 order-1 lg:order-2 w-full">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-pink rounded-full blur-[100px] opacity-10"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/ChatGPT%20Image%2016%20de%20fev.%20de%202026,%2018_16_49.png" 
                            alt="Mulher confiante de regata" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
                            <p className="text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1">Pele Uniforme</p>
                            <p className="text-sm font-bold text-brand-blue-dark">Livre de Manchas ✨</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};