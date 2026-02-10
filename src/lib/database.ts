import { defaultDbData } from './advertorial-types';

/**
 * Adaptador para Cloudflare D1
 * O D1 é acessado via process.env.DB (vinculado no wrangler.toml)
 */
export async function getDb() {
  // Em ambientes Cloudflare Pages/Workers, o binding DB fica disponível no process.env
  // (Ou via getRequestContext no next-on-pages)
  const d1 = (process.env as any).DB;

  if (!d1) {
    throw new Error(
      "Banco de dados D1 não encontrado. Certifique-se de que:\n" +
      "1. Você criou o banco no painel da Cloudflare.\n" +
      "2. O binding no wrangler.toml está como 'DB'.\n" +
      "3. Você está rodando o deploy na Cloudflare."
    );
  }

  // Retornamos um objeto que imita a interface do 'pg' (PostgreSQL)
  // para não quebrar o resto do seu código.
  return {
    query: async (sql: string, params: any[] = []) => {
      // Converte a sintaxe do Postgres ($1, $2) para a do SQLite (?)
      const normalizedSql = sql.replace(/\$(\d+)/g, '?');
      
      try {
        const stmt = d1.prepare(normalizedSql);
        const result = params.length > 0 
          ? await stmt.bind(...params).all() 
          : await stmt.all();

        return {
          rows: result.results || [],
          rowCount: result.meta?.changes || 0
        };
      } catch (error: any) {
        console.error("Erro na consulta D1:", error.message);
        throw error;
      }
    }
  };
}

/**
 * Esta função agora cria as tabelas no formato SQLite (D1)
 */
export async function ensureTablesExist(client: any): Promise<void> {
    // No SQLite usamos TEXT para UUIDs e JSON
    await client.query(`CREATE TABLE IF NOT EXISTS routes (path TEXT PRIMARY KEY, name TEXT NOT NULL, content_id TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS page_views (id TEXT PRIMARY KEY, content_id TEXT NOT NULL, path TEXT NOT NULL, timestamp TEXT DEFAULT CURRENT_TIMESTAMP, country TEXT, region_name TEXT);`);
    await client.query(`CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS custom_advertorials (id TEXT PRIMARY KEY, name TEXT NOT NULL, data TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS visits (id TEXT PRIMARY KEY, visitor_id TEXT NOT NULL, ip TEXT, city TEXT, region TEXT, country TEXT, latitude REAL, longitude REAL, device_type TEXT, os TEXT, browser TEXT, user_agent TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);
    
    // Inserção de dados iniciais adaptada para SQLite
    const configs = [
        { key: 'approvalPageContent', value: defaultDbData.approvalPageContent },
        { key: 'pixelConfig', value: defaultDbData.pixelConfig },
        { key: 'auth', value: defaultDbData.auth },
    ];

    for (const cfg of configs) {
        const check = await client.query('SELECT COUNT(*) as count FROM settings WHERE key = $1', [cfg.key]);
        if (check.rows[0].count === 0) {
            await client.query('INSERT INTO settings (key, value) VALUES ($1, $2)', [cfg.key, JSON.stringify(cfg.value)]);
        }
    }
    
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
}

export function isUsingPostgres(): boolean { return false; }