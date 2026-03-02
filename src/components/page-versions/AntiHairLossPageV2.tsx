"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { MobileStickyBar } from './MobileStickyBar';

// Importação dos Componentes de Seção
import { AntiHairLossHero } from '@/components/antiqueda2/AntiHairLossHero';
import { AntiHairLossResultsGallery } from '@/components/antiqueda2/AntiHairLossResultsGallery';
import { AntiHairLossPainSection } from '@/components/antiqueda2/AntiHairLossPainSection';
import { AntiHairLossScienceSection } from '@/components/antiqueda2/AntiHairLossScienceSection';
import { AntiHairLossFAQ } from '@/components/antiqueda2/AntiHairLossFAQ';
import { AntiHairLossFooter } from '@/components/antiqueda2/AntiHairLossFooter';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png"
];

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772412756942-Gemini_Generated_Image_6eit2k6eit2k6eit.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772417287492-unnamed-(6).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772416572105-unnamed-(5)-(1).jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772414134566-722f3359e9000ba0c1cb3cba3384328c-(1).jpg"
];

export function AntiHairLossPageV2() {
  const [timeLeft, setTimeLeft] = useState(37860);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: '12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return `${h}h ${m}m`;
  };

  return (
    <>
      <PageTracker contentId="antiqueda2" />
      <div className="bg-white text-slate-900 font-sans antialiased min-h-screen">
        
        {/* BARRA DE FRETE NO TOPO */}
        <div className="bg-slate-900 text-white py-2 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          FRETE GRÁTIS PARA TODO BRASIL
        </div>

        {/* NAVIGATION */}
        <nav className="bg-[#FDF8F3] border-b border-slate-100 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" alt="Logo" className="h-8" />
            </div>
        </nav>

        <AntiHairLossHero 
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          productImages={PRODUCT_IMAGES}
          config={config}
          timeLeft={timeLeft}
          formatTime={formatTime}
        />

        <AntiHairLossResultsGallery galleryImages={GALLERY_IMAGES} />

        <AntiHairLossPainSection />

        <AntiHairLossScienceSection />

        <AntiHairLossFAQ />

        <AntiHairLossFooter />

        <MobileStickyBar 
          installmentText={config.installmentText.split('de ')[1] || config.installmentText}
          buttonText={config.buttonText} 
          checkoutUrl={config.checkoutUrl} 
        />
      </div>
    </>
  );
}
