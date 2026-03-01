"use client";

import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award } from 'lucide-react';

export const KcrPromoAnvisa = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-200 shadow-sm relative overflow-hidden">
                {/* Decorativo de fundo */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute top-0 right-0 p-12 opacity-5 text-slate-900 pointer-events-none">
                    <ShieldCheck size={300} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    {/* Selo e Título */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 shrink-0">
                                <FileCheck className="h-12 w-12 text-blue-600" strokeWidth={2} />
                            </div>
                            <div className="text-center md:text-left space-y-2">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">Garantia de Segurança</span>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-tight">
                                    APROVADO E TESTADO <br /> <span className="text-blue-600 italic">PELA ANVISA</span>
                                </h2>
                            </div>
                        </div>

                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            O Kit Cavalo de Raça é produzido seguindo os mais rigorosos padrões de qualidade e segurança exigidos pela Agência Nacional de Vigilância Sanitária.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                "Registro Oficial no Ministério da Saúde",
                                "Fórmula Dermatologicamente Testada",
                                "Livre de Substâncias Tóxicas",
                                "Processo de Extração Sustentável"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" strokeWidth={3} />
                                    <span className="font-bold text-sm text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card de Certificação */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl space-y-6 text-center">
                            <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <Award size={32} />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Selo de Autenticidade</p>
                                <p className="text-2xl font-black text-slate-900 leading-tight">Qualidade Profissional Certificada</p>
                            </div>
                            <div className="h-px w-full bg-slate-100"></div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                                "Nossa prioridade é a sua saúde. Cada lote passa por inspeções detalhadas para garantir que você receba o melhor tratamento capilar do Brasil."
                            </p>
                            <div className="pt-2">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 py-2 rounded-xl">Produto Notificado na ANVISA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};