"use client";

import { Lock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-center text-xs text-gray-500 dark:text-gray-400 pt-8 border-t mt-12">
      <p className="mb-4 flex items-center justify-center gap-2">
        <Lock className="h-4 w-4" />
        <span>Plataforma de Pagamento Segura. Seus dados estão protegidos.</span>
      </p>
      <p className="max-w-3xl mx-auto">
        <strong>AVISO LEGAL:</strong> As informações apresentadas neste artigo
        são de natureza informativa e baseadas nas pesquisas do Dr. Roberto
        Yano. Este material não substitui o diagnóstico, tratamento ou
        aconselhamento de um profissional de saúde qualificado. Nunca desconsidere
        o conselho médico ou demore a procurá-lo por causa de algo que você leu
        aqui. Os resultados podem variar de pessoa para pessoa.
      </p>
    </footer>
  );
};