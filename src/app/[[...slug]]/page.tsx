import { getDb } from '@/lib/database';
import { notFound } from 'next/navigation';
import { Client } from 'pg';
import { validate as isUUID } from 'uuid';
import Head from 'next/head';

import { V1Page } from '@/components/page-versions/V1Page';
import { V2Page } from '@/components/page-versions/V2Page';
import { V3Page } from '@/components/page-versions/V3Page';
import { MenopausePage } from '@/components/page-versions/MenopausePage';
import { JointPainPage } from '@/components/page-versions/JointPainPage';
import { HairCarePage } from '@/components/page-versions/HairCarePage';
import { AntiHairLossPage } from '@/components/page-versions/AntiHairLossPage';
import { DeactivatedPage } from '@/components/page-versions/DeactivatedPage';
import APPage from '@/components/page-versions/APPage';
import CustomAdvertorialPage from '@/components/page-versions/CustomAdvertorialPage';
import { PixelInjector } from '@/components/tracking/PixelInjector';

const STATIC_PAGE_IDS = ['v1', 'v2', 'v3', 'ap', 'menopausa', 'dor-zero', 'cavalo-de-raca', 'antiqueda'];

async function ContentSwitcher({ contentId }: { contentId: string }) {
  // Injeta o Pixel centralizado para páginas estáticas também
  const pixelScripts = await PixelInjector({ forcePageId: contentId });

  return (
    <>
      {pixelScripts && <div dangerouslySetInnerHTML={{ __html: pixelScripts.toString() }} className="hidden" />}
      {(() => {
          switch (contentId) {
            case 'v1': return <V1Page />;
            case 'v2': return <V2Page />;
            case 'v3': return <V3Page />;
            case 'ap': return <APPage />;
            case 'menopausa': return <MenopausePage />;
            case 'dor-zero': return <JointPainPage />;
            case 'cavalo-de-raca': return <HairCarePage />;
            case 'antiqueda': return <AntiHairLossPage />;
            default: return <CustomAdvertorialPage advertorialId={contentId} />;
          }
      })()}
    </>
  );
}

interface DynamicPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    
    if (!slug || slug.length === 0) {
      return <DeactivatedPage />;
    }
    
    const slugKey = slug.join('/');
    const path = `/${slugKey}`;

    let client: Client;
    try {
        client = await getDb();
    } catch (dbError) {
        console.error("Erro de conexão com o banco na página dinâmica:", dbError);
        if (STATIC_PAGE_IDS.includes(slugKey)) return <ContentSwitcher contentId={slugKey} />;
        return notFound();
    }

    let contentId: string | null = null;

    try {
        const autoRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
        if (autoRoutesResult.rows.length > 0) {
            const autoRoutes = autoRoutesResult.rows[0].value;
            if (autoRoutes && autoRoutes[slugKey]) {
                contentId = autoRoutes[slugKey];
            }
        }
    } catch (e) {}

    if (!contentId) {
        try {
            const routeResult = await client.query('SELECT content_id as "contentId" FROM routes WHERE path = $1', [path]);
            if (routeResult.rows.length > 0) {
                contentId = routeResult.rows[0].contentId;
            }
        } catch (e) {}
    }

    if (!contentId && STATIC_PAGE_IDS.includes(slugKey)) {
        contentId = slugKey;
    }

    if (!contentId && isUUID(slugKey)) {
        contentId = slugKey;
    }

    if (!contentId) {
        return notFound();
    }

    return <ContentSwitcher contentId={contentId} />;
  } catch (error) {
    return <DeactivatedPage />;
  }
}