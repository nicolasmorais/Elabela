import { getDb } from '@/lib/database';
import { notFound, redirect } from 'next/navigation';
import { Client } from 'pg';
import { validate as isUUID } from 'uuid';

import { V1Page } from '@/components/page-versions/V1Page';
import { V2Page } from '@/components/page-versions/V2Page';
import { V3Page } from '@/components/page-versions/V3Page';
import { MenopausePage } from '@/components/page-versions/MenopausePage';
import { JointPainPage } from '@/components/page-versions/JointPainPage';
import { HairCarePage } from '@/components/page-versions/HairCarePage'; // NEW
import APPage from '@/components/page-versions/APPage';
import CustomAdvertorialPage from '@/components/page-versions/CustomAdvertorialPage';

const STATIC_PAGE_IDS = ['v1', 'v2', 'v3', 'ap', 'menopausa', 'dor-zero', 'cavalo-de-raca'];

function ContentSwitcher({ contentId }: { contentId: string }) {
  try {
    switch (contentId) {
      case 'v1': return <V1Page />;
      case 'v2': return <V2Page />;
      case 'v3': return <V3Page />;
      case 'ap': return <APPage />;
      case 'menopausa': return <MenopausePage />;
      case 'dor-zero': return <JointPainPage />;
      case 'cavalo-de-raca': return <HairCarePage />; // NEW
      default: return <CustomAdvertorialPage advertorialId={contentId} />;
    }
  } catch (error) {
    return (
      <div className="bg-white text-gray-800 p-8">
        <h1 className="text-2xl font-bold text-red-600">Erro ao carregar o conteúdo</h1>
        <p>ID: {contentId}</p>
      </div>
    );
  }
}

interface DynamicPageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    
    // Página inicial padrão (V1)
    if (!slug || slug.length === 0) {
      return <V1Page />;
    }
    
    const slugKey = slug.join('/');
    const path = `/${slugKey}`;

    // Tenta conectar ao banco
    let client: Client;
    try {
        client = await getDb();
    } catch (dbError) {
        console.error("Erro de conexão com o banco:", dbError);
        if (STATIC_PAGE_IDS.includes(slugKey)) return <ContentSwitcher contentId={slugKey} />;
        throw new Error("Banco de dados inacessível");
    }

    let contentId: string | null = null;

    // 1. Auto Routes
    const autoRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
    if (autoRoutesResult.rows.length > 0) {
      const autoRoutes = autoRoutesResult.rows[0].value;
      if (autoRoutes[slugKey]) contentId = autoRoutes[slugKey];
    }

    // 2. Estáticas
    if (!contentId && STATIC_PAGE_IDS.includes(slugKey)) contentId = slugKey;

    // 3. Tabela de Rotas
    if (!contentId) {
      const routeResult = await client.query('SELECT content_id as "contentId" FROM routes WHERE path = $1', [path]);
      if (routeResult.rows[0]) contentId = routeResult.rows[0].contentId;
    }

    // 4. UUID
    if (!contentId && isUUID(slugKey)) contentId = slugKey;

    if (!contentId) return notFound();

    return <ContentSwitcher contentId={contentId} />;
  } catch (error) {
    console.error("Página Dinâmica: Erro fatal:", error);
    return <V1Page />;
  }
}