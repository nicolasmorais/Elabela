"use client";

import React from 'react';

interface KcrPromoPricingProps {
    config: any;
    formatTime: (seconds: number) => string;
    timeLeft: number;
}

/**
 * Componente ocultado conforme solicitação.
 * Retorna null para não renderizar a seção de preços na página KCR Promo.
 */
export const KcrPromoPricing = ({ }: KcrPromoPricingProps) => {
  return null;
};