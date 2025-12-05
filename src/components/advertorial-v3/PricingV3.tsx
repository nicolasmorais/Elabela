"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const PricingV3 = () => {
  return (
    <section className="my-12 text-center space-y-8 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <h2 className="text-3xl font-bold font-sans">
        💠 Como acessar o guia completo
      </h2>
      <p className="text-xl">
        O guia está disponível digitalmente por uma contribuição simbólica de{" "}
        <span className="font-bold text-green-600">R$ 29,90</span>, com acesso
        imediato após a confirmação do pagamento.
      </p>
      <Button
        size="lg"
        className="w-full max-w-lg mx-auto h-16 text-xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-lg"
      >
        👉 Acessar o Guia com a Prática Japonesa
      </Button>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
        <ShieldCheck className="h-4 w-4" />
        Pagamento único via PIX — acesso liberado no e-mail em poucos minutos.
      </p>
    </section>
  );
};