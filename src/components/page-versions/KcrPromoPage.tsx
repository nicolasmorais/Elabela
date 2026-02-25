"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { ShieldCheck } from 'lucide-react';

// Componentes Modulares
import { KcrPromoNav } from '@/components/kcr-promo/KcrPromoNav';
import { KcrPromoHero } from '@/components/kcr-promo/KcrPromoHero';
import { KcrPromoMediaBar } from '@/components/kcr-promo/KcrPromoMediaBar';
import { KcrPromoResultsGallery } from '@/components/kcr-promo/KcrPromoResultsGallery';
import { KcrPromoFreeGift } from '@/components/kcr-promo/KcrPromoFreeGift';
import { KcrPromoTargetAudience } from '@/components/kcr-promo/KcrPromoTargetAudience';
import { KcrPromoScience } from '@/components/kcr-promo/KcrPromoScience';
import { KcrPromoIngredients } from '@/components/kcr-promo/KcrPromoIngredients';
import { KcrPromoUsage } from '@/components/kcr-promo/KcrPromoUsage';
import { KcrPromoKitContents } from '@/components/kcr-promo/KcrPromoKitContents';
import { KcrPromoDeliveryGallery } from '@/components/kcr-promo/KcrPromoDeliveryGallery';
import { KcrPromoPricing } from '@/components/kcr-promo/KcrPromoPricing';
import { KcrPromoFAQ } from '@/components/kcr-promo/KcrPromoFAQ';
import { KcrPromoFooter } from '@/components/kcr-promo/KcrPromoFooter';
import { KcrPromoStickyBar } from '@/components/kcr-promo/KcrPromoStickyBar';

const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771983983446-ChatGPT-Image-24-de-fev.-de-2026,-22_46_15.png",
    text: "Chegou super rápido! Já comecei meu tratamento antiqueda hoje e o brinde é lindo demais. O cheiro é maravilhoso e na primeira lavada já senti o cabelo mais firme.",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771982931791-ChatGPT-Image-24-de-fev.-de-2026,-21_24_04.png",
    text: "Entrega relâmpago aqui no RJ! Usei hoje pela primeira vez e o perfume é incrível. O secador que veio de brinde é potente e ajudou muito a não quebrar os fios.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771982905910-Gemini_Generated_Image_11sdqx11sdqx11sd.png",
    text: "Recebi em tempo recorde! O kit é lindo e o brinde me surpreendeu. Fiz a primeira aplicação e o cabelo ficou super macio, parece que a queda diminuiu logo de cara.",
    author: "Fernanda L., Belo Horizonte"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558648736-4.png",
    text: "Chegou voando! Começando o cronograma antiqueda agora. O perfume fixou no cabelo e já sinto os fios mais resistentes, caiu quase nada no pente hoje.",
    author: "Carla T., Curitiba"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png",
    text: "Impecável a entrega! O cheiro é viciante e o resultado no primeiro dia me surpreendeu. O cabelo ficou soltinho e senti que parou de quebrar tanto.",
    author: "Cláudia Mendes, Brasília"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558657652-6.png",
    text: "Meu kit chegou antes do esperado! Já iniciei o tratamento. O cabelo está super cheiroso e sinto que a queda já deu uma segurada na primeira lavagem.",
    author: "Beatriz A., Porto Alegre"
  }
];

export function KcrPromoPage() {
  const [timeLeft, setTimeLeft] = useState(38010);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 147,00',
      pricePix: '117,00',
      installmentText: 'Ou 12x de R$ 11,92',
      buttonText: 'PAGAR AGORA',
      checkoutUrl: 'https://seguro.elabela.store/r/I83HKZOFGP'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('/api/page-settings/kcrpromo')
        .then(res => res.json())
        .then(data => {
            if (data && data.checkoutUrl) {
                setConfig({
                  priceCard: data.priceCard && data.priceCard !== 'R$ 157,00' ? data.priceCard : 'R$ 147,00',
                  pricePix: data.pricePix && data.pricePix !== '97,00' ? data.pricePix : '117,00',
                  installmentText: data.installmentText && !data.installmentText.includes('9,74') ? data.installmentText : 'Ou 12x de R$ 11,92',
                  buttonText: 'PAGAR AGORA',
                  checkoutUrl: data.checkoutUrl
                });
            }
        })
        .catch(e => console.error("Erro ao carregar configurações."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${h}h ${m} min`;
  };

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);

  return (
    <>
      <PageTracker contentId="kcrpromo" />
      <div className="bg-white text-slate-900 font-sans antialiased min-h-screen">
        
        {/* BADGE TOPO */}
        <div className="bg-slate-900 text-white py-2.5 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.1em]">
          🔒 Oferta Exclusiva — Disponível Só Para Você
        </div>

        <KcrPromoNav />
        
        <main>
            <KcrPromoHero 
                activeImageIndex={activeImageIndex}
                productImages={PRODUCT_IMAGES}
                setActiveImageIndex={setActiveImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                config={config}
                formatTime={formatTime}
                timeLeft={timeLeft}
            />

            <KcrPromoMediaBar />

            <KcrPromoResultsGallery images={GALLERY_IMAGES} />

            <KcrPromoFreeGift />

            <KcrPromoTargetAudience />

            <KcrPromoScience />

            <KcrPromoIngredients />

            <KcrPromoUsage />

            <KcrPromoKitContents />

            <KcrPromoDeliveryGallery testimonials={DELIVERY_TESTIMONIALS} />

            <KcrPromoPricing 
                config={config}
                formatTime={formatTime}
                timeLeft={timeLeft}
            />

            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-50/20 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <ShieldCheck size={200} className="text-orange-950" />
                        </div>
                        
                        <div className="relative z-10 space-y-8">
                            <div className="mx-auto w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-orange-100 mb-4">
                                <ShieldCheck className="h-12 w-12 text-orange-600" strokeWidth={2.5} />
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                                Risco Zero para Você
                            </h2>
                            
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic">
                                    "Você tem 7 dias para experimentar com total liberdade. Não ficou encantado? Devolvemos tudo, sem perguntas, sem letras miúdas. Acreditamos tanto no nosso produto que colocamos nosso dinheiro onde está nossa palavra."
                                </p>
                            </div>

                            <div className="pt-8">
                                <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-900 text-orange-400 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg border border-orange-50/20">
                                    Selo de Compromisso Total
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <KcrPromoFAQ />

            <KcrPromoFooter />
        </main>

        <KcrPromoStickyBar 
            installmentText={config.installmentText}
            checkoutUrl={config.checkoutUrl}
        />
      </div>
    </>
  );
}