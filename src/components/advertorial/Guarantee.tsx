"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="mb-12">
      <Alert className="border-blue-500 bg-blue-50 dark:bg-blue-900/30">
        <ShieldCheck className="h-6 w-6 text-blue-500" />
        <AlertTitle className="text-xl font-bold text-blue-800 dark:text-blue-200">
          Política de Satisfação de 7 Dias
        </AlertTitle>
        <AlertDescription className="text-lg">
          A equipe do Dr. Yano confia na qualidade e eficácia do material
          informativo. Por isso, é oferecida uma política de satisfação. Se, no
          período de 7 dias, você não estiver satisfeito com o conteúdo, pode
          solicitar o reembolso integral da taxa de acesso.
        </AlertDescription>
      </Alert>
    </section>
  );
};