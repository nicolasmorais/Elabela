"use client";

import React from 'react';
import { Star, Verified } from 'lucide-react';

const DELIVERY_TESTIMONIALS = [
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424581866-br-11134103-7r98o-m2e0k7l1n6up40.webp",
    text: "Chegou super rápido! Já comecei meu tratamento antiqueda hoje. O cheiro é maravilhoso e na primeira lavada já senti o cabelo mais firme e cheiroso.",
    author: "Marta S., São Paulo"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424580859-br-11134103-7r98o-lx2ovwv7z4xr65.webp",
    text: "Entrega relâmpago aqui no RJ! Usei hoje pela primeira vez e o perfume é incrível. Notei que caiu bem menos fios no banho, já sinto a diferença na quebra.",
    author: "Juliana P., Rio de Janeiro"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424583249-br-11134103-7r98p-llnppczak2rq05.webp",
    text: "Recebi em tempo recorde! O kit é lindo e muito cheiroso. Fiz a primeira aplicação e o cabelo ficou super macio, parece que a quebra diminuiu logo de cara.",
    author: "Fernanda L., Belo Horizonte"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424577080-br-11134103-7r98o-m1y7dwagoaqnf9.webp",
    text: "Chegou voando! Começando o cronograma antiqueda agora. O perfume fixou no cabelo e já sinto os fios mais resistentes, caiu quase nada no pente hoje.",
    author: "Carla T., Curitiba"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424578975-br-11134103-7r98o-loftzznnqjbbd6.webp",
    text: "Impecável a entrega! O cheiro é viciante e o resultado no primeiro dia me surpreendeu. O cabelo ficou soltinho e senti que parou de quebrar tanto.",
    author: "Cláudia Mendes, Brasília"
  },
  {
    image: "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1772424573679-br-11134103-7r98o-m0ftwmodl7cx6d.webp",
    text: "Meu kit chegou antes do esperado! Já iniciei o tratamento. O cabelo está super cheiroso e sinto que a queda já deu uma segurada na primeira lavagem.",
    author: "Beatriz A., Porto Alegre"
  }
];

export const KcrOriginalCommunity = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-2">Comunidade Cavalo de Raça</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                  ENQUANTO VOCÊ LÊ, MILHARES JÁ ESTÃO USANDO ✨
                </h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto pt-4">
                    Fotos reais enviadas por nossas clientes ao receberem seus kits Cavalo de Raça.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {DELIVERY_TESTIMONIALS.map((test, i) => (
                    <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-orange-50 transition-all hover:scale-[1.02] hover:shadow-orange-200/30 flex flex-col">
                        <div className="aspect-square relative overflow-hidden border-b border-orange-50">
                            <img src={test.image} alt="Kit Recebido" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-orange-600 shadow-lg"><Verified size={20} /></div>
                        </div>
                        <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex gap-1 text-orange-400">
                                    {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed italic text-lg">"{test.text}"</p>
                            </div>
                            <div className="pt-6 border-t border-orange-50"><p className="font-black text-orange-900 text-sm uppercase tracking-widest">{test.author}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};