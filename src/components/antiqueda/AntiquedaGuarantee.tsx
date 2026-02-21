"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AntiquedaGuarantee = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-50 text-center">
        <div className="max-w-4xl mx-auto bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
            <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">Use o Kit Cavalo de Raça por 7 dias. Se você não AMAR o resultado, nós devolvemos 100% do seu dinheiro. Sem perguntas. Porque temos certeza que você vai se apaixonar.</p>
            <div className="inline-block px-8 py-2 bg-slate-950 text-orange-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">Compromisso Bio Instinto</div>
        </div>
    </section>
  );
};