"use client";

import React from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const kits = [
  {
    id: 1,
    name: "Tratamento Iniciante",
    units: "1 Unidade",
    price: "R$ 147,90",
    description: "Ideal para testar os resultados iniciais.",
    popular: false,
  },
  {
    id: 2,
    name: "Tratamento Recomendado",
    units: "2 Unidades",
    price: "R$ 247,90",
    description: "O melhor custo-benefício para um clareamento completo.",
    popular: true,
  },
  {
    id: 3,
    name: "Tratamento Intensivo",
    units: "3 Unidades",
    price: "R$ 327,90",
    description: "Máximo resultado e manutenção por longo prazo.",
    popular: false,
  }
];

interface KitSelectorProps {
  selectedKit: number;
  onSelect: (id: number) => void;
}

const KitSelector = ({ selectedKit, onSelect }: KitSelectorProps) => {
  return (
    <div className="grid gap-4 w-full max-w-2xl mx-auto mb-8">
      <h3 className="text-xl font-bold text-center text-slate-800 mb-2">
        Escolha o seu Kit:
      </h3>
      {kits.map((kit) => (
        <div
          key={kit.id}
          onClick={() => onSelect(kit.id)}
          className={cn(
            "relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 flex items-center justify-between",
            selectedKit === kit.id 
              ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600 ring-opacity-10" 
              : "border-slate-200 hover:border-blue-300 bg-white"
          )}
        >
          {kit.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1">
              <Star size={10} fill="white" /> Mais Vendido
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
              selectedKit === kit.id ? "border-blue-600 bg-blue-600" : "border-slate-300"
            )}>
              {selectedKit === kit.id && <Check size={14} className="text-white" />}
            </div>
            <div>
              <p className="font-bold text-slate-900">{kit.units}</p>
              <p className="text-sm text-slate-500">{kit.description}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-blue-600">{kit.price}</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">ou 12x de {(parseFloat(kit.price.replace('R$ ', '').replace(',', '.')) / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KitSelector;