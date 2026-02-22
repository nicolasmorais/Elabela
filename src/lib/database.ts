import { Client } from 'pg';

// Interface para as páginas de vendas
export interface SalesPage {
  id: string;
  name: string;
  slug: string;
  priceCard: string;
  pricePix: string;
  installmentText: string;
  buttonText: string;
  checkoutUrl: string;
  backRedirectUrl?: string; // Black Redirect
  description?: string;
  updatedAt: string;
}

let client: Client | null = null;

/**
 * Retorna uma instância conectada do cliente PostgreSQL.
 * Utiliza o singleton pattern para evitar múltiplas conexões.
 */
export async function getDb(): Promise<Client> {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL não configurada nas variáveis de ambiente.");
  }

  // Se já existe um cliente e ele está conectado, retorna ele
  if (client) {
    return client;
  }

  try {
    client = new Client({
      connectionString: connectionString,
      // Desabilitamos SSL por padrão para compatibilidade com Dokploy local
      ssl: false,
    });

    await client.connect();
    console.log("Conexão com PostgreSQL estabelecida com sucesso.");
    
    // Garante que as tabelas básicas existam
    await client.query(`
      CREATE TABLE IF NOT EXISTS routes (
        path VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        content_id VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS custom_advertorials (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        data JSONB NOT NULL
      );
      CREATE TABLE IF NOT EXISTS settings (
        key VARCHAR(255) PRIMARY KEY,
        value JSONB NOT NULL
      );
      CREATE TABLE IF NOT EXISTS page_views (
        id UUID PRIMARY KEY,
        content_id VARCHAR(255) NOT NULL,
        path VARCHAR(255) NOT NULL,
        timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        country VARCHAR(100),
        region_name VARCHAR(100)
      );
    `);

    return client;
  } catch (error) {
    console.error("Falha ao conectar ao banco de dados:", error);
    client = null;
    throw error;
  }
}