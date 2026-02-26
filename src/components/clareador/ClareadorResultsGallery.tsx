"use client";

import React from 'react';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771384183827-532063fb860b7578c8179d5e0c193ee7.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771383496255-generated_image_8480214f-cf85-4202-9e55-a5c6982932d1.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771320326399-ChatGPT-Image-17-de-fev.-de-2026,-06_22_14.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771320327807-ChatGPT-Image-17-de-fev.-de-2026,-05_56_50.png"
];

export const ClareadorResultsGallery = () => {
  return (
    <section className="py-24 px-6 border-b border-slate-50">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <span className="inline-block text-brand-pink font-black text-xs uppercase tracking-[0.4em]">PAIXÃO NACIONAL</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-blue-dark uppercase">Resultados Reais</h2>
                <div className="h-1.5 w-32 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {GALLERY_IMAGES.map((url, i) => (
                    <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden border border-orange-100 shadow-md">
                       <img 
                         src={url} 
                         alt={`Resultado ${i + 1}`} 
                         className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                         style={{ transitionDuration: '1500ms' }}
                       />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};