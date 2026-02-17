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
      <p className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Selecione o kit</p>
      
      <div className="grid grid-cols-1 gap-3">
        {options.map((kit) => {
          const isSelected = selectedId === kit.id;
          
          return (
            <div 
              key={kit.id}
              onClick={() => onSelect(kit)}
              className={cn(
                "relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200",
                isSelected 
                  ? "border-slate-900 bg-white shadow-md" 
                  : "border-slate-100 bg-white hover:border-slate-200"
              )}
            >
              {/* Badges Flutuantes */}
              {kit.badges && kit.badges.length > 0 && (
                <div className="absolute -top-3 right-4 flex gap-2">
                  {kit.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className={cn(
                        "px-3 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider text-white shadow-sm",
                        badge === "Mais Vendidos" ? "bg-emerald-500" : 
                        badge === "Melhores Resultados" ? "bg-blue-600" : "bg-black"
                      )}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Radio Circle */}
              <div className="mr-4 flex shrink-0">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected ? "border-slate-900" : "border-slate-300"
                )}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />}
                </div>
              </div>

              {/* Info do Kit */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900">
                        {kit.units} {kit.units === 1 ? 'unidade' : 'unidades'}
                    </span>
                    <span className="px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[9px] font-black uppercase">
                      {kit.discount}
                    </span>
                </div>
                <p className="text-[11px] text-slate-400 font-bold">
                    R$ {kit.unitPrice} <span className="lowercase">por unidade</span>
                </p>
              </div>

              {/* Preços */}
              <div className="text-right">
                <p className="text-[10px] text-slate-300 line-through font-bold">{kit.originalPrice}</p>
                <p className="text-lg font-black text-slate-900 leading-tight">R$ {kit.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};