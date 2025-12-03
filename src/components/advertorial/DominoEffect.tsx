"use client";

import { TrendingDown } from "lucide-react";

const dominoSteps = [
  "Glicose descontrolada",
  "Ganho de peso e gordura visceral",
  "Substituição por insulina",
  "Complicações circulatórias",
  "Neuropatia, amputações, cegueira",
  'E a pior frase de todas: "você vai ter que conviver com isso pra sempre"',
];

export const DominoEffect = () => {
  return (
    <section className="mb-12 p-6 border rounded-lg">
      <h3 className="text-3xl font-bold text-center mb-6">
        O Erro de Foco no Seu Tratamento que Ninguém te Contou...
      </h3>
      <p className="text-lg mb-4">
        A medicina tradicional foca obsessivamente em baixar os níveis de
        glicose no sangue. Mas a glicose alta não é a causa da doença, e sim a{" "}
        <span className="font-bold">
          consequência de algo muito mais profundo
        </span>{" "}
        que está acontecendo no seu pâncreas.
      </p>
      <p className="text-lg mb-6">
        Medicamentos tradicionais forçam o corpo a empurrar a glicose para
        dentro das células com “brutalidade bioquímica”, mas não tratam a
        inflamação nem desbloqueiam as células beta. Pelo contrário: vão
        sobrecarregando o sistema do seu corpo a cada dose. E isso leva ao
        efeito dominó:
      </p>
      <div className="space-y-3">
        {dominoSteps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 text-lg">
            <TrendingDown className="h-6 w-6 text-red-500 flex-shrink-0" />
            <span>{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
};