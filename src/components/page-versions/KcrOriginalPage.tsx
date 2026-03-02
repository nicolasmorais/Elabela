"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { KcrOriginalNav } from '@/components/kcr-original/KcrOriginalNav';
import { KcrOriginalHero } from '@/components/kcr-original/KcrOriginalHero';
import { KcrOriginalResults } from '@/components/kcr-original/KcrOriginalResults';
import { KcrOriginalSolution } from '@/components/kcr-original/KcrOriginalSolution';
import { KcrOriginalTripleAction } from '@/components/kcr-original/KcrOriginalTripleAction';

export function KcrOriginalPage() {
  const [timeLeft, setTimeLeft] = useState(38010);
  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: 'Ou 12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/r/RC8ASYUL88'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('/api/page-settings/kcroriginal')
        .then(res => res.json())
        .then(data => {
            if (data && data.checkoutUrl) setConfig(prev => ({ ...prev, ...data }));
        });

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  return (
    <>
      <PageTracker contentId="kcroriginal" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        <KcrOriginalNav />
        <main>
          <KcrOriginalHero 
            config={config} 
            formatTime={formatTime} 
            timeLeft={timeLeft} 
          />
          
          <KcrOriginalResults />

          <KcrOriginalSolution />

          <KcrOriginalTripleAction />

          {/* Seções Adicionais serão inseridas aqui modularmente conforme solicitado */}
          <div className="py-20 text-center text-slate-300 italic">
            Novas seções modulares em breve...
          </div>
        </main>
      </div>
    </>
  );
}