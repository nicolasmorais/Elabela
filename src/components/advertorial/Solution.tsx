"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Dna, Globe, Leaf } from "lucide-react";

export const Solution = () => {
  return (
    <section className="mb-12 space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold">
          O Pâncreas de um Diabético Tipo 2 Não Está Morto. Ele Está Adormecido.
        </h3>
        <p className="text-xl mt-2 text-gray-600 dark:text-gray-300">
          E sim: existe uma forma de estimular essas células a voltarem a
          funcionar.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-green-600" />
            Um Protocolo Natural, Validado pela Medicina Oriental
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Dr. Yano descobriu que existe um composto fitoterápico extraído de
            uma alga medicinal específica, a{" "}
            <span className="font-bold">Chlorella Vulgaris</span>, que age em
            três pontos-chave do organismo:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Desinflama o tecido pancreático, permitindo que as células beta
              voltem a se regenerar.
            </li>
            <li>
              Reativa a produção natural de insulina, com efeito gradual e
              duradouro.
            </li>
            <li>
              Estabiliza os níveis de glicose no sangue, sem causar
              hipoglicemia ou sobrecarga dos rins e fígado.
            </li>
          </ul>
          <p className="font-bold">
            Em 28 dias, os exames de Seu Manoel se normalizaram e sua glicose
            estabilizou em 98 mg/dL.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dna className="h-7 w-7 text-blue-600" />A Validação Científica
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Pesquisas publicadas no{" "}
            <span className="italic">Journal of Medicinal Food</span> e no{" "}
            <span className="italic">
              International Journal of Endocrinology
            </span>{" "}
            apontam que o uso regular da Chlorella:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduz os marcadores inflamatórios no tecido pancreático.</li>
            <li>Aumenta a sensibilidade à insulina.</li>
            <li>Estimula a regeneração gradual das células beta danificadas.</li>
          </ul>
          <Badge variant="secondary">
            Em estudos de campo, mais de 82% dos pacientes apresentaram
            estabilização glicêmica abaixo de 100 mg/dL nas primeiras 3
            semanas.
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-purple-600" />
            Reconhecimento Internacional e Resultados Reais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Nos últimos dois anos, mais de 26 mil pacientes no Brasil testaram o
            protocolo com acompanhamento remoto. Relatórios clínicos apontam
            que:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>
                <span className="font-bold">7 em cada 10 usuários</span>{" "}
                reduziram ou eliminaram o uso de insulina em até 90 dias.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>
                <span className="font-bold">91% relataram melhora</span> em
                sintomas como fadiga, tonturas e formigamento.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>
                <span className="font-bold">84% tiveram melhora</span>{" "}
                expressiva na cicatrização e controle da pressão arterial.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};