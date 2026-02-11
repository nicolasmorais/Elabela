import { defaultDbData } from './advertorial-types';

/**
 * Adaptador para Cloudflare D1
 */
export async function getDb() {
  // Tenta pegar do process.env (injetado pelo next-on-pages)
  const d1 = (process.env as any).DB;

  if (!d1) {
    // Se falhar, tenta lançar um erro claro para debug
    console.error("Binding 'DB' não encontrado no ambiente.");
    throw new Error("D1_BINDING_MISSING");
  }

  return {
    query: async (sql: string, params: any[] = []) => {
      // Converte sintaxe Postgres ($1) para SQLite (?)
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

export async function ensureTablesExist(client: any): Promise<void> {
    await client.query(`CREATE TABLE IF NOT EXISTS routes (path TEXT PRIMARY KEY, name TEXT NOT NULL, content_id TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS page_views (id TEXT PRIMARY KEY, content_id TEXT NOT NULL, path TEXT NOT NULL, timestamp TEXT DEFAULT CURRENT_TIMESTAMP, country TEXT, region_name TEXT);`);
    await client.query(`CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS custom_advertorials (id TEXT PRIMARY KEY, name TEXT NOT NULL, data TEXT NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS visits (id TEXT PRIMARY KEY, visitor_id TEXT NOT NULL, ip TEXT, city TEXT, region TEXT, country TEXT, latitude REAL, longitude REAL, device_type TEXT, os TEXT, browser TEXT, user_agent TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);
    
    const configs = [
        { key: 'approvalPageContent', value: defaultDbData.approvalPageContent },
        { key: 'pixelConfig', value: defaultDbData.pixelConfig },
        { key: 'auth', value: defaultDbData.auth },
    ];

    for (const cfg of configs) {
        try {
            const check = await client.query('SELECT COUNT(*) as count FROM settings WHERE key = ?', [cfg.key]);
            if (check.rows[0].count === 0) {
                await client.query('INSERT INTO settings (key, value) VALUES (?, ?)', [cfg.key, JSON.stringify(cfg.value)]);
            }
        } catch (e) {}
    }
}

export function isUsingPostgres(): boolean { return false; }