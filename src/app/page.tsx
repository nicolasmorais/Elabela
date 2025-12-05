import { getDb } from '@/lib/database';

// Importando os componentes das outras páginas
import V2Page from '@/app/v2/page';
import V3Page from '@/app/v3/page';

// Componentes da V1 (padrão)
import { Header } from "@/components/advertorial/Header";
import { Problem } from "@/components/advertorial/Problem";
import { CaseStudy } from "@/components/advertorial/CaseStudy";
import { Solution } from "@/components/advertorial/Solution";
import { Offer } from "@/components/advertorial/Offer";
import { Pricing } from "@/components/advertorial/Pricing";
import { Testimonials } from "@/components/advertorial/Testimonials";
import { Footer } from "@/components/advertorial/Footer";

// Componente para a V1
function V1Page() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="bg-gray-100 dark:bg-gray-800 text-center py-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Advetorial
        </p>
      </div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-merriweather">
        <Problem />
        <CaseStudy />
        <Solution />
        <Offer />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default async function Home() {
  const db = await getDb();
  const mainPage = db.data.settings?.mainPage || '/';

  // Em vez de redirecionar, vamos renderizar o componente da página escolhida
  switch (mainPage) {
    case '/v2':
      return <V2Page />;
    case '/v3':
      return <V3Page />;
    default: // O padrão é '/' que corresponde à V1
      return <V1Page />;
  }
}