"use client";

import React from 'react';
import { cn } from '@/lib/utils';

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
      <h3 className="text-xl font-bold text-slate-800 text-left mb-4">Selecione o kit</h3>
      
      <div className="space-y-3">
        {options.map((kit) => {
          const isSelected = selectedId === kit.id;
          
          return (
            <div 
              key={kit.id}
              onClick={() => onSelect(kit)}
              className={cn(
                "relative flex items-center p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all duration-300 bg-white",
                isSelected 
                  ? "border-slate-800 shadow-md scale-[1.01]" 
                  : "border-slate-100 hover:border-slate-200 shadow-sm"
              )}
            >
              {/* Badges Container */}
              <div className="absolute -top-3 right-4 flex gap-2">
                {kit.badges?.map((badge, idx) => (
                  <span 
                    key={idx}
                    className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm",
                      badge === "Mais Vendido" ? "bg-pink-500" : 
                      badge === "Melhor Preço" ? "bg-emerald-500" : 
                      "bg-slate-900"
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Radio Circle */}
              <div className="mr-5 flex shrink-0">
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  isSelected ? "border-slate-800" : "border-slate-200"
                )}>
                  {isSelected && <div className="w-3 h-3 rounded-full bg-slate-800" />}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-slate-900">{kit.units} {kit.units === 1 ? 'unidade' : 'unidades'}</span>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-black border border-emerald-100">
                      {kit.discount}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">
                    R$ {kit.unitPrice} <span className="lowercase font-medium">por unidade</span>
                  </p>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-sm text-slate-300 line-through font-bold">{kit.originalPrice}</span>
                  <span className="text-2xl font-black text-slate-900 leading-tight">R$ {kit.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};