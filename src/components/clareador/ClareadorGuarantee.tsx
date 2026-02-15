"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ClareadorGuarantee = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto bg-[#FDF8F3] border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem]">
            <ShieldCheck className="mx-auto h-24 w-24 text-brand-blue-dark mb-10" />
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase text-brand-blue-dark">Satisfação Blindada</h2>
            <p className="text-xl text-slate-600 italic">Teste o Amazolé por 90 dias. Se não amar o resultado, devolvemos 100% do seu dinheiro sem burocracia.</p>
        </div>
    </section>
  );
};