import { getDb } from '@/lib/database';
import { GlobalPixelConfig, PagePixelConfig } from '@/lib/advertorial-types';

interface PixelInjectorProps {
    pagePixels?: PagePixelConfig;
    forcePageId?: string;
}

async function fetchTaboolaCentralConfig(client: any) {
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['taboolaConfig']);
    return result.rows.length > 0 ? JSON.parse(result.rows[0].value) : { globalId: '', pageOverrides: {} };
}

async function fetchGlobalPixelConfig(client: any): Promise<GlobalPixelConfig> {
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['pixelConfig']);
    if (result.rows.length === 0) {
        return { metaPixelId: '', taboolaPixelId: '', globalScripts: '' };
    }
    return JSON.parse(result.rows[0].value) as GlobalPixelConfig;
}

export async function PixelInjector({ pagePixels, forcePageId }: PixelInjectorProps): Promise<React.ReactNode> {
  const client = await getDb();
  const globalConfig: GlobalPixelConfig = await fetchGlobalPixelConfig(client);
  const taboolaCentral = await fetchTaboolaCentralConfig(client);
  
  let taboolaId = '';
  if (forcePageId && taboolaCentral.pageOverrides[forcePageId]) {
    taboolaId = taboolaCentral.pageOverrides[forcePageId];
  } else if (pagePixels?.taboolaPixelId) {
    taboolaId = pagePixels.taboolaPixelId;
  } else {
    taboolaId = taboolaCentral.globalId;
  }

  let metaPixelId = pagePixels?.metaPixelId || '';
  let customScripts = pagePixels?.customScripts || '';

  if (pagePixels?.useGlobalPixels !== false) {
    metaPixelId = metaPixelId || globalConfig.metaPixelId;
    customScripts = customScripts || globalConfig.globalScripts;
  }

  const metaScript = metaPixelId ? `
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${metaPixelId}');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1"/></noscript>
  ` : '';

  const taboolaScript = taboolaId ? `
    <script type="text/javascript">
      window._tfa = window._tfa || [];
      window._tfa.push({notify: 'event', name: 'page_view', id: '${taboolaId}'});
      !function (t, f, a, x) {
        if (!document.getElementById(x)) {
          t.async = 1;t.src = a;t.id = x;f.parentNode.insertBefore(t, f);
        }
      }(document.createElement('script'),
      document.getElementsByTagName('script')[0],
      '//cdn.taboola.com/libtrc/unip/${taboolaId}/tfa.js',
      'tb_tfa_script');
    </script>
  ` : '';

  const combinedScripts = metaScript + taboolaScript + customScripts;
  if (!combinedScripts) return null;

  return combinedScripts;
}