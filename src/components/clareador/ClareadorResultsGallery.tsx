"use client";

import React from 'react';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
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
                       <img src={url} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};