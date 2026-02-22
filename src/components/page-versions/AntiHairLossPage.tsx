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
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useBackRedirect } from '@/hooks/use-back-redirect'; // Importando o hook
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// ... (constantes GALLERY_IMAGES e DELIVERY_TESTIMONIALS mantidas)

export function AntiHairLossPage() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(877);

  const [config, setConfig] = useState({
      priceCard: '147,00',
      pricePix: '147,00',
      installmentText: '12x de 14,96',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S',
      backRedirectUrl: '' // Adicionado ao estado
  });

  // Ativa o Back Redirect se a URL estiver configurada
  useBackRedirect(config.backRedirectUrl);

  useEffect(() => {
    // ... logic timer e city
    
    fetch('/api/page-settings/antiqueda')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig(prev => ({
                    ...prev,
                    ...data
                }));
            }
        });
  }, []);

  // ... restante do componente mantido (renderização)
}