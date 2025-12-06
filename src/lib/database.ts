import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import fs from 'fs';

// Interface de exemplo para a estrutura de dados.
// Podemos expandir isso conforme necessário para o novo sistema.
interface Example {
  id: number;
  name: string;
  createdAt: string;
}

// O esquema do banco de dados agora contém apenas uma coleção de exemplos.
interface DbSchema {
  examples: Example[];
}

const DB_FILE_NAME = 'db.json';
const DB_DIR_PATH = process.env.DATABASE_DIR || './data';
const DB_FULL_PATH = path.resolve(process.cwd(), DB_DIR_PATH, DB_FILE_NAME);

let dbInstance: Low<DbSchema> | null = null;

// A função getDb agora inicializa um banco de dados com uma estrutura vazia.
export async function getDb(): Promise<Low<DbSchema>> {
  if (dbInstance) {
    // Se a instância já existe, verifica se os dados foram lidos.
    if (!dbInstance.data) {
      await dbInstance.read();
    }
    return dbInstance;
  }

  try {
    const dir = path.dirname(DB_FULL_PATH);
    // Garante que o diretório de dados exista.
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const adapter = new JSONFile<DbSchema>(DB_FULL_PATH);
    // Inicializa o Lowdb com um estado padrão mínimo.
    dbInstance = new Low<DbSchema>(adapter, { 
      examples: [],
    });

    await dbInstance.read();

    // Garante que os dados padrão sejam escritos se o arquivo estiver vazio.
    if (!dbInstance.data) {
      dbInstance.data = { examples: [] };
      await dbInstance.write();
    }

    console.log(`Database initialized/loaded from: ${DB_FULL_PATH}`);
    return dbInstance;
  } catch (error) {
    console.error('Failed to initialize Lowdb database:', error);
    throw error;
  }
}