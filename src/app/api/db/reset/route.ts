import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export async function POST() {
  try {
    const client = await getDb();

    await client.query('DROP TABLE IF EXISTS routes');
    await client.query('DROP TABLE IF EXISTS page_views');
    await client.query('DROP TABLE IF EXISTS settings');
    await client.query('DROP TABLE IF EXISTS custom_advertorials');
    await client.query('DROP TABLE IF EXISTS visits');
    await client.query('DROP TABLE IF EXISTS examples');

    await client.query(`CREATE TABLE IF NOT EXISTS routes (path TEXT PRIMARY KEY, name TEXT NOT NULL, content_id TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS page_views (id TEXT PRIMARY KEY, content_id TEXT NOT NULL, path TEXT NOT NULL, timestamp TEXT DEFAULT CURRENT_TIMESTAMP, country TEXT, region_name TEXT);`);
    await client.query(`CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS custom_advertorials (id TEXT PRIMARY KEY, name TEXT NOT NULL, data TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS visits (id TEXT PRIMARY KEY, visitor_id TEXT NOT NULL, ip TEXT, city TEXT, region TEXT, country TEXT, latitude REAL, longitude REAL, device_type TEXT, os TEXT, browser TEXT, user_agent TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);

    const defaultRoutes = [
        { path: '/', name: 'Página Principal', content_id: 'v1' },
        { path: '/v1', name: 'Rota do Advertorial V1', content_id: 'v1' },
        { path: '/v2', name: 'Rota do Advertorial V2', content_id: 'v2' },
        { path: '/v3', name: 'Rota do Advertorial V3', content_id: 'v3' },
        { path: '/aprovado', name: 'Página de Aprovação (Preview)', content_id: 'ap' },
    ];

    for (const route of defaultRoutes) {
        await client.query(
            'INSERT OR IGNORE INTO routes (path, name, content_id) VALUES ($1, $2, $3)',
            [route.path, route.name, route.content_id]
        );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Banco de dados D1 limpo e reinicializado com sucesso!' 
    });
  } catch (error: any) {
    console.error('Reset failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}