"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { KcrOriginalNav } from '@/components/kcr-original/KcrOriginalNav';
import { KcrOriginalHero } from '@/components/kcr-original/KcrOriginalHero';
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
  const [timeLeft, setTimeLeft] = useState(38010);
  
  // Estado inicial (valores padrão)
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

    // Busca as configurações salvas na Dashboard
    fetch('/api/page-settings/kcroriginal')
        .then(res => res.json())
        .then(data => {
            // FIX: Removemos a obrigatoriedade do checkoutUrl para atualizar o preço
            if (data && typeof data === 'object') {
                setConfig(prev => ({
                    ...prev,
                    ...data // Sobrescreve apenas o que foi alterado na dashboard
                }));
            }
        })
        .catch(err => console.error("Erro ao sincronizar dados da dashboard:", err));

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