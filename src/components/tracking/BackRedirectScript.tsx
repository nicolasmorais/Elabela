"use client";

import { useEffect } from 'react';

interface BackRedirectScriptProps {
  url: string;
  enabled: boolean;
}

export const BackRedirectScript = ({ url, enabled }: BackRedirectScriptProps) => {
  useEffect(() => {
    if (!enabled || !url) return;

    const targetUrl = url;

    const executeRedirect = () => {
        // Redireciona de forma definitiva
        window.location.href = targetUrl;
    };

    const setupHistory = () => {
        // Se já configuramos o estado para esta página, não repetimos
        if (window.history.state?.isBackRedirectActive) return;

        // 1. Empurramos o estado atual com uma flag
        window.history.replaceState({ isBackRedirectActive: true }, "");
        
        // 2. Empurramos uma nova entrada no histórico (a que o usuário fica parado)
        // Adicionamos um '#' invisível para garantir que o mobile reconheça como "navegação"
        window.history.pushState({ isBackRedirectActive: false }, "", window.location.pathname + window.location.search + "#");
    };

    // Tenta inicializar após um curto delay (padrão desktop)
    const timeoutId = setTimeout(setupHistory, 500);

    // CRÍTICO PARA MOBILE: O navegador só permite manipulação real após interação
    const handleMobileInteraction = () => {
        setupHistory();
        // Remove os ouvintes após a primeira interação para não pesar
        window.removeEventListener('touchstart', handleMobileInteraction);
        window.removeEventListener('click', handleMobileInteraction);
    };

    window.addEventListener('touchstart', handleMobileInteraction);
    window.addEventListener('click', handleMobileInteraction);

    const handlePopState = (event: PopStateEvent) => {
        // No mobile, clicar em voltar ou deslizar a tela (swipe back)
        // fará o navegador tentar voltar para o estado onde 'isBackRedirectActive' é true
        executeRedirect();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('touchstart', handleMobileInteraction);
      window.removeEventListener('click', handleMobileInteraction);
    };
  }, [url, enabled]);

  return null;
};