import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { ApprovalPageContent } from '@/lib/advertorial-types';

export async function GET(): Promise<NextResponse> {
  try {
    const client = await getDb();
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['approvalPageContent']);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'Conteúdo não encontrado' }, { status: 404 });
    }
    
    return NextResponse.json(JSON.parse(result.rows[0].value));
  } catch (error) {
    console.error('Failed to get approval page content:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const newContent: ApprovalPageContent = await req.json();
    if (!newContent) {
      return NextResponse.json({ message: 'O conteúdo é obrigatório' }, { status: 400 });
    }

    const client = await getDb();
    
    // In D1/SQLite, we use INSERT OR REPLACE for UPSERT behavior
    await client.query(
      'INSERT OR REPLACE INTO settings (key, value) VALUES ($1, $2)',
      ['approvalPageContent', JSON.stringify(newContent)]
    );
    
    return NextResponse.json({ message: 'Conteúdo atualizado com sucesso', content: newContent });
  } catch (error) {
    console.error('Failed to update approval page content:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}