"use client";

import React from 'react';
import { Microscope, Check, Zap, Info, FlaskConical, Droplets, Scissors, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ClareadorScienceSection = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Header da Seção */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100">Exclusividade Amazolé</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-brand-blue-dark uppercase leading-[0.9] mb-4">
                    POR QUE AMAZOLÉ CLAREIA EM <span className="text-brand-pink">SEMANAS?</span>
                </h2>
                <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">FÓRMULA PATENTEADA DA AMAZÔNIA</p>
                    <p className="text-sm font-bold text-orange-600 italic">(Sem Ácidos Que Ardem, Descascam ou Mancham Mais)</p>
                </div>
            </div>

            {/* Explicação Inicial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-brand-blue/10 text-brand-blue-dark rounded-2xl shadow-sm border border-brand-blue/20">
                            <Microscope size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-brand-blue-dark uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                    </div>
                    
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">
                        Sua mancha escura existe por <span className="text-brand-pink font-black">3 MOTIVOS:</span>
                    </p>

                    <div className="space-y-6">
                        {[
                            { n: "1", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área." },
                            { n: "2", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação e suor mantém a pele irritada." },
                            { n: "3", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-brand-gray-light rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="h-8 w-8 rounded-lg bg-brand-blue-dark text-white flex items-center justify-center font-black shrink-0 shadow-sm">{item.n}</div>
                                <div>
                                    <p className="font-black text-brand-blue-dark uppercase text-sm tracking-widest mb-1">{item.t}</p>
                                    <p className="text-slate-500 font-medium text-sm">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-3">
                        <p className="text-sm text-red-800 font-medium leading-relaxed">
                            Produtos comuns usam <strong className="font-black">ÁCIDOS</strong> para "queimar" a mancha. <br />
                            <span className="font-bold">Resultado:</span> Arde, descasca, irrita, e a mancha volta <strong className="underline">PIOR</strong>.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-blue-dark rounded-[4rem] p-10 md:p-16 text-white space-y-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12"><FlaskConical size={180} /></div>
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Amazolé é <br /><span className="text-brand-pink italic">Totalmente Diferente:</span></h3>
                        <p className="text-slate-300 font-medium leading-relaxed">Nossa tecnologia não agride. Ela ensina sua pele a parar de produzir o escurecimento enquanto reconstrói a barreira natural.</p>
                        <div className="h-1 w-20 bg-brand-pink rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* As 3 Etapas */}
            <div className="space-y-12">
                
                {/* ETAPA 1 */}
                <div className="bg-white rounded-[3.5rem] border-2 border-slate-100 shadow-sm overflow-hidden group hover:border-brand-pink/30 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-4 bg-brand-gray-light p-10 flex flex-col justify-center items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center text-brand-pink group-hover:scale-110 transition-transform">
                                <Zap size={40} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">PASSO 01</p>
                                <h4 className="text-2xl font-black text-brand-blue-dark leading-none">BLOQUEIA MELANINA</h4>
                            </div>
                        </div>
                        <div className="lg:col-span-8 p-10 md:p-16 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <p className="font-black text-brand-blue-dark uppercase tracking-widest text-sm">MULATEIRO (Amazônia):</p>
                                    <ul className="space-y-2">
                                        {["Inibe produção de melanina", "Antioxidante poderoso", "Cicatrizante natural"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-brand-pink" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-black text-brand-blue-dark uppercase tracking-widest text-sm">DOLOMITA (Mineral):</p>
                                    <ul className="space-y-2">
                                        {["Rico em cálcio e magnésio", "Regenera células da pele", "Clareia SEM queimar"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-brand-pink" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                <div className="space-y-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink">O QUE VOCÊ SENTE:</p>
                                    <div className="space-y-1 text-sm font-bold text-slate-800">
                                        <p>✅ 1ª semana: Pele mais uniforme</p>
                                        <p>✅ 2 semanas: Tom começa a clarear</p>
                                        <p>✅ 4 semanas: Mancha visivelmente clara</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-3xl space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ANALOGIA:</p>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">
                                        É como desligar a <strong className="text-brand-blue-dark">TORNEIRA</strong> que jorra tinta preta. Não adianta limpar se continua jorrando. Mulateiro FECHA a torneira.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ETAPA 2 */}
                <div className="bg-white rounded-[3.5rem] border-2 border-slate-100 shadow-sm overflow-hidden group hover:border-brand-blue/30 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-4 bg-blue-50 p-10 flex flex-col justify-center items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                                <Droplets size={40} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">PASSO 02</p>
                                <h4 className="text-2xl font-black text-brand-blue-dark leading-none">ACALMA INFLAMAÇÃO</h4>
                            </div>
                        </div>
                        <div className="lg:col-span-8 p-10 md:p-16 space-y-10">
                            <div className="space-y-3">
                                <p className="font-black text-brand-blue-dark uppercase tracking-widest text-sm">ÓLEO DE MELALEUCA:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        {["Antibacteriano e antifúngico", "Acalma irritação de atrito"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-brand-blue" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-2">
                                        {["Previne foliculite (bolinhas)", "Repara o tecido irritado"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-brand-blue" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                <div className="space-y-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue">O QUE VOCÊ SENTE:</p>
                                    <div className="space-y-1 text-sm font-bold text-slate-800">
                                        <p>✅ Imediato: Pele para de coçar/arder</p>
                                        <p>✅ 3 dias: Vermelhidão diminui</p>
                                        <p>✅ 1 semana: Pele lisa (sem bolinhas)</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-3xl space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ANALOGIA:</p>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">
                                        É como apagar um <strong className="text-brand-blue-dark">INCÊNDIO</strong> antes de pintar a parede. Se tá pegando fogo, não adianta pintar. Melaleuca APAGA o fogo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ETAPA 3 */}
                <div className="bg-white rounded-[3.5rem] border-2 border-slate-100 shadow-sm overflow-hidden group hover:border-slate-300 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-4 bg-slate-50 p-10 flex flex-col justify-center items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                                <Layers size={40} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">PASSO 03</p>
                                <h4 className="text-2xl font-black text-brand-blue-dark leading-none">REMOVE CÉLULAS ESCURAS</h4>
                            </div>
                        </div>
                        <div className="lg:col-span-8 p-10 md:p-16 space-y-10">
                            <div className="space-y-3">
                                <p className="font-black text-brand-blue-dark uppercase tracking-widest text-sm">ARGILA BRANCA AMAZÔNICA:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ul className="space-y-2">
                                        {["Esfolia suavemente (sem arder)", "Absorve impurezas profundas"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-slate-400" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-2">
                                        {["Clareia progressivamente", "Controla oleosidade local"].map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600"><Check size={14} className="text-slate-400" strokeWidth={4} /> {li}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                <div className="space-y-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">O QUE VOCÊ SENTE:</p>
                                    <div className="space-y-1 text-sm font-bold text-slate-800">
                                        <p>✅ 1ª aplicação: Pele macia ao toque</p>
                                        <p>✅ 1 semana: Textura visivelmente lisa</p>
                                        <p>✅ 2 semanas: Tom mais claro visível</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-3xl space-y-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ANALOGIA:</p>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">
                                        É como <strong className="text-brand-blue-dark">LIXAR</strong> madeira antes de envernizar. Remove o escuro sem agredir. Argila faz isso naturalmente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};