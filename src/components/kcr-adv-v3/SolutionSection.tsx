"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <div className="space-y-8 text-xl leading-relaxed text-slate-700">
      <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight">A mensagem da Renata que mudou tudo</h2>
      <p>Minha prima Renata me mandou uma foto do cabelo dela. Estava cheio, brilhoso e volumoso. Ela me contou sobre o <strong className="text-slate-900">Kit Cavalo de Raça, da Bio Instinto</strong>.</p>
      
      <p>Diferente de tudo que usei, esse kit trabalha com o que os especialistas chamam de <strong className="text-pink-600 uppercase tracking-tighter">Tripla Ancoragem™</strong>:</p>

      <div className="grid grid-cols-1 gap-4 pt-4">
        {[
          { t: "ANCORAGEM DA RAIZ", d: "Aminoácidos que travam o fio no folículo, impedindo que ele solte no banho." },
          { t: "RECONSTRUÇÃO DA FIBRA", d: "Queratina biomimética que 'solda' as partes quebradiças do fio." },
          { t: "SELAGEM DE CUTÍCULA", d: "Proteção contra o calor e atrito que causam a quebra no dia a dia." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
            <div>
              <p className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">{item.t}</p>
              <p className="text-base text-slate-500 font-medium">{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <img 
        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771647403021-Gemini_Generated_Image_q5dwjpq5dwjpq5dw.png" 
        alt="Resultados visíveis" 
        className="w-full h-auto rounded-3xl shadow-xl border-4 border-white"
      />
      
      <p>Com 3 semanas, eu percebi fios novos nascendo na frente. No primeiro mês, minha cabeleireira perguntou o que eu tinha feito. Hoje, 3 meses depois, meu cabelo está melhor do que quando eu tinha 20 anos.</p>
    </div>
  );
};