"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const ClareadorFooter = () => {
  return (
    <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue opacity-30"></div>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SEÇÃO JURÍDICA SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-200">
            <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue-dark uppercase tracking-[0.2em]">Avisos e Isenções de Responsabilidade</h3>
                <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                    <div>
                        <p className="font-bold text-slate-700 mb-1 uppercase tracking-wider">Isenção de Responsabilidade</p>
                        <p>Este produto tem caráter cosmético. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um dermatologista antes de iniciar qualquer tratamento para manchas de pele.</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-700 mb-1 uppercase tracking-wider">Aviso de Idade</p>
                        <p>Conteúdo destinado a maiores de 18 anos.</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-700 mb-1 uppercase tracking-wider">Uso Responsável</p>
                        <p>Produto de uso externo. Evite contato com olhos. Faça teste de alergia antes do uso. Pessoas com condições dermatológicas pré-existentes, gestantes ou lactantes devem consultar médico antes do uso.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 text-center md:text-right flex flex-col justify-center items-center md:items-end">
                <span className="text-4xl font-black text-brand-blue-dark uppercase tracking-tighter">AMAZOLÉ</span>
                <div className="space-y-1">
                    <p className="text-sm font-black text-brand-blue-dark">E-Business Rio Verde</p>
                    <p className="text-xs text-slate-500 font-medium">Aparecida de Goiânia - GO</p>
                    <p className="text-xs text-slate-500 font-bold">CNPJ: XX.XXX.XXX/0001-XX</p>
                </div>
            </div>
        </div>

        {/* LINKS E SUPORTE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Links Úteis</p>
            <nav className="flex flex-col gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-brand-pink transition-colors text-left">Termos e Condições</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                            <p>Ao acessar este site, o usuário concorda com as diretrizes de uso...</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-brand-pink transition-colors text-left">Política de Privacidade</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                            <p>Seus dados estão seguros conosco...</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-brand-pink transition-colors text-left">Política de Reembolso</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                            <p>Garantia incondicional de 90 dias...</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </nav>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Precisa de Ajuda?</p>
            <div className="inline-block p-4 rounded-2xl bg-white border border-slate-200 w-full shadow-sm">
                <p className="text-[9px] font-black uppercase text-slate-400 mb-1">E-mail de Suporte</p>
                <p className="text-sm font-bold text-slate-900">📧 contato@amazole.com.br</p>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Segurança</p>
            <div className="flex justify-center md:justify-start gap-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                <ShieldCheck size={40} strokeWidth={1} className="text-emerald-500" />
                <Lock size={40} strokeWidth={1} className="text-blue-500" />
                <CreditCard size={40} strokeWidth={1} className="text-slate-500" />
            </div>
          </div>
        </div>

        {/* PPS / COPYRIGHT */}
        <div className="pt-12 border-t border-slate-200 space-y-8">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
                <p className="text-[10px] text-slate-400 font-black leading-relaxed uppercase tracking-[0.1em] italic">
                    IMPORTANTE: Os resultados podem variar de pessoa para pessoa.
                </p>
                <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                    © 2025 Amazolé - Clareador Natural da Amazônia
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};