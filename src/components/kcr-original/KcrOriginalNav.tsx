"use client";

import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const KcrOriginalNav = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm">
      {/* Barra de Urgência */}
      <div className="bg-orange-600 text-white py-2.5 px-4 text-center border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">
          <Timer size={16} className="animate-pulse" />
          <span>Atenção: O preço promocional vai subir em</span>
          <span className="bg-white text-orange-600 px-2 py-0.5 rounded font-mono font-bold ml-1">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
      
      {/* Navegação Principal */}
      <nav className="bg-[#FDF8F3]/95 backdrop-blur-md border-b border-slate-100 py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
              <img 
                  src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                  alt="Logo" className="h-8"
              />
          </div>
      </nav>
    </div>
  );
};