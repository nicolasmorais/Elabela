"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

export const Authority = () => {
  return (
    <section className="mb-12">
      <Card className="bg-gray-50 dark:bg-gray-800/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <UserCheck className="h-8 w-8 text-blue-600" />
            A Voz da Experiência
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Quem afirma isso é o{" "}
            <span className="font-bold">Dr. Roberto Kazushigue Yano</span>,
            figura importante da medicina brasileira, ativo em redes sociais
            contando com mais de 7 milhões de seguidores, com cerca de 26 anos
            de experiência em medicina alternativa integrativa, reconhecido
            tanto no Brasil quanto internacionalmente, onde já participou de
            estudos avançados sobre diabetes tipo 2 e regeneração pancreática.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            <p>
              "Depois de acompanhar centenas de pacientes, tantas amputações que
              poderiam ter sido evitadas, tantos casos de cegueira parcial ou
              completa... vi com meus próprios olhos: os medicamentos só
              empurram a glicose para dentro das células à força!!!"
            </p>
            <cite className="mt-2 block not-italic font-semibold">
              — Dr. Yano
            </cite>
          </blockquote>
          <p>
            O problema é que a maioria das pessoas no fundo sabem que não, mas
            são forçadas pelo sistema a acreditarem que sim. Porque foi o que o
            médico indicou. Porque “é assim mesmo”. Porque “diabetes não tem
            cura”.
          </p>
          <p className="font-bold">Mas e se essa história estiver errada desde o começo?</p>
        </CardContent>
      </Card>
    </section>
  );
};