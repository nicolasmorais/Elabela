"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Star, ShieldCheck, Verified } from 'lucide-react';

export interface KitOption {
  id: string;
  units: number;
  discount: string;
  price: string;
  originalPrice: string;
  unitPrice: string;
  badges?: string[];
  checkoutUrl: string;
}

interface KitSelectorProps {
  options: KitOption[];
  selectedId: string;
  onSelect: (kit: KitOption) => void;
}

export const KitSelector = ({ options, selectedId, onSelect }: KitSelectorProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between px-1 mb-2">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Selecione o seu kit</h3>
        <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Estoque Confirmado</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {options.map((kit) => {
          const isSelected = selectedId === kit.id;
          const isPopular = kit.badges?.includes("Mais Vendido");
          
          return (
            <div 
              key={kit.id}
              onClick={() => onSelect(kit)}
              className={cn(
                "relative flex items-center p-5 md:p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300",
                isSelected 
                  ? "border-brand-blue bg-white shadow-[0_15px_40px_-15px_rgba(39,182,201,0.25)] scale-[1.01] z-10" 
                  : "border-slate-100 bg-[#FDFDFD] hover:border-slate-200 hover:bg-white opacity-90"
              )}
            >
              {/* Badge de Destaque Superior */}
              {kit.badges && kit.badges.length > 0 && (
                <div className="absolute -top-3 left-8 flex gap-2">
                  {kit.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className={cn(
                        "px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-lg",
                        badge === "Mais Vendido" ? "bg-brand-pink" : "bg-brand-blue-dark"
                      )}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Seletor Visual (Radio Circle) */}
              <div className="mr-5 flex shrink-0">
                <div className={cn(
                  "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  isSelected 
                    ? "border-brand-blue bg-brand-blue shadow-[0_0_0_4px_rgba(39,182,201,0.1)]" 
                    : "border-slate-200 bg-white"
                )}>
                  {isSelected && <Check className="w-4 h-4 text-white" strokeWidth={4} />}
                </div>
              </div>

              {/* Informações da Unidade */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    <span className={cn(
                        "text-xl font-black tracking-tight transition-colors",
                        isSelected ? "text-brand-blue-dark" : "text-slate-700"
                    )}>
                        {kit.units} {kit.units === 1 ? 'Unidade' : 'Unidades'}
                    </span>
                    {isPopular && <Star className="h-4 w-4 text-brand-pink fill-current" />}
                </div>
                
                <div className="flex items-center gap-2">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                        R$ {kit.unitPrice} <span className="lowercase font-medium">/cada</span>
                    </p>
                    <span className={cn(
                        "px-2 py-0.5 rounded-lg text-[9px] font-black border uppercase tracking-wider",
                        isSelected ? "bg-brand-pink/10 border-brand-pink/20 text-brand-pink" : "bg-slate-100 border-slate-200 text-slate-400"
                    )}>
                      {kit.discount}
                    </span>
                </div>
              </div>

              {/* Lado Direito: Preços */}
              <div className="text-right space-y-0.5">
                <span className="text-[12px] text-slate-300 line-through font-bold">{kit.originalPrice}</span>
                <div className="flex items-baseline justify-end text-brand-blue-dark">
                  <span className="text-sm font-black mr-1">R$</span>
                  <span className="text-3xl font-black tracking-tighter">{kit.price}</span>
                </div>
                <p className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    isSelected ? "text-brand-pink" : "text-slate-400"
                )}>
                    Frete Grátis
                </p>
              </div>

              {/* Brilho extra para o selecionado no Desktop */}
              {isSelected && (
                <div className="absolute inset-0 rounded-[1.8rem] border border-brand-blue/5 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
      
      {/* Rodapé de Segurança do Seletor */}
      <div className="flex items-center justify-center gap-6 pt-2 opacity-40">
          <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Compra Segura</span>
          </div>
          <div className="flex items-center gap-1.5">
              <Verified size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Original</span>
          </div>
      </div>
    </div>
  );
};