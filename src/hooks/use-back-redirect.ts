"use client";

import { useEffect } from 'react';

/**
 * Hook para interceptar o botão voltar do navegador e redirecionar o usuário.
 * @param redirectUrl URL para onde o usuário será enviado.
 */
export function useBackRedirect(redirectUrl: string | undefined | null) {
  useEffect(() => {
    if (!redirectUrl || typeof window === 'undefined') return;

    // Adiciona uma entrada extra no histórico para podermos interceptar a saída
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // Quando o evento popstate ocorre (botão voltar), redirecionamos
      window.location.href = redirectUrl;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [redirectUrl]);
}