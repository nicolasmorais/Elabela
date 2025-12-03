"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="mb-12">
      <Alert className="border-green-500 bg-green-50 dark:bg-green-900/30">
        <ShieldCheck className="h-6 w-6 text-green-500" />
        <AlertTitle className="text-xl font-bold text-green-800 dark:text-green-200">
          Resultados ou Dinheiro de Volta! Simples Assim.
        </AlertTitle>
        <AlertDescription className="text-lg">
          <p>
            O tratamento Glicelidina possui registro no Ministério da Saúde e
            autorização da ANVISA. Se em 90 dias você não notar melhora real
            nos seus níveis de glicose, energia, bem-estar ou cicatrização, nós
            devolvemos 100% do seu dinheiro — sem letras miúdas.
          </p>
          <p className="italic mt-2">
            “Se esse protocolo não mudar sua vida, ele não merece ficar com o
            seu dinheiro.” – Dr. Yano.
          </p>
        </AlertDescription>
      </Alert>
    </section>
  );
};