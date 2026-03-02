"use client";

import React from 'react';

export const KcrOriginalSolution = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="flex-1 space-y-8">
                    <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                        O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Por R$ 147,00.</span>
                    </h2>
                    <div className="pt-8 space-y-6">
                        <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                        <ul className="space-y-4">
                            {[
                                "💔 Passou dos 40 e o cabelo nunca mais foi o mesmo — e o médico disse que é hormônio, que é a menopausa, que você tem que aceitar",
                                "💔 Acorda todo dia com fios no travesseiro e tenta não contar",
                                "💔 Já usou chapéu, coque ou truques de penteado pra esconder o couro cabeludo",
                                "💔 Gastou dinheiro em shampoo caro, vitamina e óleo — e nada funcionou",
                                "💔 Fica com medo de passar a mão no próprio cabelo dentro do chuveiro",
                                "💔 Sente que está perdendo mais do que cabelo — está perdendo a confiança"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg font-bold text-slate-700 leading-snug">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                            <p>Porque você merece acordar SEM cabelo no travesseiro.</p>
                            <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre: Tratar a queda OU pagar as contas.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                    <img 
                        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772420576087-image-(1).jpg" 
                        alt="Resultado de Tratamento Profissional" 
                        className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};