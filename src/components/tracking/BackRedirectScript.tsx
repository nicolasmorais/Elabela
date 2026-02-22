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

    // Função de execução do redirecionamento
    const executeRedirect = () => {
      // Usamos href direto para garantir a navegação
      window.location.href = targetUrl;
    };

    // Função para "sujar" o histórico de forma que o voltar caia no nosso gatilho
    const initBackRedirect = () => {
      if (window.history.state?.backRedirected) return;

      // 1. Marca a página atual como a "página de destino do redirecionamento"
      window.history.replaceState({ backRedirected: true }, "");
      
      // 2. Empurra uma nova entrada (que é a que o usuário está vendo)
      window.history.pushState({ backRedirected: false }, "");
    };

    // Delay de 500ms para garantir que o navegador processe o histórico inicial
    const timeoutId = setTimeout(initBackRedirect, 500);

    const handlePopState = (event: PopStateEvent) => {
      // Se o usuário clicar em voltar, ele volta para o estado onde 'backRedirected' é true
      // Ou, em alguns navegadores, o state fica nulo ao voltar
      executeRedirect();
    };

    // Escuta o evento de voltar
    window.addEventListener('popstate', handlePopState);

    // Técnica extra: Se o usuário clicar em qualquer lugar da tela, 
    // reforçamos o histórico (contorna bloqueios de 'user activation')
    const handleInteraction = () => {
        initBackRedirect();
        window.removeEventListener('click', handleInteraction);
    };
    window.addEventListener('click', handleInteraction);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('click', handleInteraction);
    };
  }, [url, enabled]);

  return null;
};