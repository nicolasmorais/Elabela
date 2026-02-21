"use client";

import React from 'react';
import { Play, Calendar, Clock, Sparkles, Lightbulb, Info, AlertCircle, CheckCircle2, ShoppingBag, Check } from 'lucide-react';

export const AntiquedaUsageGuide = () => {
  return (
    <section className="py-32 px-6 bg-[#FDF8F3] relative overflow-hidden border-b border-orange-100">
        <div className="max-w-6xl mx-auto space-y-20">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm"><Play className="h-4 w-4 text-orange-600 fill-current" /><span className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">Guia de Aplicação</span></div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">COMO USAR O <span className="text-orange-700">KIT CAVALO DE RAÇA</span></h2>
                <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">15 Minutos no Banho = Resultado Profissional</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-orange-50 space-y-10 h-full">
                    <div className="flex items-center gap-4 border-b border-orange-50 pb-6"><div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg shadow-orange-100"><Calendar size={24} /></div><div><h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">ROTINA DIÁRIA</h3><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">(TODO BANHO)</p></div></div>
                    <div className="space-y-8">
                        {[
                            { n: "1️⃣", t: "SHAMPOO RECONSTRUTOR", d: "Aplique no cabelo molhado, massageie o couro cabeludo até espumar. Enxágue e REPITA (segunda lavada = absorção melhor).", time: "3 minutos" },
                            { n: "2️⃣", t: "CONDICIONADOR FORTIFICANTE", d: "Aplique do meio às pontas (evite raiz). Deixe agir por 2 minutos e enxágue completamente.", time: "2 minutos" },
                            { n: "3️⃣", t: "LEAVE-IN PROTETOR", d: "Com o cabelo úmido, espalhe nas mãos e aplique do meio às pontas. NÃO enxágue. Seque normalmente.", time: "1 minuto" }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="h-10 w-10 shrink-0 bg-[#FDF8F3] rounded-xl flex items-center justify-center font-black text-orange-800 text-lg border border-orange-100 group-hover:scale-110 transition-transform">{step.n.replace(/[^\d]/g, '')}</div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between"><h4 className="font-black text-slate-950 text-sm uppercase tracking-wider">{step.t}</h4><span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full"><Clock size={10} /> {step.time}</span></div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 h-full flex flex-col">
                    <div className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-xl border border-orange-50 space-y-10 flex-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none rotate-12 text-orange-200"><Sparkles size={180} /></div>
                        <div className="flex items-center gap-4 border-b border-orange-50 pb-6"><div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg"><Calendar size={24} /></div><div><h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">ROTINA SEMANAL</h3><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">(2X POR SEMANA)</p></div></div>
                        <div className="space-y-6">
                            <div className="flex gap-6 group">
                                <div className="h-10 w-10 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center font-black text-orange-800 text-lg border border-orange-100">4</div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between"><h4 className="font-black text-slate-950 text-lg uppercase tracking-tight">MÁSCARA ANTI-QUEDA</h4><span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100"><Clock size={12} /> 15 min</span></div>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-none mb-2">(Substitui o condicionador 2x na semana)</p>
                                    <ul className="space-y-3">{["Após o shampoo, retire o excesso de água", "Aplique do comprimento às pontas", "Massageie suavemente mecha a mecha", "Deixe agir de 10 a 15 minutos", "Enxágue completamente"].map((li, i) => ( <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700"><Check size={14} className="text-orange-600" strokeWidth={4} /> {li}</li> ))}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-4 border-white relative overflow-hidden">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tight mb-12"><div className="p-2.5 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-200"><ShoppingBag size={24} /></div> VOCÊ RECEBE O KIT COMPLETO:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {[
                        { t: "Shampoo Reconstrutor 300ml", d: "Ancora a raiz (fio para de SOLTAR)" },
                        { t: "Condicionador Fortificante 300ml", d: "Sela cutícula (fio para de QUEBRAR)" },
                        { t: "Máscara Anti-Queda Intensiva 250g", d: "Reconstrói fibra (fio fica FORTE)" },
                        { t: "Leave-in Protetor 200ml", d: "Protege estrutura (resultado DURA)" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-5 group">
                            <div className="w-14 h-14 shrink-0 bg-[#FDF8F3] rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform shadow-sm"><span className="text-3xl">🧴</span></div>
                            <div className="space-y-1.5"><p className="font-black text-slate-950 text-xl leading-tight uppercase tracking-tight">{item.t}</p><p className="text-slate-400 font-bold text-base leading-tight italic">→ {item.d}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};