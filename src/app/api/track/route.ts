import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { PageViewEvent } from '@/lib/advertorial-types';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  try {
    const { contentId, path } = await req.json();
    
    if (!contentId || !path) {
      return NextResponse.json({ message: 'contentId e path são obrigatórios' }, { status: 400 });
    }

    const db = await getDb();
    
    const newEvent: PageViewEvent = {
      id: uuidv4(),
      contentId,
      path,
      timestamp: new Date().toISOString(),
    };

    db.data.pageViews.push(newEvent);
    await db.write();

    return NextResponse.json({ success: true, message: 'Evento registrado' }, { status: 201 });
  } catch (error) {
    console.error('Failed to track page view:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}