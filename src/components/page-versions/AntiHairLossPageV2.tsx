"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { MobileStickyBar } from './MobileStickyBar';

// Importação dos Componentes Modulares
import { AntiquedaNav } from '@/components/antiqueda/AntiquedaNav';
import { AntiquedaHero } from '@/components/antiqueda/AntiquedaHero';
import { AntiquedaMediaBar } from '@/components/antiqueda/AntiquedaMediaBar';
import { AntiquedaPainSection } from '@/components/antiqueda/AntiquedaPainSection';
import { AntiquedaResultsGallery } from '@/components/antiqueda/AntiquedaResultsGallery';
import { AntiquedaScienceSection } from '@/components/antiqueda/AntiquedaScienceSection';
import { AntiquedaDifferentiator } from '@/components/antiqueda/AntiquedaDifferentiator';
import { AntiquedaUsageGuide } from '@/components/antiqueda/AntiquedaUsageGuide';
import { AntiquedaCustomerFeedback } from '@/components/antiqueda/AntiquedaCustomerFeedback';
import { AntiquedaFAQ } from '@/components/antiqueda/AntiquedaFAQ';
import { AntiquedaGuarantee } from '@/components/antiqueda/AntiquedaGuarantee';
import { AntiquedaFooter } from '@/components/antiqueda/AntiquedaFooter';

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); // ~10h 33min

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: '12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => {});

    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data && data.checkoutUrl) {
                setConfig(prev => ({ ...prev, ...data }));
            }
        })
        .catch(e => console.error("Erro ao carregar link de checkout."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        <AntiquedaNav />
        
        <AntiquedaHero 
          config={config} 
          formatTime={formatTime} 
          timeLeft={timeLeft} 
        />

        <AntiquedaMediaBar />

        <AntiquedaPainSection />
        
        <AntiquedaResultsGallery />

        <AntiquedaScienceSection />
        
        <AntiquedaDifferentiator />

        <AntiquedaUsageGuide />

        <AntiquedaCustomerFeedback />
        
        <AntiquedaFAQ />
        
        <AntiquedaGuarantee />
        
        <AntiquedaFooter />

        <MobileStickyBar 
          installmentText="12x de 14,96"
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}