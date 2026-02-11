import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { v4 as uuidv4 } from 'uuid';

export const runtime = 'edge';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { contentId, path } = await req.json();

    if (!contentId || !path) {
      return NextResponse.json({ message: 'contentId e path são obrigatórios' }, { status: 400 });
    }

    const client = await getDb();
    const id = uuidv4();
    const timestamp = new Date().toISOString();

    await client.query(
      `INSERT INTO page_views (id, content_id, path, timestamp, country, region_name)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, contentId, path, timestamp, 'Brasil', 'GO']
    );
    
    return NextResponse.json({ success: true, message: 'Page view registrada' }, { status: 201 });
  } catch (error) {
    console.error('Failed to track page view:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}