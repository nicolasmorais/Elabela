"use client";

import React from 'react';
import { Check, Calendar, Info, Clock, CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ClareadorUsageTimeline = () => {
  const areas = [
    "Axilas escuras (atrito/depilação)",
    "Virilhas manchadas (calcinha/depilação)",
    "Melasma facial (gravidez/sol)",
    "Manchas de idade (rosto/mãos)",
    "Foliculite (bolinhas escuras)",
    "Cotovelos/Joelhos escuros",
    "Pescoço manchado",
    "Entre coxas (atrito)"
  ];

  const timeline = [
    {
      title: "SEMANA 1:",
      items: ["Pele mais macia e uniforme", "Vermelhidão diminui", "Foliculite (bolinhas) melhora"],
      status: "initial"
    },
    {
      title: "SEMANA 2:",
      items: ["Tom começa a clarear (sutil)", "Textura lisa", "Inflamação some"],
      status: "progress"
    },
    {
      title: "SEMANA 3-4:",
      items: ["Clareamento VISÍVEL", "Mancha 30-40% mais clara", "Outras pessoas NOTAM"],
      status: "visible"
    },
    {
      title: "SEMANA 5-8:",
      items: ["Clareamento intensifica", "Mancha 50-70% mais clara", "Usa regata/biquíni com confiança"],
      status: "strong"
    },
    {
      title: "MÊS 3+:",
      items: ["Tom quase igualado", "Pele uniforme", "Manutenção 1x ao dia"],
      status: "maintenance"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-20">
            
            {/* ÁREAS DE TRATAMENTO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter uppercase leading-tight">
                            ÁREAS QUE VOCÊ <br /><span className="text-brand-pink">PODE TRATAR:</span>
                        </h2>
                        <div className="h-1 w-20 bg-brand-pink rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {areas.map((area, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group hover:border-brand-pink/20 transition-all">
                                <div className="bg-emerald-50 text-emerald-600 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                                    <Check size={14} strokeWidth={4} />
                                </div>
                                <span className="font-bold text-slate-700 text-sm leading-tight">{area}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-[3rem] border-2 border-brand-blue-dark/10 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-brand-blue-dark">
                            <Info size={100} />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="inline-block bg-brand-blue-dark text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Guia de Consumo</div>
                            <h4 className="text-2xl font-black text-brand-blue-dark uppercase leading-none">1 FRASCO = 1 ÁREA POR 30 DIAS</h4>
                            <div className="space-y-3">
                                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest italic">Exemplos Práticos:</p>
                                <ul className="space-y-2 text-sm font-bold text-slate-700">
                                    <li className="flex items-center gap-2">→ Tratar só axilas = <span className="text-brand-pink">1 frasco</span></li>
                                    <li className="flex items-center gap-2">→ Tratar axilas + virilha = <span className="text-brand-pink">2 frascos</span></li>
                                    <li className="flex items-center gap-2">→ Tratar rosto + axilas + virilha = <span className="text-brand-pink">3 frascos</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LINHA DO TEMPO */}
                <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl space-y-12 relative overflow-hidden">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-3xl font-black text-brand-blue-dark uppercase tracking-tighter">LINHA DO TEMPO <span className="text-brand-pink">REAL</span></h3>
                        <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">(O Que Acontece Semana a Semana)</p>
                    </div>

                    <div className="space-y-10 relative">
                        {/* Linha da timeline */}
                        <div className="absolute left-6 top-4 bottom-4 w-1 bg-slate-50 rounded-full"></div>

                        {timeline.map((step, i) => (
                            <div key={i} className="flex gap-8 relative group">
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md relative z-10 transition-all group-hover:scale-110",
                                    i === timeline.length - 1 ? "bg-brand-pink text-white" : "bg-white border-2 border-slate-100 text-slate-300"
                                )}>
                                    <CheckSquare size={24} />
                                </div>
                                <div className="space-y-3 pt-1">
                                    <h5 className={cn(
                                        "text-xl font-black tracking-tight",
                                        i === timeline.length - 1 ? "text-brand-pink" : "text-brand-blue-dark"
                                    )}>{step.title}</h5>
                                    <ul className="space-y-2">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-500 font-medium text-sm leading-tight italic">
                                                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 mt-1.5 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};