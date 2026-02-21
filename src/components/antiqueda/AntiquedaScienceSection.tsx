"use client";

import React from 'react';
import { Microscope, Anchor, Layers, ShieldCheck } from 'lucide-react';

export const AntiquedaScienceSection = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-24">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Cavalo de Raça</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">POR QUE ESTE KIT PARA A QUEDA EM <span className="text-orange-700">7 DIAS?</span></h2>
                <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">TECNOLOGIA TRIPLA ANCORAGEM™</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-orange-50 text-orange-700 rounded-2xl shadow-sm border border-orange-100"><Microscope size={24} /></div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                    </div>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">Seu cabelo cai por <span className="text-orange-600 font-black">3 MOTIVOS:</span></p>
                    <div className="space-y-4">
                        {[
                            { n: "1", t: "RAIZ ENFRAQUECIDA", d: "Seu folículo não tem força para segurar o peso do fio." },
                            { n: "2", t: "FIBRA QUEBRADA", d: "O fio está tão seco que parte ao meio antes mesmo de cair." },
                            { n: "3", t: "PROTEÇÃO DESTRUÍDA", d: "Cutículas abertas deixam o fio solto e vulnerável." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-[#FDF8F3] rounded-2xl border border-orange-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="h-8 w-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black shrink-0 shadow-sm">{item.n}</div>
                                <div><p className="font-black text-orange-950 uppercase text-sm tracking-widest mb-1">{item.t}</p><p className="text-slate-500 font-medium text-sm">{item.d}</p></div>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-orange-200 pl-6 py-2">Imagine um cabo de aço tentando segurar um peso enorme enquanto a base está solta no barro. Não importa quão forte seja o cabo, ele vai soltar. Nossa tecnologia "cimenta" a base enquanto reforça o cabo.</p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[100px]"></div>
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" alt="Tripla Ancoragem" className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-1000 hover:scale-[1.03]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Anchor, title: "CAMADA 1: ANCORA A RAIZ", prod: "Shampoo Reconstrutor", desc: "Remove resíduos químicos que DISSOLVEM a proteção da raiz e deposita aminoácidos que RECONSTROEM a bainha folicular.", feels: ["1ª lavada: Couro cabeludo respira", "3 dias: Fios param de soltar", "7 dias: Raiz firme (Zero quebra)"], analogia: "É como cimentar um poste que estava solto no chão. O fio PARA de cair porque ele está PRESO de verdade." },
                    { icon: Layers, title: "CAMADA 2: RECONSTRÓI A FIBRA", prod: "Máscara Intensiva", desc: "Penetra na ESTRUTURA INTERNA do fio com queratina biomimética, unindo pontas quebradas como se fossem soldar.", feels: ["1ª aplicação: Fio fica pesado", "1 semana: Para de ver fios partidos", "2 semanas: Fio DOBRA sem quebrar"], analogia: "É como consertar rachaduras numa parede. Não adianta pintar. Tem que TAPAR o buraco." },
                    { icon: ShieldCheck, title: "CAMADA 3: SELA E PROTEGE", prod: "Condicionador + Leave-in", desc: "Fecha as cutículas e cria um FILME PROTETOR contra atrito e calor, impedindo que o fio quebre no dia a dia.", feels: ["Imediato: Fio desembaraça sozinho", "3 dias: ZERO eletricidade estática", "1 semana: Escova sem fios no chão"], analogia: "É como envernizar madeira. Protege de água, sol, atrito. Dura MUITO mais." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col p-8 md:p-10 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-500 group">
                        <div className="p-4 bg-[#FDF8F3] rounded-2xl shadow-sm w-fit mb-8 group-hover:scale-110 transition-transform"><step.icon className="h-8 w-8 text-orange-700" /></div>
                        <div className="space-y-6 flex-1">
                            <div className="space-y-2"><h4 className="text-xl font-black text-slate-950 uppercase tracking-tight leading-tight">{step.title}</h4><p className="text-xs font-black text-orange-600 uppercase tracking-widest">({step.prod})</p></div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                            <div className="space-y-3 pt-4 border-t border-orange-50">{step.feels.map((feel, idx) => ( <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700"><div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>{feel}</div> ))}</div>
                            <div className="mt-auto pt-6"><div className="p-5 bg-[#FDF8F3] rounded-3xl border border-orange-100 text-xs text-slate-500 italic leading-relaxed"><span className="font-black text-slate-900 not-italic uppercase block mb-1 text-[9px] tracking-widest">Analogia Profissional:</span>{step.analogia}</div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};