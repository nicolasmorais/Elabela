"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const KcrPromoFAQ = () => {
  const sections = [
    {
      title: "💰 SOBRE O PRODUTO",
      questions: [
        { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias. Garantia de 7 dias: não funcionou = dinheiro de volta." },
        { q: "❓ Já tentei outros produtos e não funcionaram. Por que este seria diferente?", a: "Formulação profissional com Biotina + Proteína de Trigo + Pantenol. Produtos comuns mascaram. Este reconstrói a raiz." }
      ]
    },
    {
        title: "💳 SOBRE PAGAMENTO",
        questions: [
          { q: "❓ Por que R$ 147,00?", a: "Venda direta da indústria. Sem intermediários. Preço normal em salões: R$ 297" },
          { q: "❓ Posso parcelar?", a: "SIM. Em 12x de R$ 14,96 no cartão. Ou R$ 147,00 no PIX (desconto aplicado)." }
        ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2></div>
            <div className="space-y-12">
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">{section.title}</h3>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {section.questions.map((item, qIdx) => (
                                <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                    <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">{item.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};