"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { MobileStickyBar } from './MobileStickyBar';

// Importação dos Componentes Modulares
import { ClareadorNav } from '@/components/clareador/ClareadorNav';
import { ClareadorHero } from '@/components/clareador/ClareadorHero';
import { ClareadorMediaBar } from '@/components/clareador/ClareadorMediaBar';
import { ClareadorPainSection } from '@/components/clareador/ClareadorPainSection';
import { ClareadorResultsGallery } from '@/components/clareador/ClareadorResultsGallery';
import { ClareadorScienceSection } from '@/components/clareador/ClareadorScienceSection';
import { ClareadorComparisonSection } from '@/components/clareador/ClareadorComparisonSection';
import { ClareadorUsageTimeline } from '@/components/clareador/ClareadorUsageTimeline';
import { ClareadorCustomerFeedback } from '@/components/clareador/ClareadorCustomerFeedback';
import { ClareadorFAQ } from '@/components/clareador/ClareadorFAQ';
import { ClareadorGuarantee } from '@/components/clareador/ClareadorGuarantee';
import { ClareadorFooter } from '@/components/clareador/ClareadorFooter';
import { ClareadorWhatsInside } from '@/components/clareador/ClareadorWhatsInside';

const AMAZOLÉ_KITS = [
  {
    id: '1-un',
    name: '1 FRASCO',
    oldPrice: 'R$ 189,99',
    pixPrice: '137',
    checkoutUrl: 'https://seguro.elabela.store/r/96NCB3C2ZG',
  },
  {
    id: '2-un',
    name: '2 FRASCOS',
    oldPrice: 'R$ 379,98',
    pixPrice: '167',
    checkoutUrl: 'https://seguro.elabela.store/r/5BP7EWDX91',
  },
  {
    id: '3-un',
    name: '3 FRASCOS',
    oldPrice: 'R$ 569,97',
    pixPrice: '297',
    checkoutUrl: 'https://seguro.elabela.store/r/RBVA7EGOU3',
  }
];

export function ClareadorPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860);
  const [selectedKit, setSelectedKit] = useState(AMAZOLÉ_KITS[1]);
  const [config, setConfig] = useState({ pricePix: '167,00' });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    fetch('/api/page-settings/novoclareador')
      .then(res => res.json())
      .then(data => data && setConfig(prev => ({ ...prev, ...data })));
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${m}m`;
  };

  const scrollToPricing = () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <PageTracker contentId="clareador-v2" />
      <div className="bg-white text-brand-text font-sans antialiased min-h-screen">
        <ClareadorNav />
        
        <ClareadorHero 
          config={config} 
          formatTime={formatTime} 
          timeLeft={timeLeft} 
          scrollToPricing={scrollToPricing} 
        />

        <ClareadorMediaBar />

        <ClareadorPainSection />
        
        <ClareadorResultsGallery />

        <ClareadorScienceSection />
        
        <ClareadorComparisonSection />

        <ClareadorUsageTimeline />

        {/* Seção Nova: O que você recebe */}
        <ClareadorWhatsInside />

        {/* Seção de Clientes Recebendo/Depoimentos */}
        <ClareadorCustomerFeedback />
        
        <ClareadorGuarantee />
        
        <ClareadorFAQ />
        
        <ClareadorFooter />

        <MobileStickyBar 
          installmentText="12x de 13,92"
          buttonText="Comprar agora" 
          checkoutUrl={selectedKit.checkoutUrl} 
        />
      </div>
    </>
  );
}