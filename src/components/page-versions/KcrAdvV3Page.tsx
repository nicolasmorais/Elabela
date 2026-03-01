"use client";

import React from 'react';
import { PageTracker } from "./PageTracker";
import { Header } from '@/components/kcr-adv-v3/Header';
import { ArticleContent } from '@/components/kcr-adv-v3/ArticleContent';
import { SolutionSection } from '@/components/kcr-adv-v3/SolutionSection';
import { CtaBlock } from '@/components/kcr-adv-v3/CtaBlock';
import { Share2, Facebook, Instagram } from 'lucide-react';

export function KcrAdvV3Page() {
  return (
    <>
      <PageTracker contentId="adv-kcr-v3" />
      <div className="bg-[#fcfcfc] text-slate-800 font-merriweather antialiased min-h-screen pb-20">
        
        {/* BLOG NAV */}
        <nav className="bg-white border-b border-slate-100 py-6 px-6 sticky top-0 z-50 shadow-sm font-sans">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <span className="text-xl font-serif italic font-bold tracking-tighter text-pink-600">Meu Diário de Saúde e Beleza</span>
                <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="hover:text-pink-500 cursor-pointer">Início</span>
                    <span className="hover:text-pink-500 cursor-pointer">Sobre Mim</span>
                    <span className="hover:text-pink-500 cursor-pointer">Contato</span>
                </div>
                <Share2 size={20} className="text-slate-300 md:hidden" />
            </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-10 md:py-16 space-y-12">
            <Header />
            <ArticleContent />
            <SolutionSection />
            <CtaBlock />

            {/* BLOG FOOTER */}
            <footer className="pt-20 space-y-10 border-t border-slate-100 font-sans">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                  <div className="flex gap-6 text-slate-900">
                      <Facebook size={20} className="cursor-pointer hover:text-blue-600" /> 
                      <Instagram size={20} className="cursor-pointer hover:text-pink-600" /> 
                      <Share2 size={20} className="cursor-pointer hover:text-slate-600" />
                  </div>
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <span className="cursor-pointer">Políticas</span>
                      <span className="cursor-pointer">Contato</span>
                  </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-2xl text-[10px] text-slate-400 leading-relaxed text-justify italic">
                  Este post pode conter links de afiliados. Isso significa que posso receber uma comissão se você comprar através do link, sem custo adicional para você. Resultados podem variar de pessoa para pessoa.
              </div>
              
              <p className="text-center text-[10px] text-slate-300 font-black uppercase tracking-[0.2em]">
                  © 2024 Meu Diário de Saúde e Beleza. Todos os direitos reservados.
              </p>
            </footer>
        </main>
      </div>
    </>
  );
}