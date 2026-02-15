"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const ClareadorFooter = () => {
  return (
    <footer className="py-20 bg-[#FDF8F3] text-brand-text border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-200">
            <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-brand-blue-dark">Avisos e Isenções</h3>
                <p className="text-xs text-slate-500">Este produto tem caráter cosmético e natural. Não oferece diagnóstico ou cura. Resultados variam de pessoa para pessoa.</p>
            </div>
            <div className="text-center md:text-right">
                <span className="text-4xl font-black text-brand-blue-dark uppercase">AMAZOLÉ</span>
            </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase text-slate-400 mb-12">
            <Dialog><DialogTrigger className="hover:text-brand-pink">Termos</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Termos</DialogTitle></DialogHeader><ScrollArea className="h-96 pr-4 text-sm"><p>Conteúdo informativo...</p></ScrollArea></DialogContent></Dialog>
            <Dialog><DialogTrigger className="hover:text-brand-pink">Privacidade</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Privacidade</DialogTitle></DialogHeader><ScrollArea className="h-96 pr-4 text-sm"><p>Dados protegidos...</p></ScrollArea></DialogContent></Dialog>
        </nav>

        <div className="text-center opacity-50 flex justify-center gap-6 mb-8"><ShieldCheck size={40} /><Lock size={40} /><CreditCard size={40} /></div>
        <div className="text-center pt-8 border-t border-slate-200"><p className="text-[9px] text-slate-300 uppercase tracking-widest">© 2025 Amazolé - Clareador Natural da Amazônia</p></div>
      </div>
    </footer>
  );
};