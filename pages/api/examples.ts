import type { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '@/lib/database';
import { DbSchema } from '@/lib/advertorial-types';

// Definindo o tipo para um item de exemplo
interface ExampleItem {
    id: number;
    name: string;
    createdAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const db = await getDb(); // Get the Lowdb instance

    if (req.method === 'GET') {
      // Handle GET requests to fetch examples
      const examples: ExampleItem[] = db.data?.examples || [];
      res.status(200).json(examples);
      return;
    } else if (req.method === 'POST') {
      // Handle POST requests to create a new example
      const { name } = req.body as { name: string };
      if (!name) {
        res.status(400).json({ message: 'O nome é obrigatório' });
        return;
      }

      // Generate a simple ID (lowdb doesn't auto-increment like SQL dbs)
      const examples: ExampleItem[] = db.data?.examples || [];
      const newId = examples.length > 0 ? Math.max(...examples.map((e: ExampleItem) => e.id)) + 1 : 1;

      const newExample: ExampleItem = {
        id: newId,
        name,
        createdAt: new Date().toISOString(),
      };

      // Add the new example to the array
      db.data?.examples.push(newExample);

      // Write changes to the JSON file
      await db.write();

      res.status(201).json(newExample);
      return;
    } else {
      // Method Not Allowed for other HTTP methods
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