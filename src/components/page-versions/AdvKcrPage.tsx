"use client";

import React from 'react';
import { PageTracker } from "./PageTracker";

export function AdvKcrPage() {
  return (
    <>
      <PageTracker contentId="advkcr" />
      <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-2xl text-center">
          <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
            Seu conteúdo de advertorial será exibido aqui.
          </p>
        </div>
      </div>
    </>
  );
}