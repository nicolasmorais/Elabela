import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { RouteMapping } from '@/lib/advertorial-types';

export async function GET(): Promise<NextResponse> {
  try {
    const db = await getDb();
    const routes: RouteMapping[] = db.data.routes;
    return NextResponse.json(routes);
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

    const db = await getDb();
    const routeIndex = db.data.routes.findIndex((r: RouteMapping) => r.path === path);

    if (routeIndex !== -1) {
      // Rota existente: Atualiza contentId (e nome, se fornecido)
      db.data.routes[routeIndex].contentId = contentId;
      if (name) {
        db.data.routes[routeIndex].name = name;
      }
      await db.write();
      return NextResponse.json({ message: 'Rota atualizada com sucesso', route: db.data.routes[routeIndex] });
    } else {
      // Nova rota: Cria uma nova entrada
      const newRoute: RouteMapping = {
        path: path.startsWith('/') ? path : `/${path}`, // Garante que o path comece com /
        contentId,
        name: name || `Rota Personalizada: ${path}`,
      };
      db.data.routes.push(newRoute);
      await db.write();
      return NextResponse.json({ message: 'Rota criada com sucesso', route: newRoute }, { status: 201 });
    }
  } catch (error) {
    console.error('Failed to save route:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}