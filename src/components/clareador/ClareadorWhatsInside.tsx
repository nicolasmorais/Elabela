"use client";

import React from 'react';
import { ShoppingBag, CheckCircle2, ShieldCheck, Zap, Truck, Clock } from 'lucide-react';

export const ClareadorWhatsInside = () => {
  const benefits = [
    "Fórmula patenteada 100% natural",
    "Mulateiro + Dolomita + Melaleuca + Argila",
    "Textura leve, absorção rápida",
    "Sem ácidos agressivos",
    "Testado dermatologicamente"
  ];

  return (
    <section className="py-24 px-6 bg-white border-b border-brand-blue/10">
        <div className="max-w-6xl mx-auto">
            <div className="bg-brand-gray-light rounded-[3.5rem] p-8 md:p-16 border-4 border-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <ShoppingBag size={200} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* INFO PRODUTO */}
                    <div className="space-y-10 relative z-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark tracking-tighter uppercase leading-tight">
                                O QUE VOCÊ <span className="text-brand-pink">RECEBE:</span>
                            </h2>
                            <div className="h-1.5 w-24 bg-brand-pink rounded-full"></div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="h-20 w-20 shrink-0 bg-white rounded-3xl flex items-center justify-center text-5xl shadow-sm border border-brand-blue/10">🧴</div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-brand-blue-dark uppercase leading-none">AMAZOLÉ CLAREADOR</h3>
                                <p className="text-brand-pink font-bold uppercase tracking-widest text-sm">50g (rende 30 dias em 1 área)</p>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {benefits.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold text-brand-text group">
                                    <div className="bg-white p-1 rounded-full text-brand-blue shadow-sm border border-brand-blue/10 group-hover:scale-110 transition-transform"><CheckCircle2 size={20} /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* BADGES DE SEGURANÇA */}
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        {[
                            { icon: Truck, t: "FRETE GRÁTIS", c: "text-emerald-600", bg: "bg-emerald-50" },
                            { icon: Zap, t: "ENVIO IMEDIATO", c: "text-brand-blue", bg: "bg-blue-50" },
                            { icon: ShieldCheck, t: "SEGURO DE ENTREGA", c: "text-brand-blue-dark", bg: "bg-brand-blue/5" },
                            { icon: Clock, t: "GARANTIA 90 DIAS", c: "text-brand-pink", bg: "bg-brand-pink/5" }
                        ].map((badge, i) => (
                            <div key={i} className={cn("p-8 rounded-[2.5rem] border-2 border-white shadow-md flex flex-col items-center justify-center text-center gap-4 group hover:scale-105 transition-all", badge.bg)}>
                                <badge.icon className={cn("h-10 w-10", badge.c)} />
                                <p className={cn("font-black text-[10px] md:text-xs uppercase tracking-widest", badge.c)}>{badge.t}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// Componente cn local caso necessário
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}