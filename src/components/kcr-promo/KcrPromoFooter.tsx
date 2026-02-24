"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const KcrPromoFooter = () => {
  return (
    <footer className="py-20 bg-[#FDF8F3] text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
            <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em]">Avisos e Isenções</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Este conteúdo tem caráter informativo e educacional. Não substitui consulta médica. Os resultados variam de pessoa para pessoa.</p>
            </div>
            <div className="space-y-6 text-center md:text-left">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-14 mx-auto md:mx-0" />
                <div className="text-xs text-slate-500"><p>OneBase | Soluções Digitais</p><p>CNPJ: 60.357.932/0001-18</p></div>
            </div>
        </div>

        <nav className="flex flex-col md:flex-row gap-8 justify-center mb-12 text-xs font-bold uppercase tracking-widest text-slate-500">
            <button className="hover:text-orange-600">Termos e Condições</button>
            <button className="hover:text-orange-600">Política de Privacidade</button>
            <button className="hover:text-orange-600">Política de Reembolso</button>
        </nav>

        <div className="text-center opacity-50 flex justify-center gap-6 mb-8"><ShieldCheck size={40} /><Lock size={40} /><CreditCard size={40} /></div>
        <div className="text-center pt-8 border-t border-slate-200"><p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p></div>
      </div>
    </footer>
  );
};