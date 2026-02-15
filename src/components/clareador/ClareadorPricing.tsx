"use client";

import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ClareadorPricingProps {
  kits: any[];
  selectedKit: any;
  setSelectedKit: (kit: any) => void;
  formatTime: (seconds: number) => string;
}

export const ClareadorPricing = ({ kits, selectedKit, setSelectedKit, formatTime }: ClareadorPricingProps) => {
  return (
    <section id="pricing" className="py-32 px-6 bg-brand-blue-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95]">SUA ÚLTIMA CHANCE</h2>
            <div className="inline-block bg-brand-pink px-8 py-3 rounded-full font-black uppercase text-sm animate-bounce">⏰ ENCERRA EM: {formatTime(877)}</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {kits.map((kit, i) => (
                    <div key={i} onClick={() => setSelectedKit(kit)} className={cn(
                        "bg-white text-slate-900 rounded-[3rem] p-8 shadow-2xl flex flex-col justify-between transition-all cursor-pointer border-4",
                        selectedKit.id === kit.id ? "border-brand-pink scale-105" : "border-white opacity-90"
                    )}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black uppercase">{kit.name}</h3>
                            <div className="py-6 bg-brand-gray-light rounded-[2.5rem] space-y-2">
                                <p className="text-slate-300 line-through text-xs font-bold">De: {kit.oldPrice}</p>
                                <div className="text-brand-blue-dark">
                                    <span className="text-2xl font-black mr-1">R$</span>
                                    <span className="text-6xl font-black tracking-tighter">{kit.pixPrice}</span>
                                </div>
                                <p className="text-[10px] font-black uppercase text-emerald-600">PIX com Desconto</p>
                            </div>
                        </div>
                        <Link href={kit.checkoutUrl} target="_blank" className="mt-8">
                            <Button className={cn("w-full h-14 rounded-2xl font-black", selectedKit.id === kit.id ? "bg-brand-pink" : "bg-brand-blue-dark")}>COMPRAR AGORA</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};