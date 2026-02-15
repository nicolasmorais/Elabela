"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ClareadorFAQ = () => {
  const faqData = [
    { q: "❓ Funciona mesmo?", a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas. Garantia de 90 dias: não clareou = dinheiro de volta." },
    { q: "❓ Já tentei outros e não funcionou. Por que Amazolé?", a: "Porque Amazolé não usa ácidos. Ele usa botânica pura da Amazônia que bloqueia a melanina sem queimar a pele." },
    { q: "❓ Quanto tempo demora?", a: "Pele mais uniforme na 1ª semana. Clareamento intenso a partir da 4ª semana de uso contínuo." },
    { q: "❓ Tem garantia?", a: "Sim, garantia incondicional de 90 dias. Ou você clareia suas manchas ou devolvemos seu dinheiro." }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">Dúvidas Frequentes</h2></div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-100 rounded-2xl px-6">
                        <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 pb-6">{item.a}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );
};