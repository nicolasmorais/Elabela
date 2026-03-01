"use client";

import React from 'react';
import { Star } from 'lucide-react';

const CELEBRITY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772330023955-image.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772330022742-grok-image-cd7c756d-5908-4cbb-b1d8-d845fb84f339.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772330020797-grok-image-3e66320f-2253-49ba-b569-345075b35cbe.png"
];

export const KcrPromoCelebrities = () => {
  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Presença VIP</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                    O Favorito das <span className="text-orange-700 italic">Famosas</span>
                </h2>
                <div className="flex justify-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-2">
                    Não é apenas um kit, é o segredo de quem vive da imagem e não abre mão da saúde dos fios.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CELEBRITY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 hover:scale-[1.02]">
                        <img 
                            src={url} 
                            alt={`Famosa usando Cavalo de Raça ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-center">
                                <p className="text-[10px] font-black text-orange-700 uppercase tracking-widest">Aprovação Garantida</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};