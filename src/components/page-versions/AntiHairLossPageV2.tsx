"use client";

import React, { useState, useEffect } from 'react';
// ... (imports permanecem iguais)
// ... (constantes permanecem iguais)

export function AntiHairLossPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(38010); 
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [config, setConfig] = useState({
      priceCard: 'R$ 187,00',
      pricePix: '147,00',
      installmentText: 'Ou 12x de R$ 14,96',
      buttonText: 'Comprar agora',
      checkoutUrl: 'https://seguro.elabela.store/checkout?skipToCheckout=1&tokenReference=RC8ASYUL88',
      backRedirectUrl: '' // Adicionado ao estado inicial
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => console.log("Erro cidade."));

    fetch('/api/page-settings/antiqueda2')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig(prev => ({
                    ...prev,
                    ...data
                }));
            }
        })
        .catch(e => console.error("Erro ao carregar configurações."));

    return () => clearInterval(timer);
  }, []);

  // LÓGICA BLACK REDIRECT
  useEffect(() => {
    if (!config.backRedirectUrl) return;

    // Adiciona uma entrada extra no histórico para podermos interceptar a volta
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // Quando o usuário tenta voltar, redirecionamos para o link configurado
      window.location.href = config.backRedirectUrl;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [config.backRedirectUrl]);

  // ... (restante do componente permanece igual)
}