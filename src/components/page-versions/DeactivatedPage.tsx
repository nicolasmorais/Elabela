"use client";

import React from 'react';
import { AlertTriangle, Globe, Lock } from 'lucide-react';

export function DeactivatedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white border border-gray-200 shadow-sm rounded-lg p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-50 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Site Indisponível
          </h1>
          <p className="text-gray-500 leading-relaxed">
            O site que você está tentando acessar foi temporariamente desativado ou está passando por manutenção programada.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col gap-4 text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Servidor: Cloudflare/1.24.1</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lock className="h-4 w-4" />
            <span>ID do Erro: 503-UNAVAILABLE</span>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs text-gray-400">
            Se você é o proprietário deste domínio, entre em contato com o suporte técnico para regularizar a situação.
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-[10px] text-gray-300 uppercase tracking-widest">
        &copy; 2024 Global Web Hosting Systems
      </div>
    </div>
  );
}