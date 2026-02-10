import type { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '@/lib/database';
import { v4 as uuidv4 } from 'uuid';

interface ExampleItem {
    id: string;
    name: string;
    createdAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const client = await getDb();

    await client.query(`
        CREATE TABLE IF NOT EXISTS examples (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `);

    if (req.method === 'GET') {
      const result = await client.query('SELECT id, name, created_at as "createdAt" FROM examples ORDER BY created_at DESC');
      res.status(200).json(result.rows);
      return;
    } else if (req.method === 'POST') {
      const { name } = req.body as { name: string };
      if (!name) {
        res.status(400).json({ message: 'O nome é obrigatório' });
        return;
      }

      const newId = uuidv4();
      const createdAt = new Date().toISOString();

      await client.query(
        'INSERT INTO examples (id, name, created_at) VALUES ($1, $2, $3)',
        [newId, name, createdAt]
      );

      res.status(201).json({ id: newId, name, createdAt });
      return;
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
      return;
    }
  } catch (error: any) {
    console.error('Database operation failed:', error.message || error);
    res.status(500).json({ message: 'Erro interno do servidor', error: error.message || 'Unknown error' });
    return;
  }
}