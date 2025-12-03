"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export const ProblemAlert = () => {
  return (
    <section className="mb-12 space-y-6 text-lg leading-relaxed">
      <p>
        Você já parou para pensar o por que da sua glicose continuar alta, mesmo
        tomando os remédios receitados corretamente, fazendo o que os médicos
        pedem e até mesmo comendo um pouco menos açúcar?
      </p>
      <p className="font-semibold">Pois saiba que isso não é sua culpa.</p>
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>
          Este pode ser o texto mais importante que você já leu sobre a Diabetes
          Tipo 2. O que você fará nos próximos 5 minutos pode decidir se você
          irá vencer essa doença silenciosa ou continuar rumo a amputações,
          cegueira e dependência eterna de remédios. Leia com atenção.
        </AlertDescription>
      </Alert>
      <p>
        Um novo estudo conduzido por pesquisadores Japoneses na Universidade de
        Tóquio (Bunkyō), foi recebido pela Universidade de São Paulo (USP) aqui
        no brasil, e revelou que 7 em cada 10 pacientes diabéticos tipo 2 estão
        seguindo um protocolo de tratamento ultrapassado, ineficaz — e em muitos
        casos, perigoso.
      </p>
      <p className="text-2xl font-bold text-center py-4">
        O nome disso? Erro médico sistemático.
      </p>
      <p>
        Os remédios receitados como Metformina, Glifage, Glicazida por vezes
        trazem aquela falsa sensação de que você está fazendo a coisa certa,
        parecem controlar momentaneamente o problema, mas por dentro você sabe:
        seu corpo continua entrando em colapso.
      </p>
    </section>
  );
};