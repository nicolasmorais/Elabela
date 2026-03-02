"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { KcrOriginalNav } from '@/components/kcr-original/KcrOriginalNav';
import { KcrOriginalHero } from '@/components/kcr-original/KcrOriginalHero';
import { KcrOriginalMediaBar } from '@/components/kcr-original/KcrOriginalMediaBar';
import { KcrOriginalResults } from '@/components/kcr-original/KcrOriginalResults';
import { KcrOriginalSolution } from '@/components/kcr-original/KcrOriginalSolution';
import { KcrOriginalQuadrupleAction } from '@/components/kcr-original/KcrOriginalQuadrupleAction';
import { KcrOriginalComparison } from '@/components/kcr-original/KcrOriginalComparison';
import { KcrOriginalKitContents } from '@/components/kcr-original/KcrOriginalKitContents';
import { KcrOriginalCommunity } from '@/components/kcr-original/KcrOriginalCommunity';
import { KcrOriginalFAQ } from '@/components/kcr-original/KcrOriginalFAQ';
import { KcrOriginalGuarantee } from '@/components/kcr-original/KcrOriginalGuarantee';
import { KcrOriginalFooter } from '@/components/kcr-original/KcrOriginalFooter';

export function KcrOriginalPage() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos
  
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

    // Busca as configurações salvas no dashboard
    fetch('/api/page-settings/kcroriginal')
        .then(res => res.json())
        .then(data => {
            // Só atualiza se houver dados válidos salvos no banco para evitar "pulo" de valores
            if (data && data.pricePix) {
                setConfig({
                    priceCard: data.priceCard || 'R$ 187,00',
                    pricePix: data.pricePix || '147,00',
                    installmentText: data.installmentText || 'Ou 12x de R$ 14,96',
                    buttonText: data.buttonText || 'Comprar agora',
                    checkoutUrl: data.checkoutUrl || 'https://seguro.elabela.store/r/RC8ASYUL88'
                });
            }
        })
        .catch(err => console.error("Erro ao sincronizar dados:", err));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')} min`;
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
          
          <KcrOriginalMediaBar />
          
          <KcrOriginalResults />

          <KcrOriginalSolution />

          <KcrOriginalQuadrupleAction />

          <KcrOriginalComparison />

          <KcrOriginalKitContents />

          <KcrOriginalCommunity />

          <KcrOriginalGuarantee />

          <KcrOriginalFAQ />

          <KcrOriginalFooter />
        </main>
      </div>
    </>
  );
}