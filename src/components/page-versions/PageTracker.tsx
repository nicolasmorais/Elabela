"use client";

import { useEffect } from 'react';

interface PageTrackerProps {
  contentId: string;
}

export function PageTracker({ contentId }: PageTrackerProps) {
  useEffect(() => {
    // 1. Registro básico de visualização (opcional)
    console.log(`Página carregada: ${contentId}`);

    // 2. Lógica Otimizada de Back Redirect
    const redirectUrl = "https://seguro.elabela.store/r/EGL6N8EAE1"; // URL de Recuperação

    const setupBackRedirect = () => {
      // Previne múltiplos setups
      if (window.sessionStorage.getItem('back_redirect_active')) return;

      // Injeta o estado no histórico
      window.history.pushState({ page: 1 }, "", window.location.href);
      window.history.pushState({ page: 2 }, "", window.location.href);

      const handlePopState = (event: PopStateEvent) => {
        // Quando o usuário tenta voltar
        window.location.href = redirectUrl;
      };

      window.addEventListener('popstate', handlePopState);
      window.sessionStorage.setItem('back_redirect_active', 'true');
    };

    // O SEGREDO: Só ativa após a primeira interação do usuário (clique, toque ou scroll)
    // Isso evita que o navegador bloqueie o redirecionamento por falta de interação.
    const interactionEvents = ['touchstart', 'click', 'scroll', 'mousedown'];
    
    const onFirstInteraction = () => {
      setupBackRedirect();
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, onFirstInteraction, { passive: true });
    });

    return () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };
  }, [contentId]);

  return null;
}