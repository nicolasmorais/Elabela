import { Client, QueryResult } from 'pg';
import { RouteMapping } from './advertorial-types';

// Configuração de conexão baseada na variável de ambiente DATABASE_URL
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.warn("DATABASE_URL não está configurada. O aplicativo usará o lowdb (JSON) por padrão.");
}

let client: Client | null = null;

/**
 * Inicializa e conecta o cliente PostgreSQL.
 * @returns O cliente conectado.
 */
export async function getPgClient(): Promise<Client> {
    if (!connectionString) {
        throw new Error("DATABASE_URL não configurada. Não é possível conectar ao PostgreSQL.");
    }
    
    if (client) {
        return client;
    }

    client = new Client({ connectionString });
    
    try {
        await client.connect();
        console.log("Conexão PostgreSQL estabelecida com sucesso.");
        await ensureTablesExist(client);
        return client;
    } catch (error) {
        console.error("Falha ao conectar ou inicializar o PostgreSQL:", error);
        client = null; // Reseta o cliente em caso de falha
        throw error;
    }
}

/**
 * Garante que as tabelas necessárias existam.
 * Esta é uma migração básica.
 */
async function ensureTablesExist(client: Client): Promise<void> {
    // Tabela para rotas (RouteMapping)
    await client.query(`
        CREATE TABLE IF NOT EXISTS routes (
            path VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            content_id VARCHAR(255) NOT NULL
        );
    `);
    
    // Tabela para visualizações de página (PageViewEvent)
    await client.query(`
        CREATE TABLE IF NOT EXISTS page_views (
            id UUID PRIMARY KEY,
            content_id VARCHAR(255) NOT NULL,
            path VARCHAR(255) NOT NULL,
            timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            country VARCHAR(100),
            region_name VARCHAR(100)
        );
    `);
    
    // Tabela para configurações (usada para armazenar JSONs grandes como approvalPageContent, pixelConfig, auth)
    await client.query(`
        CREATE TABLE IF NOT EXISTS settings (
            key VARCHAR(255) PRIMARY KEY,
            value JSONB NOT NULL
        );
    `);
    
    // Tabela para Advertoriais Dinâmicos (CustomAdvertorials)
    await client.query(`
        CREATE TABLE IF NOT EXISTS custom_advertorials (
            id UUID PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            data JSONB NOT NULL
        );
    `);
    
    console.log("Tabelas do PostgreSQL verificadas/criadas.");
}

/**
 * Função de exemplo para buscar todas as rotas.
 */
export async function getPgRoutes(): Promise<RouteMapping[]> {
    const client = await getPgClient();
    const result: QueryResult = await client.query('SELECT path, name, content_id FROM routes');
    
    return result.rows.map((row: any) => ({ // Explicitly typing row as any since QueryResult row type is generic
        path: row.path,
        name: row.name,
        contentId: row.content_id,
    }));
}

// Adicione outras funções CRUD aqui conforme a migração avança...