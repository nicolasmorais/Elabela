"use client";

import React from 'react';

export const AntiquedaMediaBar = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-30 grayscale group">
           <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-2 md:mb-0">Destaque na Mídia:</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">G1</span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans italic">R7</span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">GLOBO</span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans">BAND</span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 font-sans underline decoration-4">SBT</span>
           </div>
        </div>
      </div>
    </section>
  );
};