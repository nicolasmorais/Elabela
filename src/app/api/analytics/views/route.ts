import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export async function GET() {
  try {
    const db = await getDb();
    // Retorna todos os eventos de visualização
    const pageViews = db.data.pageViews || [];
    return NextResponse.json(pageViews);
  } catch (error) {
    console.error('Failed to fetch page views:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}