"use client";

import React from 'react';
import { Leaf, Circle, Droplets, Mountain, CheckCircle2, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ClareadorComparisonSection = () => {
  const ingredients = [
    {
      icon: Leaf,
      title: "MULATEIRO (Calycophyllum spruceanum)",
      bullets: [
        "Bloqueia melanina na origem",
        "Cicatriza e uniformiza tom"
      ],
      feel: "Tom uniforme em 2 semanas",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Circle,
      title: "DOLOMITA (Mineral amazônico)",
      bullets: [
        "Regenera células da pele",
        "Clareia SEM ácidos agressivos"
      ],
      feel: "Mancha clareando progressivamente",
      color: "text-slate-500",
      bg: "bg-slate-50"
    },
    {
      icon: Droplets,
      title: "ÓLEO DE MELALEUCA",
      bullets: [
        "Acalma inflamação e vermelhidão",
        "Previne foliculite"
      ],
      feel: "Pele lisa, sem bolinhas",
      color: "text-brand-blue",
      bg: "bg-blue-50"
    },
    {
      icon: Mountain,
      title: "ARGILA BRANCA",
      bullets: [
        "Esfolia suavemente",
        "Remove células escuras"
      ],
      feel: "Textura macia imediata",
      color: "text-brand-pink",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter uppercase leading-tight">
                    POR QUE <span className="text-brand-pink">AMAZOLÉ</span> E OUTROS CLAREADORES NÃO?
                </h2>
                <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">4 Ingredientes Naturais Que Fazem a Diferença</p>
                <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ingredients.map((item, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-500 group">
                        <div className={cn("p-4 rounded-2xl shrink-0 group-hover:scale-110 transition-transform h-fit", item.bg, item.color)}>
                            <item.icon size={32} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                        <div className="h-1.5 w-1.5 rounded-full bg-slate-200"></div>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <div className={cn("inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest", item.bg, item.color)}>
                                VOCÊ SENTE: {item.feel}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-950 rounded-[4rem] p-10 md:p-16 text-white space-y-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><Microscope size={180} /></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <h4 className="text-2xl font-black uppercase tracking-[0.2em] text-brand-pink flex items-center gap-3">
                            <ShieldCheck /> ✅ MAIS 3 DIFERENCIAIS:
                        </h4>
                        <div className="space-y-6">
                            {[
                                "100% Natural (sem hidroquinona, sem ácidos)",
                                "pH Balanceado (não irrita pele sensível)",
                                "Fórmula Patenteada (exclusiva Amazolé)"
                            ].map((diff, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-pink group-hover:scale-[2.5] transition-transform"></div>
                                    <p className="text-xl font-bold tracking-tight text-white/90">{diff}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] text-center space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">Eficácia Garantida:</p>
                        <p className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
                            RESULTADO COMPROVADO
                        </p>
                        <div className="bg-brand-pink text-white px-6 py-2 rounded-xl font-black text-xl md:text-2xl inline-block shadow-lg">
                            Clareamento visível em 4 semanas
                        </div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-4">Não é promessa. É botânica aplicada.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};