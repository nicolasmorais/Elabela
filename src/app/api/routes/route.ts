import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export async function GET(): Promise<NextResponse> {
  try {
    const client = await getDb();
    const result = await client.query('SELECT path, name, content_id as "contentId" FROM routes ORDER BY path');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to get routes:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { path, contentId, name } = await req.json() as { path: string, contentId: string, name?: string };
    if (!path || !contentId) {
      return NextResponse.json({ message: 'Os campos path e contentId são obrigatórios' }, { status: 400 });
    }

    const client = await getDb();
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    const routeName = name || `Rota Personalizada: ${normalizedPath}`;
    
    await client.query(
      'INSERT OR REPLACE INTO routes (path, name, content_id) VALUES ($1, $2, $3)',
      [normalizedPath, routeName, contentId]
    );
    
    return NextResponse.json({ 
        message: 'Rota salva com sucesso', 
        route: { path: normalizedPath, name: routeName, contentId } 
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to save route:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  try {
    const { path } = await req.json() as { path: string };
    if (!path) {
      return NextResponse.json({ message: 'O campo path é obrigatório' }, { status: 400 });
    }

    const client = await getDb();
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    await client.query('DELETE FROM routes WHERE path = $1', [normalizedPath]);
    return NextResponse.json({ message: 'Rota excluída com sucesso' });
  } catch (error) {
    console.error('Failed to delete route:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}