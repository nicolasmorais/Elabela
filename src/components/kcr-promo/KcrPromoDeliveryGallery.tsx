"use client";

import React from 'react';
import { Star, Verified } from 'lucide-react';

interface KcrPromoDeliveryGalleryProps {
    testimonials: any[];
}

export const KcrPromoDeliveryGallery = ({ testimonials }: KcrPromoDeliveryGalleryProps) => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                CLIENTES RECEBENDO ✨
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {testimonials.map((test, i) => (
                    <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-orange-50 flex flex-col transition-all hover:scale-[1.02]">
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
                            <div className="pt-6 border-t border-orange-50">
                                <p className="font-black text-orange-900 text-sm uppercase tracking-widest">{test.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};