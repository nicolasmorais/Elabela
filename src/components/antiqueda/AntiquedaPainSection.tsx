"use client";

import React from 'react';

export const AntiquedaPainSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="flex-1 space-y-8">
                    <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCINA</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Por R$ 147,00.</span></h2>
                    <div className="pt-8 space-y-6">
                        <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                        <ul className="space-y-4">
                            {["💔 Chora vendo tanto cabelo caindo no ralo", "💔 Evita passar a mão no cabelo com medo que caia mais", "💔 Já escondeu o couro cabeludo com truques de penteado", "💔 Não pode (ou não quer) gastar R$ 500 em dermatologista", "💔 Trabalha, cuida da casa e não tem tempo para salão toda semana"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">{item}</li>
                            ))}
                        </ul>
                        <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                            <p>Porque você merece acordar SEM cabelo no travesseiro.</p>
                            <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre: Tratar a queda OU pagar as contas.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                    <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-10"></div>
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" alt="Mulher Confiante" className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white" />
                </div>
            </div>
        </div>
    </section>
  );
};