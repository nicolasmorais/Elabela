import { NextResponse, NextRequest } from 'next/server';
import { getDb } from '@/lib/database';
import { CustomAdvertorial } from '@/lib/advertorial-types';
import { validate as isUUID } from 'uuid';

export const runtime = 'edge';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;

    if (!isUUID(id)) {
      return NextResponse.json({ message: 'ID de advertorial inválido.' }, { status: 400 });
    }

    const client = await getDb();
    const result = await client.query('SELECT id, name, data FROM custom_advertorials WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'Advertorial não encontrado' }, { status: 404 });
    }
    
    const row = result.rows[0];
    const advertorial: CustomAdvertorial = {
      id: row.id,
      name: row.name,
      ...JSON.parse(row.data)
    };
    
    return NextResponse.json(advertorial);
  } catch (error) {
    console.error('Failed to get custom advertorial:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params;

    if (!isUUID(id)) {
      return NextResponse.json({ message: 'ID de advertorial inválido.' }, { status: 400 });
    }

    const client = await getDb();
    const existingAdvertorial = await client.query('SELECT id FROM custom_advertorials WHERE id = $1', [id]);
    if (existingAdvertorial.rows.length === 0) {
      return NextResponse.json({ message: 'Advertorial não encontrado' }, { status: 404 });
    }
    
    await client.query('DELETE FROM custom_advertorials WHERE id = $1', [id]);
    await client.query('DELETE FROM routes WHERE content_id = $1', [id]);
    
    return NextResponse.json({ message: 'Advertorial excluído com sucesso' });
  } catch (error) {
    console.error('Failed to delete custom advertorial:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}