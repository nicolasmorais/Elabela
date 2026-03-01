"use client";

import React from 'react';
import Link from 'next/link';

export const CtaBlock = () => {
  const checkoutUrl = "https://seguro.elabela.store/r/RC8ASYUL88";

  return (
    <div className="space-y-8 pt-10 border-t border-slate-100">
      <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl space-y-6">
        <h3 className="text-2xl font-black text-rose-900 tracking-tight leading-tight">
          ⚠️ AVISO IMPORTANTE SOBRE O SITE OFICIAL
        </h3>
        <p className="text-lg text-rose-800 leading-relaxed font-medium">
          O Kit Cavalo de Raça Original só é vendido pelo site oficial <strong className="underline">elabela.store</strong>. Eu mesma tomei esse cuidado — tem muita cópia barata que não funciona.
        </p>
        
        <img 
          src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771648483540-FireShot-Capture-026---Elabela---Control-Pages---[portal.osegredodelas.site].png" 
          alt="Site Seguro Elabela" 
          className="w-full h-auto rounded-xl shadow-md border border-rose-100"
        />
      </div>

      <div className="text-center space-y-6">
        <p className="text-slate-600 font-bold text-xl">
          Consegui um link especial com desconto para as leitoras do blog:
        </p>
        
        <Link href={checkoutUrl} target="_blank">
          <button className="w-full bg-[#8B1A1A] hover:bg-[#701515] text-white font-black text-xl md:text-2xl py-8 px-6 rounded-2xl shadow-2xl transition-all uppercase tracking-tighter leading-tight flex items-center justify-center gap-3 active:scale-[0.98]">
             CLIQUE AQUI PARA VER O KIT COM DESCONTO
          </button>
        </Link>
        
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            (Verificar se o desconto de R$ 147 ainda está ativo hoje)
        </p>
      </div>
    </div>
  );
};