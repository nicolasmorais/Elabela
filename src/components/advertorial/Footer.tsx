"use client";

export const Footer = () => {
  return (
    <footer className="text-center text-xs text-gray-500 dark:text-gray-400 pt-8 border-t mt-12 space-y-4">
      <div className="flex justify-center gap-4">
        <a href="#" className="hover:underline">
          Política de privacidade
        </a>
        <a href="#" className="hover:underline">
          Política de reembolso
        </a>
        <a href="#" className="hover:underline">
          Termos de serviço
        </a>
      </div>
      <p className="max-w-3xl mx-auto">
        <strong>AVISO LEGAL:</strong> Este produto não substitui o parecer
        médico profissional. Sempre consulte um profissional da saúde para tratar
        de assuntos relativos à saúde. Os resultados podem variar de pessoa para
        pessoa.
      </p>
    </footer>
  );
};