"use client";

import { useEffect } from 'react';

interface PageTrackerProps {
  contentId: string;
}

/**
 * Componente responsável apenas pelo registro de visualização.
 * A lógica de Back Redirect agora é controlada exclusivamente pelo Dashboard.
 */
export function PageTracker({ contentId }: PageTrackerProps) {
  useEffect(() => {
    // Registro básico de visualização no console para depuração
    console.log(`Página carregada: ${contentId}`);
    
    // Se houver necessidade de analytics futuro (ex: Pixel, GA), 
    // os gatilhos devem ser inseridos aqui.
  }, [contentId]);

  return null;
}