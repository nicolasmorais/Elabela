"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const KcrPromoFAQ = () => {
  const sections = [
    {
      title: "💰 SOBRE O PRODUTO",
      questions: [
        { q: "❓ Funciona mesmo?", a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias. Garantia de 7 dias: não funcionou = dinheiro de volta." },
        { q: "❓ Já tentei outros produtos e não funcionaram. Por que este seria diferente?", a: "Formulação profissional com Biotina + Proteína de Trigo + Pantenol. Produtos comuns mascaram. Este reconstrói a raiz." },
        { q: "❓ Funciona para queda pós-parto?", a: "SIM. É quando mais funciona. Fortalece raiz enfraquecida pelos hormônios." },
        { q: "❓ Funciona para queda por estresse?", a: "SIM. Fortalece a raiz independente da causa." },
        { q: "❓ Tenho couro cabeludo oleoso/seco. Posso usar?", a: "PODE. pH balanceado para todos os tipos." },
        { q: "❓ Quanto tempo para ver resultado?", a: "→ 3-5 dias: Queda reduz 40-50%\n→ 7 dias: Queda estanca 80-90%\n→ 14 dias: Fios param de quebrar\n→ 30 dias: Bebês começam a nascer" },
        { q: "❓ Preciso usar para sempre?", a: "NÃO. Após 2-3 meses intensivos, pode fazer manutenção 2-3x por semana." },
        { q: "❓ Funciona para calvície?", a: "Se você ainda TEM cabelo, funciona. Fortalece raiz viva. Calvície total (sem raiz) = Não resolve." }
      ]
    },
    {
      title: "💳 SOBRE PREÇO E PAGAMENTO",
      questions: [
        { q: "❓ Por que R$ 147,00?", a: "Venda direta da indústria. Sem intermediários. Sem markup. Preço normal em salões: R$ 297" },
        { q: "❓ Posso parcelar?", a: "SIM. Em 12x de R$ 14,96 no cartão. Ou R$ 147,00 no PIX (desconto aplicado)." },
        { q: "❓ Tem desconto maior?", a: "NÃO. Este é o menor preço possível. De R$ 297 por R$ 147,00 = 50% OFF" },
        { q: "❓ E se não funcionar?", a: "GARANTIA DE 7 DIAS. Use por 1 semana. Não funcionou? Devolvemos 100% do valor. Sem perguntas. Sem burocracia." }
      ]
    },
    {
      title: "📦 SOBRE ENTREGA",
      questions: [
        { q: "❓ Frete é grátis?", a: "SIM. Para todo o Brasil. Rastreio + Seguro inclusos." },
        { q: "❓ Quanto tempo para chegar?", a: "→ Sudeste/Sul: 3-7 dias úteis\n→ Demais regiões: 5-12 dias úteis\nEnvio em até 24h úteis após confirmação." },
        { q: "❓ É seguro comprar?", a: "SIM.\n✅ Certificado SSL\n✅ Checkout seguro\n✅ Nota fiscal\n✅ CNPJ ativo" }
      ]
    },
    {
      title: "🧴 SOBRE USO",
      questions: [
        { q: "❓ É difícil de usar?", a: "NÃO. Banho normal:\n1. Shampoo (3 min)\n2. Condicionador (2 min)\n3. Leave-in (1 min)\n4. Máscara 2x/semana (15 min)" },
        { q: "❓ Quanto tempo dura o kit?", a: "2 a 3 meses de uso normal.\nR$ 147,00 ÷ 75 dias = R$ 1,96/dia" },
        { q: "❓ Preciso usar os 4 produtos?", a: "SIM. Eles trabalham juntos:\n→ Shampoo: Ancora raiz\n→ Condicionador: Sela cutícula\n→ Máscara: Reconstrói fibra\n→ Leave-in: Protege\nUsar só alguns = Resultado pela metade." },
        { q: "❓ Tenho química no cabelo. Posso usar?", a: "PODE. E deve. Química enfraquecida. Kit reconstrói." },
        { q: "❓ Grávida pode usar?", a: "Produtos de uso externo = Seguro. Mas consulte seu médico antes." }
      ]
    },
    {
      title: "⚠️ SOBRE ESTOQUE",
      questions: [
        { q: "❓ \"Últimas unidades\" é verdade?", a: "SIM. Produção em lotes pequenos. Alta demanda. Quando acaba = Acaba." },
        { q: "❓ Posso comprar depois?", a: "PODE. Mas:\n→ Preço volta para R$ 297\n→ Frete deixa de ser grátis\n→ Esta oferta não se repete" },
        { q: "❓ Ainda tenho dúvidas. Como falar com vocês?", a: "📧 contato@cavalo-de-raca.pro\nResposta em até 24h úteis." }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                <div className="h-1 w-20 bg-orange-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="space-y-12">
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                        <h3 className="text-xl font-black text-orange-800 uppercase tracking-[0.2em] border-b-2 border-orange-200 inline-block pb-1">{section.title}</h3>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {section.questions.map((item, qIdx) => (
                                <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="bg-white border border-orange-100 rounded-2xl px-6 shadow-sm">
                                    <AccordionTrigger className="text-left font-bold py-5 hover:no-underline">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 whitespace-pre-line">
                                        {item.a}
                                    </AccordionContent>
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