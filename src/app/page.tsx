import { DeactivatedPage } from '@/components/page-versions/DeactivatedPage';
import { getDb } from '@/lib/database';
import { V1Page } from '@/components/page-versions/V1Page';
import { PixelInjector } from '@/components/tracking/PixelInjector';

export const runtime = 'edge';

export default async function RootPage() {
  let contentId: string | null = null;

  try {
    const client = await getDb();
    const routeResult = await client.query('SELECT content_id as "contentId" FROM routes WHERE path = $1', ['/']);
    if (routeResult.rows.length > 0) {
      contentId = routeResult.rows[0].contentId;
    }
  } catch (e) {
    console.error("Erro ao buscar rota raiz no D1:", e);
  }

  // Se não houver configuração no banco, mostra a página de desativado ou uma padrão
  if (!contentId) {
    return <DeactivatedPage />;
  }

  const pixelScripts = await PixelInjector({ forcePageId: contentId });

  return (
    <>
      {pixelScripts && <div dangerouslySetInnerHTML={{ __html: pixelScripts.toString() }} className="hidden" />}
      <V1Page />
    </>
  );
}