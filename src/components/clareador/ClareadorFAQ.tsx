"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export const ClareadorFAQ = () => {
  const sections = [
    {
      title: "💰 SOBRE O PRODUTO",
      questions: [
        { 
          q: "❓ Funciona mesmo?", 
          a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas. Garantia de 90 dias: não clareou = dinheiro de volta." 
        },
        { 
          q: "❓ Já tentei mil clareadores e nenhum funcionou. Por que este seria diferente?", 
          a: "Porque os outros usam ÁCIDOS que ardem, descascam e irritam a pele, gerando um clareamento temporário que muitas vezes volta pior. Amazolé usa BOTÂNICA: o Mulateiro bloqueia a melanina NA RAIZ de forma natural, sem arder ou descascar, garantindo um clareamento progressivo e duradouro." 
        },
        { 
          q: "❓ Funciona para melasma?", 
          a: "SIM. O melasma é um acúmulo de melanina. O Mulateiro inibe essa produção. MAS: É fundamental usar protetor solar FPS 50+ TODO DIA. Sem proteção, a mancha volta." 
        },
        { 
          q: "❓ Arde? Descasca a pele?", 
          a: "NÃO. A fórmula é 100% natural, sem ácidos agressivos. Pode ocorrer um leve formigamento na primeira aplicação, o que é normal e passa em 2-3 minutos. Se arder muito, sua pele é muito sensível; nesse caso, aplique apenas 1x ao dia, à noite." 
        },
        { 
          q: "❓ Tenho pele sensível/alérgica. Posso usar?", 
          a: "PODE. A fórmula é natural e o pH é balanceado. O produto foi testado dermatologicamente e é indicado para peles sensíveis. Sempre recomendamos o teste de alergia: aplique atrás da orelha, aguarde 24h e, se não houver reação, pode usar normalmente." 
        },
        { 
          q: "❓ Quanto tempo para ver resultado?", 
          a: "Semana 1-2: Pele mais uniforme. Semana 3-4: Clareamento visível (30-40%). Semana 5-8: Clareamento intenso (50-70%). Mês 3+: Tom quase igualado. O tempo varia por pessoa; melasma costuma demorar mais (2-3 meses), enquanto axila e virilha respondem mais rápido (4-6 semanas)." 
        },
        { 
          q: "❓ Preciso usar para sempre?", 
          a: "Na FASE INTENSIVA (primeiros 2-3 meses), use 2x ao dia. Depois, na FASE DE MANUTENÇÃO, pode usar 1x ao dia (à noite) ou 3-4x por semana. A mancha não volta se você mantiver a manutenção, usar protetor solar e evitar atrito excessivo." 
        },
        { 
          q: "❓ Funciona em pele negra?", 
          a: "SIM. Funciona em TODOS os tons de pele. Em peles negras, o clareamento é progressivo e suave, uniformizando o tom da mancha com a sua pele saudável." 
        },
        { 
          q: "❓ Posso usar no rosto todo dia?", 
          a: "PODE. Recomendamos aplicar à noite. De manhã, use SEMPRE protetor solar FPS 50+. O sol sem proteção fará com que a mancha volte pior." 
        }
      ]
    },
    {
      title: "💳 SOBRE PREÇO E PAGAMENTO",
      questions: [
        { 
          q: "❓ Por que R$ 137?", 
          a: "Devido aos ingredientes importados da Amazônia, ao processo de extração rigoroso e à nossa fórmula patenteada. É um preço justo por um produto que realmente funciona. Comparado a tratamentos a laser (R$ 800-1.500) ou cremes importados (R$ 300-600), o Amazolé oferece um excelente custo-benefício." 
        },
        { 
          q: "❓ Posso parcelar?", 
          a: "SIM. Parcelamos em até 12x de R$ 13,90 sem juros. Ou você pode pagar R$ 137 no PIX com desconto aplicado." 
        },
        { 
          q: "❓ Quanto comprar?", 
          a: "RECOMENDAMOS: 2 frascos para 1 ÁREA (60 dias); 3 frascos para 2 ÁREAS (90 dias); 4-6 frascos para 3+ ÁREAS. Quanto mais tempo usar, melhor o resultado." 
        },
        { 
          q: "❓ E se não funcionar?", 
          a: "Oferecemos GARANTIA INCONDICIONAL DE 90 DIAS. Use por 3 meses; se não clarear, basta enviar um e-mail. Devolvemos 100% do valor sem burocracia, sem perguntas e você nem precisa devolver o produto." 
        }
      ]
    },
    {
      title: "📦 SOBRE ENTREGA",
      questions: [
        { 
          q: "❓ Frete é grátis?", 
          a: "SIM. Frete GRÁTIS para TODO o Brasil, com rastreio e seguro inclusos." 
        },
        { 
          q: "❓ Quanto tempo para chegar?", 
          a: "Sudeste/Sul: 3-7 dias úteis. Demais regiões: 5-12 dias úteis. O envio é feito em até 24h úteis após a confirmação." 
        },
        { 
          q: "❓ É seguro comprar?", 
          a: "100% SEGURO. Contamos com certificado SSL, checkout criptografado, emissão de nota fiscal, CNPJ ativo e conformidade com a LGPD." 
        }
      ]
    },
    {
      title: "🧴 SOBRE USO",
      questions: [
        { 
          q: "❓ Quanto tempo dura 1 frasco?", 
          a: "Dura em média 30 DIAS tratando uma área. Áreas pequenas como axilas podem durar até 45 dias, enquanto áreas grandes podem durar cerca de 20 dias." 
        },
        { 
          q: "❓ Posso usar durante a gravidez?", 
          a: "Por ser natural e de uso externo, geralmente é seguro. No entanto, como cada gravidez é única, SEMPRE consulte seu obstetra antes." 
        },
        { 
          q: "❓ Posso misturar com outros cremes?", 
          a: "NÃO RECOMENDAMOS. Use apenas Amazolé na área para não anular o efeito. Você pode usar protetor solar, maquiagem ou desodorante após a absorção completa (cerca de 5 minutos)." 
        },
        { 
          q: "❓ Preciso depilar antes de usar?", 
          a: "NÃO precisa; funciona com ou sem pelos. Se depilar, espere 24h antes de aplicar, pois a pele irritada pode arder." 
        },
        { 
          q: "❓ Ainda tenho dúvidas. Como falar com vocês?", 
          a: "Envie um e-mail para contato@amazole.com.br. Respondemos em até 24h úteis." 
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">PERGUNTAS FREQUENTES</h2>
                <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
                {sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-6">
                        <h3 className="text-xl font-black text-brand-blue-dark uppercase tracking-[0.2em] border-b-2 border-brand-blue/20 inline-block pb-1">
                            {section.title}
                        </h3>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {section.questions.map((item, qIdx) => (
                                <AccordionItem 
                                    key={qIdx} 
                                    value={`sec-${sIdx}-q-${qIdx}`} 
                                    className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm hover:border-brand-blue/30 transition-all"
                                >
                                    <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-5 leading-tight">
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