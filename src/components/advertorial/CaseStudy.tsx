"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, User } from "lucide-react";

export const CaseStudy = () => {
  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <User className="h-8 w-8" />
            Estudo de Caso: Manoel — o diabético que fez "tudo certo"... mas
            quase parou em uma máquina de hemodiálise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Seu Manoel, 64 anos, aposentado, morava no interior de Goiás.
            Diagnosticado com diabetes tipo 2 há mais de 22 anos, estava com a
            glicose em 290 mg/dL, sentia tonturas, visão embaçada e seus pés
            começaram a perder a sensibilidade. O diagnóstico era: nefropatia
            diabética, uma complicação severa.
          </p>
          <p className="font-semibold">
            O problema é que ele já seguia tudo que o seu endocrinologista
            mandava:
          </p>
          <ul className="space-y-2 my-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Tomava 3 comprimidos de Metformina todos os dias (1500mg).
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Controlava o açúcar e caminhava três vezes por semana.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Evitava alimentos com alto índice glicêmico.
            </li>
          </ul>
          <p>
            Mesmo assim, a glicose nunca ficava totalmente sob controle. Se ele
            não tivesse conhecido um outro caminho, estaria fazendo hemodiálise.
            A sorte é que ele foi salvo no limite!
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-6">
            <p>
              “O seu corpo ainda é capaz de controlar a glicose naturalmente. O
              que falta não é remédio. O que falta é desbloquear o que está
              travado dentro de você.”
            </p>
            <cite className="mt-2 block not-italic font-semibold">
              — Dr. Yano para Seu Manoel
            </cite>
          </blockquote>
        </CardContent>
      </Card>
    </section>
  );
};