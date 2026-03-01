"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

export const Header = () => {
  const [city, setCity] = useState('São Paulo, SP');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(`${data.city}, ${data.region_code || ''}`); })
      .catch(() => {});
  }, []);

  return (
    <header className="space-y-6 font-sans">
      <div className="flex items-center gap-4 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-slate-100 pb-4">
          <span className="flex items-center gap-1.5"><Calendar size={14} className="text-pink-500" /> 14 de Junho de 2025</span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-pink-500" /> 6 min de leitura</span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="text-pink-600 font-black">{city}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-serif font-black leading-[1.15] text-slate-900 tracking-tight">
          Eu chorava toda vez que olhava para o ralo do meu chuveiro. Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.
      </h1>
      
      <div className="flex items-center gap-4 pt-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold shadow-lg">CM</div>
          <div>
              <p className="text-sm font-black text-slate-900 leading-none">Cláudia Mendes</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">Especialista em Bem-Estar Feminino</p>
          </div>
      </div>
    </header>
  );
};