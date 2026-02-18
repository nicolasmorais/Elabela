"use client";

import React from 'react';
import { Star, Verified } from 'lucide-react';

const CUSTOMER_PHOTOS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558637636-1.png",
    text: "Usei por 1 mês nas axilas. Clareou MUITO! Já consigo usar regata sem vergonha. O cheiro é suave e não arde nada.",
    author: "Patrícia L., Curitiba"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558641342-2.png",
    text: "Meu melasma diminuiu bastante em 6 semanas. Uso menos base agora. Produto natural, não irrita.",
    author: "Fernanda S., Belo Horizonte"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558644450-3.png",
    text: "Virilha estava horrível. Com 3 semanas já vi diferença. Com 2 meses clareou uns 60%. Vale cada centavo!",
    author: "Juliana M., Salvador"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558648736-4.png",
    text: "Foliculite nas coxas sumiu em 10 dias. O clareamento veio depois. Pele lisinha agora!",
    author: "Renata P., Recife"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png",
    text: "Manchas de idade nas mãos clarearam bem. Uso há 2 meses. Minhas amigas perguntam o que usei!",
    author: "Maria C., Porto Alegre"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558657652-6.png",
    text: "Cotovelos escuros desde criança. Esse foi o ÚNICO que clareou de verdade. 8 semanas = resultado incrível.",
    author: "Beatriz A., Rio de Janeiro"
  }
];

export const ClareadorCustomerFeedback = () => {
  // Seção ocultada conforme solicitação
  return null;
  
  /* 
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-blue-dark uppercase leading-tight">
                    ENQUANTO VOCÊ LÊ, <br /> <span className="text-brand-pink underline decoration-brand-pink/20 underline-offset-8">MILHARES JÁ ESTÃO CLAREANDO</span> ✨
                </h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">
                    Fotos reais enviadas por nossas clientes ao longo do tratamento com Amazolé.
                </p>
                <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {CUSTOMER_PHOTOS.map((test, i) => (
                    <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-50 flex flex-col transition-all hover:scale-[1.02] hover:shadow-brand-pink/10">
                        <div className="aspect-square relative overflow-hidden">
                            <img 
                                src={test.image} 
                                alt="Resultado de cliente" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-brand-pink shadow-lg">
                                <Verified size={20} />
                            </div>
                        </div>
                        <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed italic text-lg">"{test.text}"</p>
                            </div>
                            <div className="pt-6 border-t border-slate-50">
                                <p className="font-black text-brand-blue-dark text-sm uppercase tracking-widest">{test.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-8">
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Total de 12.847 avaliações positivas verificadas</p>
            </div>
        </div>
    </section>
  );
  */
};