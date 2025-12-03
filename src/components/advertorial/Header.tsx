"use client";

export const Header = () => {
  return (
    <header className="text-center py-12 border-b mb-8">
      <p className="text-sm text-red-600 font-semibold uppercase tracking-wider">
        Saúde & Bem-Estar
      </p>
      <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Pesquisa revela: 7 em cada 10 diabéticos tipo 2 no Brasil podem estar
        seguindo tratamento ultrapassado.
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Dr. Roberto Yano, especialista em medicina integrativa, alerta: "A
        Metformina pode estar sufocando o seu pâncreas".
      </h2>
      <p className="mt-6 text-md text-gray-500 dark:text-gray-400">
        Publicado em: {new Date().toLocaleDateString("pt-BR")}
      </p>
    </header>
  );
};