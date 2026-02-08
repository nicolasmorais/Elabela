"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const PORTALS = [
  { name: "G1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/G1_%28portal%29_logo.svg/1024px-G1_%28portal%29_logo.svg.png" },
  { name: "R7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R7_logo.svg/2560px-R7_logo.svg.png" },
  { name: "Globo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Rede_Globo_logo.svg/1200px-Rede_Globo_logo.svg.png" },
  { name: "Record TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/RecordTV_logo.svg/1200px-RecordTV_logo.svg.png" },
  { name: "SBT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/SBT_logo.svg/1200px-SBT_logo.svg.png" }
];

export const NewsPortalsSection = () => {
  return (
    <section className="py-12 bg-slate-50/50 border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-center">
            DESTAQUE NOS MAIORES PORTAIS DE NOTÍCIAS
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
            {PORTALS.map((portal) => (
              <div key={portal.name} className="h-6 md:h-8 flex items-center justify-center">
                <img 
                  src={portal.logo} 
                  alt={`Logotipo ${portal.name}`} 
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};