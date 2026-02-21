"use client";

import React from 'react';

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421128310-ChatGPT-Image-6-de-fev.-de-2026,-19_37_46.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421110516-ChatGPT-Image-6-de-fev.-de-2026,-19_41_56.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png"
];

export const AntiquedaResultsGallery = () => {
  return (
    <section className="py-24 px-6 bg-white border-b border-orange-100">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">Resultados Reais, Mulheres Reais</h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {GALLERY_IMAGES.map((url, i) => (
            <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-orange-100">
               <img src={url} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
               <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        <div className="text-center pt-8"><p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p></div>
      </div>
    </section>
  );
};