"use client";

import React from 'react';
import { PageTracker } from "./PageTracker";

export function ClareadorPage() {
  return (
    <>
      <PageTracker contentId="clareador" />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-2xl w-full text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Página Clareador
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Conteúdo em desenvolvimento...
          </p>
          <div className="pt-8">
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}