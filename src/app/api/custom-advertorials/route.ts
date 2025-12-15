import { NextResponse, NextRequest } from 'next/server';
import { getDb } from '@/lib/database';
import { CustomAdvertorial } from '@/lib/advertorial-types';
import { v4 as uuidv4 } from 'uuid';
import { Client } from 'pg';

// GET: Fetch all custom advertorials
export async function GET(): Promise<NextResponse> {
  try {
    const client: Client = await getDb();
    
    // Buscar da tabela custom_advertorials
    const result = await client.query('SELECT id, name, data FROM custom_advertorials ORDER BY name');
    
    // Transformar os dados para o formato esperado
    const advertorials: CustomAdvertorial[] = result.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      ...row.data
    }));
    
    return NextResponse.json(advertorials);
  } catch (error) {
    console.error('Failed to get custom advertorials:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

// POST: Create or Update a custom advertorial
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const payload: CustomAdvertorial = await req.json();
    const client: Client = await getDb();

    if (!payload.name || !payload.header || !payload.blocks) {
      return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
    }

    if (payload.id) {
      // Update existing advertorial
      const { id, ...data } = payload;
      await client.query(
        'UPDATE custom_advertorials SET name = $1, data = $2 WHERE id = $3',
        [payload.name, JSON.stringify(data), payload.id]
      );
      
      return NextResponse.json({ message: 'Advertorial atualizado com sucesso', advertorial: payload });
    } else {
      // Create new advertorial
      const newId = uuidv4();
      const { id, ...data } = payload;
      
      await client.query(
        'INSERT INTO custom_advertorials (id, name, data) VALUES ($1, $2, $3)',
        [newId, payload.name, JSON.stringify(data)]
      );
      
      const newAdvertorial = { ...payload, id: newId };
      return NextResponse.json({ message: 'Advertorial criado com sucesso', advertorial: newAdvertorial });
    }
  } catch (error) {
    console.error('Failed to save custom advertorial:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}