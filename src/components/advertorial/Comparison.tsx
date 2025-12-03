"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const Comparison = () => {
  return (
    <section className="my-12 space-y-12">
      <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/20 border-red-500">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <AlertTitle className="font-bold text-red-800 dark:text-red-200">
          ATENÇÃO: quem espera demais, pode não ter uma segunda chance...
        </AlertTitle>
        <AlertDescription className="text-red-700 dark:text-red-300 text-lg">
          A demora no tratamento adequado pode levar a complicações graves e
          irreversíveis. Você está vivendo com uma bomba-relógio prestes a
          explodir: Amputações, Cegueira progressiva, Insuficiência renal,
          Derrame, Infarto silencioso. Essas são as próximas fases da doença.
        </AlertDescription>
      </Alert>
    </section>
  );
};