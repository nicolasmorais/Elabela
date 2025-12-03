"use client";

export const Header = () => {
  return (
    <header className="text-center py-12 border-b mb-8">
      <p className="text-sm text-red-600 font-semibold uppercase tracking-wider">
        Saúde & Bem-Estar
      </p>
      <h1 className="mt-4 text-3xl md:text-5xl text-gray-900 dark:text-white leading-tight font-merriweather font-black">
        Dr. Roberto Yano afirma: 7 em cada 10 diabéticos tipo 2 estão sendo
        tratados de forma errada no Brasil.
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
        "A Metformina está sufocando o seu pâncreas".
      </h2>
    </header>
  );
};