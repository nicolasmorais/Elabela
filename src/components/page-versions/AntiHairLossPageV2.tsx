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
import { 
  Star, 
  Check, 
  ShoppingBag, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Microscope,
  Anchor,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772412756942-Gemini_Generated_Image_6eit2k6eit2k6eit.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772417287492-unnamed-(6).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772416572105-unnamed-(5)-(1).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772414134566-722f3359e9000ba0c1cb3cba3384328c-(1).jpg"
];

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

export function AntiHairLossPageV2() {
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
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-brand-text font-sans antialiased min-h-screen">
        {/* BARRA DE FRETE NO TOPO */}
        <div className="bg-brand-blue-dark text-white py-2 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          FRETE GRÁTIS PARA TODO BRASIL
        </div>

        <ClareadorNav />
        
        <ClareadorHero 
          config={config} 
          formatTime={formatTime} 
          timeLeft={timeLeft} 
          scrollToPricing={scrollToPricing} 
        />

        <ClareadorMediaBar />

        <ClareadorPainSection />
        
        {/* GALERIA DE RESULTADOS REAIS - AJUSTADA PARA 1:1 */}
        <section className="py-24 px-6 bg-white border-b border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                Resultados Reais, Mulheres Reais
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-orange-100">
                   <img 
                      src={url} 
                      alt={`Imagem da Galeria ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
            <div className="text-center pt-8">
              <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
            </div>
          </div>
        </section>

        <ClareadorScienceSection />
        
        <ClareadorComparisonSection />

        <ClareadorUsageTimeline />

        <ClareadorWhatsInside />

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