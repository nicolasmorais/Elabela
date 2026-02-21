"use client";

import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AntiquedaFooter = () => {
  return (
    <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-30"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
            <div className="space-y-4">
                <h3 className="text-sm font-black text-orange-950 uppercase tracking-[0.2em]">Avisos e Isenções de Responsabilidade</h3>
                <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                    <div><p className="font-bold text-slate-700 mb-1">Isenção de Responsabilidade</p><p>Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar any mudança na dieta, no consumo de chás, suplementos ou rotina de bem-estar.</p></div>
                    <div><p className="font-bold text-slate-700 mb-1">Aviso de Idade</p><p>Conteúdo destinado a maiores de 18 anos.</p></div>
                    <div><p className="font-bold text-slate-700 mb-1">Declaração de Risco</p><p>O uso de qualquer product natural deve ser feito com responsabilidade. Pessoas com condições médicas pré-existentes, gestantes, lactantes ou usuários de medicamentos devem buscar orientação profissional antes do consumo.</p></div>
                </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-14 mx-auto md:mx-0" />
                <div className="space-y-2"><p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p><p className="text-xs text-slate-500 leading-relaxed">E-Business Rio Verde | Aparecida de Goiania - GO<br />CNPJ: 60.357.932/0001-18</p></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start mb-20">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Links Úteis</p>
            <nav className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Dialog><DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Termos e Condições</button></DialogTrigger><DialogContent className="sm:max-w-[600px] max-h-[80vh]"><DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader><ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600"><p>Ao acessar este site, o usuário concorda com os termos informativos...</p></ScrollArea></DialogContent></Dialog>
                <Dialog><DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Privacidade</button></DialogTrigger><DialogContent className="sm:max-w-[600px] max-h-[80vh]"><DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader><ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600"><p>Valorizamos sua privacidade...</p></ScrollArea></DialogContent></Dialog>
                <Dialog><DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Reembolso</button></DialogTrigger><DialogContent className="sm:max-w-[700px] max-h-[80vh]"><DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader><ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600 space-y-4"><p>Garantia de 7 dias conforme o CDC...</p></ScrollArea></DialogContent></Dialog>
            </nav>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Segurança</p>
            <div className="flex justify-center md:justify-start gap-4 opacity-50"><ShieldCheck size={40} strokeWidth={1} /><Lock size={40} strokeWidth={1} /><CreditCard size={40} strokeWidth={1} /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};