"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "É seguro para quem já toma insulina ou Metformina?",
    answer:
      "Sim! O Glicelidina não tem contraindicações e pode ser usado em conjunto com medicamentos tradicionais. A recomendação médica nunca deve ser ignorada, porém temos muitos casos pacientes relatam redução ou até eliminação da dependência de metformina ou até mesmo insulina.",
  },
  {
    question: "Quanto tempo até eu ver resultados?",
    answer:
      "Alguns pacientes relatam melhora já nos primeiros 7 dias, com mais energia, menos sede e glicemia mais estável. Os efeitos são cumulativos — o Glicelidina atua em regeneração celular e metabólica, por isso quanto mais completo o tratamento, melhores os resultados.",
  },
  {
    question: "Como usar o Glicelidina?",
    answer:
      "Basta tomar 1 cápsula por dia, de preferência no mesmo horário — recomendamos o período da manhã, com um copo de água, logo após o café.",
  },
  {
    question: "Tem garantia mesmo? Como funciona?",
    answer:
      "Sim! Você tem 90 dias de garantia incondicional. Se não sentir qualquer progresso, devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia. Simples assim.",
  },
];

export const Faq = () => {
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold text-center mb-8">
        Tire Todas as Suas Dúvidas Antes de Comprar
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};