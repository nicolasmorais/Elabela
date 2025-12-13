import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { DbSchema, defaultDbData } from './advertorial-types';
import { Client } from 'pg'; // Importando Client

// Esta classe simula a interface do lowdb (db.data) para que o código do Next.js
// possa ser migrado gradualmente.
class PgDbSimulator {
    private client: Client;
    
    constructor(client: Client) {
        this.client = client;
    }
    
    // Adiciona o getter 'data' que retorna 'this' para compatibilidade com db.data.prop
    get data(): PgDbSimulator {
        return this;
    }
    
    // --- Implementação de Leitura (GET) ---
    
    // Nota: A implementação completa de todas as propriedades (routes, customAdvertorials, etc.)
    // deve ser feita aqui, mas por enquanto, retornamos os defaults para evitar quebras.
    
    get examples(): DbSchema['examples'] {
        // Em um ambiente real, você faria uma busca assíncrona aqui,
        // mas como o lowdb é síncrono, precisamos de um wrapper.
        // Por enquanto, retornamos um array vazio para evitar erros de acesso.
        console.warn("Acesso síncrono a 'examples' no PgDbSimulator. Use funções assíncronas para leitura real.");
        return defaultDbData.examples;
    }
    
    get routes(): DbSchema['routes'] {
        // Em um ambiente real, você faria uma busca assíncrona aqui,
        // mas como o lowdb é síncrono, precisamos de um wrapper.
        // Por enquanto, retornamos um array vazio para evitar erros de acesso.
        console.warn("Acesso síncrono a 'routes' no PgDbSimulator. Use funções assíncronas para leitura real.");
        return defaultDbData.routes; 
    }
    
    get approvalPageContent(): DbSchema['approvalPageContent'] {
        console.warn("Acesso síncrono a 'approvalPageContent' no PgDbSimulator.");
        return defaultDbData.approvalPageContent;
    }
    
    get customAdvertorials(): DbSchema['customAdvertorials'] {
        console.warn("Acesso síncrono a 'customAdvertorials' no PgDbSimulator.");
        return defaultDbData.customAdvertorials;
    }
    
    get auth(): DbSchema['auth'] {
        console.warn("Acesso síncrono a 'auth' no PgDbSimulator.");
        return defaultDbData.auth;
    }
    
    get pixelConfig(): DbSchema['pixelConfig'] {
        console.warn("Acesso síncrono a 'pixelConfig' no PgDbSimulator.");
        return defaultDbData.pixelConfig;
    }
    
    get pageViews(): DbSchema['pageViews'] {
        console.warn("Acesso síncrono a 'pageViews' no PgDbSimulator.");
        return defaultDbData.pageViews;
    }
    
    // --- Implementação de Escrita (POST/PUT/DELETE) ---
    
    // O método write() é mantido para compatibilidade, mas deve ser evitado.
    async write(): Promise<void> {
        console.warn("Chamada a 'db.write()' no PgDbSimulator. Esta função não faz nada no modo PostgreSQL. Use funções de persistência específicas.");
    }
}

// Configuração de conexão baseada na variável de ambiente DATABASE_URL
const connectionString = process.env.DATABASE_URL;

let db: Low<DbSchema> | PgDbSimulator;
let isPostgres = false;

/**
 * Inicializa e retorna a instância do banco de dados (lowdb ou PostgreSQL)
 */
export async function getDb(): Promise<Low<DbSchema> | PgDbSimulator> {
    if (db) {
        return db;
    }

    if (connectionString) {
        // Modo PostgreSQL
        try {
            // Importação dinâmica para evitar erro de dependência se pg não for usado
            const { Client: PgClient } = await import('pg');
            const client = new PgClient({ connectionString });
            await client.connect();
            console.log("Conexão PostgreSQL estabelecida com sucesso.");
            
            // Criar tabelas se não existirem
            await ensureTablesExist(client);
            
            db = new PgDbSimulator(client);
            isPostgres = true;
            return db;
        } catch (error) {
            console.error("Falha ao conectar ao PostgreSQL, fallback para lowdb:", error);
            // Fallback para lowdb
        }
    }

    // Modo lowdb (JSON)
    const adapter = new JSONFile<DbSchema>(getDatabasePath());
    db = new Low(adapter, defaultDbData);
    await db.read();
    await (db as Low<DbSchema>).write(); // Casting para garantir que write exista no Low
    console.log("Banco de dados lowdb inicializado.");
    
    return db;
}

/**
 * Garante que as tabelas necessárias existam no PostgreSQL
 */
async function ensureTablesExist(client: Client): Promise<void> {
    // Tabela para rotas
    await client.query(`
        CREATE TABLE IF NOT EXISTS routes (
            path VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            content_id VARCHAR(255) NOT NULL
        );
    `);
    
    // Tabela para visualizações de página
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
    
    // Tabela para configurações
    await client.query(`
        CREATE TABLE IF NOT EXISTS settings (
            key VARCHAR(255) PRIMARY KEY,
            value JSONB NOT NULL
        );
    `);
    
    // Tabela para Advertoriais Dinâmicos
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
 * Retorna o caminho para o arquivo do banco de dados
 */
function getDatabasePath(): string {
    const databaseDir = process.env.DATABASE_DIR || './data';
    return `${databaseDir}/db.json`;
}

/**
 * Verifica se está usando PostgreSQL
 */
export function isUsingPostgres(): boolean {
    return isPostgres;
}

// Exporta o PgDbSimulator para uso em outros arquivos se necessário
export { PgDbSimulator };