"use client";

import React from 'react';

interface MobileStickyBarProps {
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
}

/**
 * Componente desativado conforme solicitação.
 * Retorna null para não exibir a barra flutuante mobile.
 */
export const MobileStickyBar = ({ }: MobileStickyBarProps) => {
  return null;
};