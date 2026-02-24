"use client";

import React from 'react';
import { Check, Anchor, Dumbbell, Droplets, Microscope, FlaskConical } from 'lucide-react';

export const KcrPromoIngredients = () => {
  // Componente ocultado conforme solicitação
  return null;

  /*
  return (
    <section className="py-32 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] block">Diferencial Bio Instinto</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                            POR QUE <span className="text-orange-700 italic">CAVALO DE RAÇA</span> E OUTROS NÃO?
                        </h2>
                        <p className="text-xl text-slate-500 font-bold uppercase tracking-tight">3 Ingredientes Científicos Que Fazem a Diferença</p>
                    </div>

                    <div className="space-y-10 relative">
                        <div className="absolute left-6 top-8 bottom-8 w-1 bg-orange-100 -z-10 rounded-full"></div>

                        {[
                            { 
                                icon: Anchor, 
                                n: "1️⃣", 
                                t: "BIOTINA (Vitamina H)", 
                                bullets: ["Ancora o fio na raiz", "Reduz queda por enfraquecimento"], 
                                feel: "Menos fios no ralo em 3 dias" 
                            },
                            { 
                                icon: Dumbbell, 
                                n: "2️⃣", 
                                t: "PROTEÍNA DE TRIGO HIDROLISADA", 
                                bullets: ["Reconstrói fibra capilar", "Preenche \"buracos\" do fio"], 
                                feel: "Fio 3x mais forte em 1 semana" 
                            },
                            { 
                                icon: Droplets, 
                                n: "3️⃣", 
                                t: "PANTENOL (Pró-Vitamina B5)", 
                                bullets: ["Sela cutículas e protege", "Forma filme protetor"], 
                                feel: "Escova sem quebra imediata" 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-orange-500 transition-colors">
                                    <item.icon className="h-6 w-6 text-orange-700" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase">{item.t}</h4>
                                    <ul className="space-y-2">
                                        {item.bullets.map((b, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                <Check size={14} className="text-emerald-500" strokeWidth={4} /> {b}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100/50 inline-block">
                                        <p className="text-[10px] font-black text-orange-900 uppercase tracking-widest leading-none mb-1">Você Sente:</p>
                                        <p className="text-sm font-bold text-orange-700 leading-none">{item.feel}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-950 rounded-[4rem] p-10 md:p-16 text-white space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><FlaskConical size={180} /></div>
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <Microscope className="text-orange-500" />
                            <h3 className="text-xl font-black uppercase tracking-widest">🔬 FÓRMULA EXCLUSIVA</h3>
                        </div>
                        <div className="h-0.5 w-full bg-white/10"></div>
                    </div>
                    <div className="space-y-8 relative z-10">
                        <h4 className="text-lg font-black uppercase tracking-[0.2em] text-orange-500">✅ MAIS 3 DIFERENCIAIS:</h4>
                        <div className="space-y-6">
                            {["pH Balanceado (não agride raiz)", "Concentração Profissional (dose terapêutica)", "Sistema 4 Passos (sinergia completa)"].map((diff, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:scale-[2] transition-transform"></div>
                                    <p className="text-xl font-bold tracking-tight text-white/90">{diff}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/10 relative z-10">
                        <div className="bg-orange-600 p-8 rounded-[2.5rem] text-center shadow-xl">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-orange-100">RESULTADO COMPROVADO:</p>
                            <p className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">87% Menos Queda em 7 Dias</p>
                            <p className="text-xs font-bold text-orange-200 uppercase tracking-widest">Não é promessa. É ciência aplicada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
  */
};