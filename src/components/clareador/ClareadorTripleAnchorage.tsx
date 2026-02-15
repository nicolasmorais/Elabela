"use client";

import React from 'react';
import { Anchor, Layers, ShieldCheck } from 'lucide-react';

export const ClareadorTripleAnchorage = () => {
  const steps = [
    { icon: Anchor, title: "CAMADA 1: BLOQUEIA", desc: "Mulateiro inibe a produção de melanina na origem da mancha.", analogia: "É como fechar a torneira de tinta." },
    { icon: Layers, title: "CAMADA 2: RECONSTRÓI", desc: "Dolomita regenera as células da pele danificadas por ácidos.", analogia: "É como reconstruir uma parede rachada." },
    { icon: ShieldCheck, title: "CAMADA 3: PROTEGE", desc: "Melaleuca acalma a inflamação e evita novas manchas.", analogia: "É como passar um verniz protetor." }
  ];

  return (
    <section className="py-32 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-24">
            <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-brand-blue-dark uppercase leading-[0.9]">TECNOLOGIA TRIPLA <br /> <span className="text-brand-pink">AÇÃO NATURAL™</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-brand-blue/10 shadow-sm hover:shadow-xl transition-all group">
                        <div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform"><step.icon className="h-8 w-8 text-brand-blue" /></div>
                        <h4 className="text-xl font-black text-brand-blue-dark uppercase mb-4">{step.title}</h4>
                        <p className="text-sm text-slate-500 mb-6 font-medium">{step.desc}</p>
                        <div className="mt-auto p-5 bg-[#FDF8F3] rounded-3xl text-xs text-slate-500 italic"><strong>Analogia:</strong> {step.analogia}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};