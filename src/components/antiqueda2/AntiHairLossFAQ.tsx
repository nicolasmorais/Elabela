import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AntiHairLossFAQ() {
  return (
    <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter">
            PERGUNTAS FREQUENTES
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            {
              q: "❓ Funciona mesmo?",
              a: "SIM. 12.847 clientes comprovam. 87% tiveram redução de queda em 7 dias."
            },
            {
              q: "❓ Quanto tempo para ver resultado?",
              a: "3-5 dias: Queda reduz 50%. 7 dias: Queda estanca 90%."
            },
            {
              q: "❓ Frete é grátis?",
              a: "SIM. Para todo o Brasil."
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-orange-100 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
