"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  PlayCircle,
  FileText,
  CalendarDays,
  Gift,
} from "lucide-react";

const offerItems = [
  {
    icon: BookOpen,
    title: "MANUAL COMPLETO DO CHÁ JAPONÊS",
    desc: "E-book PDF com a fórmula exata, métodos de preparo e onde comprar.",
  },
  {
    icon: PlayCircle,
    title: "VÍDEO-AULA EXCLUSIVA",
    desc: "Dr. Yano mostra na prática o preparo tradicional japonês.",
  },
  {
    icon: FileText,
    title: "DIÁRIO DE CONTROLE GLICÊMICO",
    desc: "PDF Editável para acompanhar sua evolução diária.",
  },
  {
    icon: CalendarDays,
    title: "PROTOCOLO DE 90 DIAS",
    desc: "Cronograma completo com 4 fases de tratamento.",
  },
];

const bonusItems = [
  "Áudio de Meditação Guiada Anti-Estresse (MP3)",
  "Checklist Visual de Sintomas da Diabetes (PDF)",
  "Guia Ilustrado de Exercícios para Diabéticos (PDF)",
  "Tabela de Índice Glicêmico de 200 Alimentos (PDF)",
  'Vídeo "Como Conversar com seu Médico sobre o Protocolo"',
];

export const Offer = () => {
  return (
    <section
      id="offer"
      className="mb-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
    >
      <h3 className="text-3xl font-extrabold text-center mb-6">
        Como Acessar o Protocolo Digital do Chá Japonês
      </h3>
      <p className="text-lg text-center mb-8">
        Devido à complexidade da pesquisa e para garantir a distribuição correta
        do material, o Dr. Yano compilou todo o conhecimento em um pacote
        digital completo, disponível para o público.
      </p>

      <Card className="bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            O Material Digital Inclui:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          {offerItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <item.icon className="text-blue-600 dark:text-blue-400 mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <span className="font-bold">{item.title}:</span> {item.desc}
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-xl text-center mb-4 flex items-center justify-center gap-2">
              <Gift className="h-6 w-6" /> Materiais de Apoio Adicionais:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {bonusItems.map((bonus, index) => (
                <li key={index}>{bonus}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-center my-8">
        <p className="text-lg">
          Para cobrir os custos de pesquisa, manutenção da plataforma e
          distribuição digital, o acesso ao protocolo completo é disponibilizado
          por uma taxa única de:
        </p>
        <p className="text-4xl font-extrabold text-gray-800 dark:text-white my-2">
          R$ 29,90
        </p>
        <p className="font-semibold text-gray-600 dark:text-gray-300">
          Pagamento único via PIX com acesso vitalício ao material.
        </p>
      </div>

      <Button
        size="lg"
        variant="outline"
        className="w-full h-14 text-xl font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
      >
        Acessar o Protocolo Digital
      </Button>
    </section>
  );
};