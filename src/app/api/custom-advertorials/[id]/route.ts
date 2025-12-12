import { NextResponse, NextRequest } from 'next/server';
import { getDb } from '@/lib/database';
import { CustomAdvertorial } from '@/lib/advertorial-types';

interface RouteContext {
  params: { id: string };
}

// GET: Fetch a single custom advertorial by ID
export async function GET(request: NextRequest, context: any) { // Usando 'any' aqui
  try {
    const { params } = context;
    const db = await getDb();
    const advertorial = (await db).data.customAdvertorials.find(a => a.id === params.id);

    if (!advertorial) {
      return NextResponse.json({ message: 'Advertorial não encontrado' }, { status: 404 });
    }

    return NextResponse.json(advertorial);
  } catch (error) {
    console.error('Failed to get custom advertorial:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

// DELETE: Delete a custom advertorial by ID
export async function DELETE(request: NextRequest, context: any) { // Usando 'any' aqui
  try {
    const { params } = context;
    const db = await getDb();
    
    const initialLength = (await db).data.customAdvertorials.length;
    
    (await db).data.customAdvertorials = (await db).data.customAdvertorials.filter(a => a.id !== params.id);

    if ((await db).data.customAdvertorials.length === initialLength) {
      return NextResponse.json({ message: 'Advertorial não encontrado' }, { status: 404 });
    }

    // Also remove any route mapping pointing to this content ID
    (await db).data.routes = (await db).data.routes.filter(r => r.contentId !== params.id);

    await (await db).write();

    return NextResponse.json({ message: 'Advertorial excluído com sucesso' });
  } catch (error) {
    console.error('Failed to delete custom advertorial:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}