"use client";

import React from 'react';
import { Microscope, Anchor, Layers, ShieldCheck, Zap, FlaskConical } from 'lucide-react';

export const KcrOriginalQuadrupleAction = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-24">
            
            {/* CABEÇALHO DA SEÇÃO */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">Exclusividade Cavalo de Raça</span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9] mb-4">
                    POR QUE ESTE KIT PARA A QUEDA EM <span className="text-orange-700">7 DIAS?</span>
                </h2>
                <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-tight">
                    TECNOLOGIA QUÁDRUPLA ANCORAGEM™
                </p>
            </div>

            {/* COMO FUNCIONA - 4 MOTIVOS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-orange-50 text-orange-700 rounded-2xl shadow-sm border border-orange-100">
                            <Microscope size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">🔬 COMO FUNCIONA (Ciência Simples)</h3>
                    </div>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">
                        Depois dos 40, seu cabelo cai por <span className="text-orange-600 font-black">4 MOTIVOS</span> — e a maioria dos produtos trata só um deles:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { n: "1", t: "RAIZ ENFRAQUECIDA", d: "Os hormônios mudaram. Seu folículo perdeu força e não segura mais o fio." },
                            { n: "2", t: "FIBRA QUEBRADA", d: "O fio ficou tão ressecado e fraco que parte ao meio antes de cair da raiz." },
                            { n: "3", t: "PROTEÇÃO DESTRUÍDA", d: "Cutículas abertas deixam o fio exposto e vulnerável a qualquer atrito." },
                            { n: "4", t: "FOLÍCULO INATIVO", d: "O fio caiu — mas o folículo ficou parado. Sem sinal, nada nasce no lugar." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-[#FDF8F3] rounded-2xl border border-orange-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="h-8 w-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black shrink-0 shadow-sm">{item.n}</div>
                                <div>
                                    <p className="font-black text-orange-950 uppercase text-xs tracking-widest mb-1">{item.t}</p>
                                    <p className="text-slate-500 font-medium text-xs leading-tight">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-400/5 rounded-full blur-[100px]"></div>
                    <img 
                        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                        alt="Tecnologia Quádrupla Ancoragem" 
                        className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-1000 hover:scale-[1.03]"
                    />
                </div>
            </div>

            {/* AS 4 CAMADAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { 
                        icon: Anchor, 
                        title: "CAMADA 1: ANCORA A RAIZ", 
                        prod: "Shampoo Reconstrutor",
                        desc: "Remove os resíduos químicos que dissolvem a proteção da raiz e deposita aminoácidos que reconstroem a bainha folicular — a base que segura o seu cabelo.",
                        feels: ["✔ 1ª lavada: couro cabeludo respira", "✔ 3 dias: fios param de soltar", "✔ 7 dias: raiz firme, zero quebra"],
                        analogia: "É como cimentar um poste que estava solto no chão. O fio para de cair porque ele está preso de verdade."
                    },
                    { 
                        icon: Layers, 
                        title: "CAMADA 2: RECONSTRÓI A FIBRA", 
                        prod: "Máscara Anti-Queda Intensiva",
                        desc: "Penetra na estrutura interna do fio com queratina biomimética — une as pontas quebradas como se fosse soldar. O fio que estava partido por dentro volta a ser um só.",
                        feels: ["✔ 1ª aplicação: fio com peso de fio saudável", "✔ 1 semana: para de ver fios partidos no pente", "✔ 2 semanas: fio dobra sem quebrar"],
                        analogia: "É como consertar rachaduras numa parede. Não adianta pintar por cima. Tem que tapar o buraco."
                    },
                    { 
                        icon: ShieldCheck, 
                        title: "CAMADA 3: SELA E PROTEGE", 
                        prod: "Condicionador + Leave-in",
                        desc: "Fecha as cutículas abertas e cria um filme protetor contra calor, atrito e umidade — impedindo que o fio reconstruído quebre de novo no dia a dia.",
                        feels: ["✔ Imediato: fio desembaraça sozinho", "✔ 3 dias: zero eletricidade estática", "✔ 1 semana: escova sem fios no chão"],
                        analogia: "É como envernizar madeira. Protege de água, sol e atrito. O resultado dura muito mais."
                    },
                    { 
                        icon: Zap, 
                        title: "CAMADA 4: ATIVA O NASCIMENTO", 
                        prod: "Tônico Capilar Antiqueda",
                        desc: "Esta é a camada que os outros kits não têm — e a mais importante para mulheres acima dos 40. Quando o cabelo cai por causa dos hormônios, o folículo fica inativo. O tônico reativa o ciclo de crescimento.",
                        feels: ["✔ Primeiros dias: folículo ativado", "✔ 2 semanas: queda reduz também na raiz", "✔ 3 a 4 semanas: fios novos aparecendo"],
                        special: "As outras 3 camadas cuidam do fio que já existe. O tônico cuida do fio que ainda vai nascer.",
                        analogia: "É como adubar o solo antes de plantar. Não adianta só cuidar da planta que já cresceu. Tem que preparar o terreno para o novo nascer forte."
                    }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col p-8 md:p-10 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full">
                        <div className="p-4 bg-[#FDF8F3] rounded-2xl shadow-sm w-fit mb-8 group-hover:scale-110 transition-transform">
                            <step.icon className="h-8 w-8 text-orange-700" />
                        </div>
                        <div className="space-y-6 flex-1 flex flex-col">
                            <div className="space-y-2">
                                <h4 className="text-xl font-black text-slate-950 uppercase tracking-tight leading-tight">{step.title}</h4>
                                <p className="text-xs font-black text-orange-600 uppercase tracking-widest">({step.prod})</p>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                            
                            {step.special && (
                                <p className="text-xs font-black text-slate-900 border-l-4 border-orange-600 pl-4 py-1 italic">{step.special}</p>
                            )}

                            <div className="space-y-3 pt-4 border-t border-orange-50">
                                {step.feels.map((feel, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                        {feel}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-6">
                                <div className="p-5 bg-[#FDF8F3] rounded-3xl border border-orange-100 text-xs text-slate-500 italic leading-relaxed">
                                    <span className="font-black text-slate-900 not-italic uppercase block mb-1 text-[9px] tracking-widest">Analogia Profissional:</span>
                                    {step.analogia}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* DICA DE USO DO TÔNICO */}
            <div className="max-w-3xl mx-auto bg-slate-950 text-white rounded-[2.5rem] p-8 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 p-8 opacity-10"><FlaskConical size={80} /></div>
                <p className="text-xl font-black relative z-10 uppercase tracking-tight mb-2">💡 Dica de Ouro do Tônico:</p>
                <p className="text-lg text-slate-300 relative z-10 leading-relaxed">
                    Aplique após o banho, direto no couro cabeludo. Massageie com a ponta dos dedos para ativar a circulação. <strong className="text-white">Não enxágue.</strong>
                </p>
            </div>
        </div>
    </section>
  );
};