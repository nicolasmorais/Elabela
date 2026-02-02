import { DbSchema, defaultDbData } from './advertorial-types';
import { Client } from 'pg';

let client: Client | null = null;

export async function getDb(): Promise<Client> {
    const connectionString = process.env.DATABASE_URL;
    const dbConnectionString = connectionString || 'postgres://postgres:password@localhost:5432/postgres';

    if (client) {
        try {
            await client.query('SELECT 1');
            return client;
        } catch (error) {
            client = null;
        }
    }

    let retries = 5;
    while (retries > 0) {
        try {
            const { Client: PgClient } = await import('pg');
            client = new PgClient({ connectionString: dbConnectionString });
            await client.connect();
            await ensureTablesExist(client);
            return client;
        } catch (error: any) {
            retries--;
            if (retries > 0) await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
    throw new Error(`Não foi possível conectar ao banco de dados.`);
}

async function ensureTablesExist(client: Client): Promise<void> {
    await client.query(`CREATE TABLE IF NOT EXISTS routes (path VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL, content_id VARCHAR(255) NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS page_views (id UUID PRIMARY KEY, content_id VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, country VARCHAR(100), region_name VARCHAR(100));`);
    await client.query(`CREATE TABLE IF NOT EXISTS settings (key VARCHAR(255) PRIMARY KEY, value JSONB NOT NULL);`);
    await client.query(`CREATE TABLE IF NOT EXISTS custom_advertorials (id UUID PRIMARY KEY, name VARCHAR(255) NOT NULL, data JSONB NOT NULL);`);
    
    await insertDefaultData(client);
}

async function insertDefaultData(client: Client): Promise<void> {
    const configs = [
        { key: 'approvalPageContent', value: defaultDbData.approvalPageContent },
        { key: 'pixelConfig', value: defaultDbData.pixelConfig },
        { key: 'auth', value: defaultDbData.auth },
        // Nova configuração para a página de vendas
        { key: 'hairCareConfig', value: { priceCard: 'R$ 157,00', pricePix: '97,00', checkoutUrl: 'https://pay.oneconversion.pro/checkout' } },
    ];

    for (const cfg of configs) {
        const check = await client.query('SELECT COUNT(*) FROM settings WHERE key = $1', [cfg.key]);
        if (parseInt(check.rows[0].count) === 0) {
            await client.query('INSERT INTO settings (key, value) VALUES ($1, $2)', [cfg.key, JSON.stringify(cfg.value)]);
        }
    }
}