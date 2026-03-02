"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Heart, 
  Sparkles, 
  Award,
  Truck,
  Verified,
  ShieldAlert,
  ShoppingBag,
  DollarSign,
  Home,
  Dumbbell,
  Microscope,
  Lock,
  CreditCard,
  CheckCircle2,
  Anchor,
  Layers,
  Settings2,
  Activity,
  FileCheck,
  ClipboardList,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Droplets,
  FlaskConical,
  Beaker,
  Calendar,
  Lightbulb,
  Info,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
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
      <PageTracker contentId="clareador-v2" />
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

        {/* SEÇÃO: PÚBLICO-ALVO (RESTAURADA E ATUALIZADA) */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">FINALMENTE UMA SOLUÇÃO QUE FUNCIONA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            O Mesmo Tratamento Profissional Que Clínicas Cobram R$ 800. <span className="text-orange-700">Agora no Conforto da Sua Casa Por R$ 147,00.</span>
                        </h2>
                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "💔 Chora vendo tanto cabelo caindo no ralo",
                                    "💔 Evita passar a mão no cabelo com medo que caia mais",
                                    "💔 Já escondeu o couro cabeludo com truques de penteado",
                                    "💔 Não pode (ou não quer) gastar R$ 500 em dermatologista",
                                    "💔 Trabalha, cuida da casa e não tem tempo para salão toda semana"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                <p>Porque você merece acordar SEM cabelo no travesseiro.</p>
                                <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre: Tratar a queda OU pagar as contas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772330023955-image.jpg" 
                            alt="Resultado de Tratamento Profissional" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <ClareadorResultsGallery />

        <ClareadorScienceSection />
        
        <ClareadorComparisonSection />

        <ClareadorUsageTimeline />

        {/* Seção: O que você recebe */}
        <ClareadorWhatsInside />

        {/* Seção de Clientes Recebendo/Depoimentos */}
        <ClareadorCustomerFeedback />
        
        <ClareadorGuarantee />
        
        <ClareadorFAQ />
        
        <ClareadorGuarantee />
        
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