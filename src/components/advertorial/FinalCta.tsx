"use client";

import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  return (
    <section className="text-center py-12 border-t">
      <h3 className="text-2xl font-bold mb-4">Conclusão da Pesquisa</h3>
      <blockquote className="text-lg mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
        <p>
          A pesquisa do Dr. Yano sugere que uma abordagem integrativa, focada na
          regeneração pancreática através de compostos naturais, pode oferecer
          uma alternativa promissora aos tratamentos convencionais para diabetes
          tipo 2. A decisão de explorar novos métodos deve ser sempre
          acompanhada por um profissional de saúde.
        </p>
        <cite className="block not-italic mt-4 font-semibold">
          — Dr. Roberto Yano
        </cite>
      </blockquote>
      <Button
        size="lg"
        variant="default"
        className="w-full max-w-md mx-auto h-14 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white"
      >
        Acessar o Protocolo Agora
      </Button>
      <p className="mt-4 text-sm text-gray-500">
        Acesso digital • Material informativo • Política de satisfação
      </p>
    </section>
  );
};