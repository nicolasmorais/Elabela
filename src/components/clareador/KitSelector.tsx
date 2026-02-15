"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Escolha o seu tratamento</h3>
        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
          Estoque disponível
        </span>
      </div>
      
      <div className="space-y-3">
        {options.map((kit) => {
          const isSelected = selectedId === kit.id;
          
          return (
            <div 
              key={kit.id}
              onClick={() => onSelect(kit)}
              className={cn(
                "relative flex items-center p-4 md:p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-500 bg-white",
                isSelected 
                  ? "border-brand-blue shadow-[0_10px_30px_-10px_rgba(39,182,201,0.3)] scale-[1.02] z-10" 
                  : "border-slate-100 hover:border-brand-blue/20 shadow-sm opacity-80"
              )}
            >
              {/* Badges Flutuantes Melhores */}
              <div className="absolute -top-3 right-5 flex gap-2">
                {kit.badges?.map((badge, idx) => (
                  <span 
                    key={idx}
                    className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-md animate-in fade-in slide-in-from-bottom-2",
                      badge === "Mais Vendido" ? "bg-brand-pink" : 
                      badge === "Melhor Result" ? "bg-brand-blue-dark" : 
                      "bg-slate-900"
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Seletor Visual Customizado */}
              <div className="mr-4 flex shrink-0">
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500",
                  isSelected ? "border-brand-blue bg-brand-blue" : "border-slate-200 bg-white"
                )}>
                  {isSelected && <Check className="w-4 h-4 text-white" strokeWidth={4} />}
                </div>
              </div>

              {/* Conteúdo do Cartão */}
              <div className="flex-1 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                        "text-lg font-black tracking-tight transition-colors",
                        isSelected ? "text-brand-blue-dark" : "text-slate-700"
                    )}>
                        {kit.units} {kit.units === 1 ? 'Unidade' : 'Unidades'}
                    </span>
                  </div>
                  
                  {/* Preço Unitário e Badge de Desconto juntos no mobile */}
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        R$ {kit.unitPrice} <span className="lowercase">/cada</span>
                    </p>
                    <span className="bg-brand-pink/10 text-brand-pink px-2 py-0.5 rounded-lg text-[9px] font-black border border-brand-pink/10">
                      {kit.discount}
                    </span>
                  </div>
                </div>

                {/* Bloco de Preço Final */}
                <div className="text-right flex flex-col justify-center leading-none">
                  <span className="text-[11px] text-slate-300 line-through font-bold mb-1">{kit.originalPrice}</span>
                  <div className="flex items-start justify-end text-brand-blue-dark font-black">
                    <span className="text-xs mt-1 mr-0.5">R$</span>
                    <span className="text-2xl tracking-tighter">{kit.price}</span>
                  </div>
                </div>
              </div>

              {/* Destaque Visual para o Selecionado */}
              {isSelected && (
                  <div className="absolute inset-0 rounded-[1.3rem] border border-brand-blue/10 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
      
      {/* Garantia Visual no Rodapé do Seletor */}
      <div className="flex items-center justify-center gap-4 pt-2 opacity-50">
          <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Seguro</span>
          </div>
          <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Original</span>
          </div>
          <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest">90 Dias</span>
          </div>
      </div>
    </div>
  );
};