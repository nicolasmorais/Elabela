"use client";

import { useEffect } from 'react';

interface BackRedirectScriptProps {
  url: string;
  enabled: boolean;
}

export const BackRedirectScript = ({ url, enabled }: BackRedirectScriptProps) => {
  useEffect(() => {
    if (!enabled || !url) return;

    // Função de redirecionamento
    const doRedirect = () => {
        // Usamos location.replace para não "sujar" o histórico do destino
        window.location.replace(url);
    };

    // Técnica de manipulação de histórico (Back Button Hijack)
    // Criamos uma entrada falsa no histórico
    const setupBackRedirect = () => {
        // Adiciona um hash único para forçar uma mudança de estado real no histórico
        const currentUrl = window.location.href;
        
        // Substituímos o estado atual
        window.history.replaceState({ backRedirect: true }, document.title, currentUrl);
        
        // Empurramos uma nova entrada (a que o usuário está vendo agora)
        window.history.pushState({ backRedirect: false }, document.title, currentUrl);
    };

    // Inicializa o hijack
    setupBackRedirect();

    const handlePopState = (event: PopStateEvent) => {
        // Quando o usuário clica em "voltar", ele cai no estado onde 'backRedirect' é true
        if (event.state && event.state.backRedirect === true) {
            doRedirect();
        }
    };

    // Escuta o evento de voltar do navegador
    window.addEventListener('popstate', handlePopState);

    // Algumas plataformas de anúncios bloqueiam manipulação imediata
    // Adicionamos uma verificação extra caso a entrada do histórico suma
    const interval = setInterval(() => {
        if (window.history.state && window.history.state.backRedirect === undefined) {
            setupBackRedirect();
        }
    }, 2000);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearInterval(interval);
    };
  }, [url, enabled]);

  return null;
};