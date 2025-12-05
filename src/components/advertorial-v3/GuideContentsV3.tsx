"use client";

import { BookOpen, Video, FileText, Calendar, ClipboardList } from "lucide-react";

const productItems = [
  { icon: BookOpen, title: "Manual Digital" },
  { icon: Video, title: "Vídeo Passo a Passo" },
  { icon: FileText, title: "Guia Alimentar Complementar" },
  { icon: ClipboardList, title: "Diário de Acompanhamento" },
  { icon: Calendar, title: "Plano Organizacional de 90 Dias" },
];

export const GuideContentsV3 = () => {
  return (
    <section className="my-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h2 className="text-3xl font-bold mb-6 font-sans text-center">
        📘 O que os leitores encontram no guia
      </h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {productItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <item.icon className="h-8 w-8 text-blue-500 flex-shrink-0" />
            <p className="font-semibold text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-lg">
        Todo o conteúdo foi estruturado para ser simples, prático e acessível,
        mesmo para quem nunca teve contato com práticas japonesas.
      </p>
    </section>
  );
};