import { getDb } from '@/lib/database';
import { notFound } from 'next/navigation';
import { Client } from 'pg';
import { validate as isUUID } from 'uuid';

import { V1Page } from '@/components/page-versions/V1Page';
import { V2Page } from '@/components/page-versions/V2Page';
import { V3Page } from '@/components/page-versions/V3Page';
import { MenopausePage } from '@/components/page-versions/MenopausePage';
import { JointPainPage } from '@/components/page-versions/JointPainPage';
import { HairCarePage } from '@/components/page-versions/HairCarePage';
import { AntiHairLossPage } from '@/components/page-versions/AntiHairLossPage';
import { AntiHairLossPageV2 } from '@/components/page-versions/AntiHairLossPageV2';
import { AntiHairLossPageV3 } from '@/components/page-versions/AntiHairLossPageV3';
import { KcrPromoPage } from '@/components/page-versions/KcrPromoPage';
import { ClareadorPage } from '@/components/page-versions/ClareadorPage';
import { ClareadorPageV2 } from '@/components/page-versions/ClareadorPageV2';
import { AdvKcrPage } from '@/components/page-versions/AdvKcrPage';
import { KcrAdvV3Page } from '@/components/page-versions/KcrAdvV3Page'; // NEW
import { DeactivatedPage } from '@/components/page-versions/DeactivatedPage';
import APPage from '@/components/page-versions/APPage';
import CustomAdvertorialPage from '@/components/page-versions/CustomAdvertorialPage';
import { PixelInjector } from '@/components/tracking/PixelInjector';
import { BackRedirectScript } from '@/components/tracking/BackRedirectScript';

const STATIC_PAGE_IDS = ['v1', 'v2', 'v3', 'ap', 'menopausa', 'dor-zero', 'cavalo-de-raca', 'antiqueda', 'antiqueda2', 'antiqueda3', 'kcrpromo', 'clareador', 'novoclareador', 'advkcr', 'adv-kcr-v3'];

async function fetchBackRedirect(db: Client, currentSlug: string) {
    try {
        const individualRes = await db.query('SELECT value FROM settings WHERE key = $1', ['pageBackRedirects']);
        const individualMap = individualRes.rows.length > 0 ? individualRes.rows[0].value : {};
        if (individualMap && individualMap[currentSlug]) return { url: individualMap[currentSlug], enabled: true };
        const globalRes = await db.query('SELECT value FROM settings WHERE key = $1', ['backRedirectConfig']);
        return globalRes.rows.length > 0 ? globalRes.rows[0].value : { url: '', enabled: false };
    } catch (e) { return { url: '', enabled: false }; }
}

async function ContentSwitcher({ contentId, originalSlug }: { contentId: string, originalSlug: string }) {
  const db = await getDb();
  const pixelScripts = await PixelInjector({ forcePageId: contentId });
  const backRedirect = await fetchBackRedirect(db, originalSlug);

  return (
    <>
      {pixelScripts && <div dangerouslySetInnerHTML={{ __html: pixelScripts.toString() }} className="hidden" />}
      {backRedirect.enabled && backRedirect.url && <BackRedirectScript url={backRedirect.url} enabled={backRedirect.enabled} />}
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
            case 'antiqueda2': return <AntiHairLossPageV2 />;
            case 'antiqueda3': return <AntiHairLossPageV3 />;
            case 'kcrpromo': return <KcrPromoPage />;
            case 'clareador': return <ClareadorPage />;
            case 'novoclareador': return <ClareadorPageV2 />;
            case 'advkcr': return <AdvKcrPage />;
            case 'adv-kcr-v3': return <KcrAdvV3Page />; // NEW
            default: return <CustomAdvertorialPage advertorialId={contentId} />;
          }
      })()}
    </>
  );
}

interface DynamicPageProps { params: Promise<{ slug?: string[] }>; }

export default async function DynamicPage({ params }: DynamicPageProps) {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    if (!slug || slug.length === 0) return <DeactivatedPage />;
    const slugKey = slug.join('/');
    const path = `/${slugKey}`;

    let client: Client;
    try { client = await getDb(); } catch (dbError) {
        if (STATIC_PAGE_IDS.includes(slugKey)) return <ContentSwitcher contentId={slugKey} originalSlug={slugKey} />;
        return notFound();
    }

    let contentId: string | null = null;
    try {
        const autoRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
        if (autoRoutesResult.rows.length > 0) {
            const autoRoutes = autoRoutesResult.rows[0].value;
            if (autoRoutes && autoRoutes[slugKey]) contentId = autoRoutes[slugKey];
        }
    } catch (e) {}

    if (!contentId) {
        try {
            const routeResult = await client.query('SELECT content_id as "contentId" FROM routes WHERE path = $1', [path]);
            if (routeResult.rows.length > 0) contentId = routeResult.rows[0].contentId;
        } catch (e) {}
    }

    if (!contentId && STATIC_PAGE_IDS.includes(slugKey)) contentId = slugKey;
    if (!contentId && isUUID(slugKey)) contentId = slugKey;
    if (!contentId) return notFound();

    return <ContentSwitcher contentId={contentId} originalSlug={slugKey} />;
  } catch (error) { return <DeactivatedPage />; }
}