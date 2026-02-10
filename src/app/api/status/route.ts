import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export const runtime = 'edge';

export async function GET(): Promise<NextResponse> {
  const defaultResponse = {
    status: 'ERROR',
    database: 'DOWN',
    authStatus: 'Padrão/Não Configurado',
    metrics: {
      routes: 0,
      advertorials: 0,
      pageViews: 0,
      lastPageView: 'N/A',
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const client = await getDb();
    if (!client) return NextResponse.json(defaultResponse);

    const response = { ...defaultResponse, status: 'OK', database: 'OK' };

    try {
      const routeResult = await client.query('SELECT COUNT(*) as count FROM routes');
      response.metrics.routes = Number(routeResult.rows[0]?.count || 0);
      
      const advertorialResult = await client.query('SELECT COUNT(*) as count FROM custom_advertorials');
      response.metrics.advertorials = Number(advertorialResult.rows[0]?.count || 0);
      
      const pageViewResult = await client.query('SELECT COUNT(*) as count FROM page_views');
      response.metrics.pageViews = Number(pageViewResult.rows[0]?.count || 0);
      
      if (response.metrics.pageViews > 0) {
        const lastViewResult = await client.query('SELECT timestamp FROM page_views ORDER BY timestamp DESC LIMIT 1');
        if (lastViewResult.rows.length > 0) {
          response.metrics.lastPageView = lastViewResult.rows[0].timestamp;
        }
      }
      
      const authResult = await client.query('SELECT value FROM settings WHERE key = $1', ['auth']);
      if (authResult.rows.length > 0) {
        const authData = JSON.parse(authResult.rows[0].value);
        if (authData && typeof authData === 'object') {
          response.authStatus = authData.passwordHash ? 'Configurado' : 'Padrão/Não Configurado';
        }
      }
    } catch (innerError) {
      console.error('Erro ao buscar métricas específicas:', innerError);
    }
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json({ 
      ...defaultResponse,
      message: 'Falha ao conectar ou ler o banco de dados.'
    }, { status: 500 });
  }
}