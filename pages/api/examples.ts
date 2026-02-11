import type { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '@/lib/database';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  try {
    const client = await getDb();

    // No Edge Runtime, usamos o objeto Request nativo em vez de NextApiRequest
    if (req.method === 'GET') {
      const result = await client.query('SELECT id, name, created_at as "createdAt" FROM examples ORDER BY created_at DESC');
      return new Response(JSON.stringify(result.rows), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else if (req.method === 'POST') {
      const body = await req.json() as { name: string };
      if (!body.name) {
        return new Response(JSON.stringify({ message: 'O nome é obrigatório' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const newId = crypto.randomUUID();
      const createdAt = new Date().toISOString();

      await client.query(
        'INSERT INTO examples (id, name, created_at) VALUES ($1, $2, $3)',
        [newId, body.name, createdAt]
      );

      return new Response(JSON.stringify({ id: newId, name: body.name, createdAt }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(`Método ${req.method} não permitido`, { status: 405 });
    }
  } catch (error: any) {
    console.error('Database operation failed:', error.message || error);
    return new Response(JSON.stringify({ message: 'Erro interno do servidor', error: error.message || 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}