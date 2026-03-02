"use client";

import React from 'react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export const KcrOriginalKitContents = () => {
  const items = [
    { t: "Shampoo Reconstrutor 300ml", d: "Ancora a raiz (fio para de SOLTAR)" },
    { t: "Condicionador Fortificante 300ml", d: "Sela cutícula (fio para de QUEBRAR)" },
    { t: "Máscara Anti-Queda Intensiva 250g", d: "Reconstrói fibra (fio fica FORTE)" },
    { t: "Leave-in Protetor 200ml", d: "Protege estrutura (resultado DURA)" }
  ];

  return (
    <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-4 border-white relative overflow-hidden">
                <div className="space-y-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <div className="p-3 bg-orange-600 rounded-2xl text-white shadow-lg shadow-orange-200">
                            <ShoppingBag size={28} />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                            VOCÊ RECEBE O KIT COMPLETO:
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {items.map((item, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="w-16 h-16 shrink-0 bg-[#FDF8F3] rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform shadow-sm">
                                    <span className="text-3xl">🧴</span>
                                </div>
                                <div className="space-y-1.5 flex flex-col justify-center">
                                    <p className="font-black text-slate-950 text-xl leading-tight uppercase tracking-tight">{item.t}</p>
                                    <p className="text-slate-400 font-bold text-base leading-tight italic">→ {item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            "FRETE GRÁTIS",
                            "ENVIO IMEDIATO",
                            "SEGURO DE ENTREGA"
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-xs font-black uppercase text-emerald-700 tracking-[0.1em]">
                                <CheckCircle2 size={20} className="text-emerald-500" /> {badge}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorativo de Fundo */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                    <ShoppingBag size={280} />
                </div>
            </div>
        </div>
    </section>
  );
};