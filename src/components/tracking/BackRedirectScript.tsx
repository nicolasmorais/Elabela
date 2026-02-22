"use client";

import { useEffect } from 'react';

interface BackRedirectScriptProps {
  url: string;
  enabled: boolean;
}

export const BackRedirectScript = ({ url, enabled }: BackRedirectScriptProps) => {
  useEffect(() => {
    if (!enabled || !url) return;

    // Função para realizar o redirecionamento
    const doRedirect = () => {
      window.location.href = url;
    };

    // Adiciona uma entrada fake no histórico
    // Isso garante que o primeiro 'back' seja capturado por nós
    const pushState = () => {
        window.history.pushState({ path: window.location.href }, '', window.location.href);
        window.history.pushState({ path: window.location.href }, '', window.location.href);
    };

    pushState();

    const handlePopState = (event: PopStateEvent) => {
        // Quando o usuário tenta voltar, redirecionamos
        doRedirect();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [url, enabled]);

  return null;
};