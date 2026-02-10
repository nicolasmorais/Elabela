import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

interface AutoRouteMapping {
    [slug: string]: string;
}

export async function GET(): Promise<NextResponse> {
    try {
        const client = await getDb();
        const result = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
        
        if (result.rows.length === 0) {
            return NextResponse.json({});
        }

        const routes = JSON.parse(result.rows[0].value);
        return NextResponse.json(routes);
    } catch (error) {
        console.error('Failed to get auto routes:', error);
        return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
    }
}

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const { advertorialId, slug } = await req.json() as { advertorialId: string, slug?: string };

        if (!advertorialId) {
            return NextResponse.json({ message: 'O ID do advertorial é obrigatório' }, { status: 400 });
        }

        const client = await getDb();

        const advResult = await client.query('SELECT id, name FROM custom_advertorials WHERE id = $1', [advertorialId]);
        if (advResult.rows.length === 0) {
            return NextResponse.json({ message: 'Advertorial não encontrado' }, { status: 404 });
        }

        const currentRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
        let currentRoutes: AutoRouteMapping = {};
        if (currentRoutesResult.rows.length > 0) {
            currentRoutes = JSON.parse(currentRoutesResult.rows[0].value);
        }

        const finalSlug = slug && slug.trim() ? slug.trim() : advertorialId;
        const url = `/${finalSlug}`;

        if (currentRoutes[finalSlug] && currentRoutes[finalSlug] !== advertorialId) {
            return NextResponse.json({ message: 'Esta URL personalizada já está em uso por outro advertorial.' }, { status: 409 });
        }

        currentRoutes[finalSlug] = advertorialId;

        await client.query(
            'INSERT OR REPLACE INTO settings (key, value) VALUES ($1, $2)',
            ['autoRoutes', JSON.stringify(currentRoutes)]
        );

        return NextResponse.json({ 
            message: 'Rota gerada com sucesso', 
            slug: finalSlug,
            url: url,
            advertorialId: advertorialId
        });
    } catch (error) {
        console.error('Failed to generate auto route:', error);
        return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
    }
}

export async function DELETE(req: Request): Promise<NextResponse> {
    try {
        const { slug } = await req.json() as { slug: string };

        if (!slug) {
            return NextResponse.json({ message: 'O slug é obrigatório' }, { status: 400 });
        }

        const client = await getDb();

        const currentRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
        if (currentRoutesResult.rows.length === 0) {
            return NextResponse.json({ message: 'Nenhuma rota automática encontrada' }, { status: 404 });
        }

        const currentRoutes: AutoRouteMapping = JSON.parse(currentRoutesResult.rows[0].value);
        
        if (!currentRoutes[slug]) {
            return NextResponse.json({ message: 'Rota não encontrada' }, { status: 404 });
        }

        delete currentRoutes[slug];

        await client.query(
            'INSERT OR REPLACE INTO settings (key, value) VALUES ($1, $2)',
            ['autoRoutes', JSON.stringify(currentRoutes)]
        );

        return NextResponse.json({ 
            message: 'Rota excluída com sucesso', 
            slug: slug
        });
    } catch (error) {
        console.error('Failed to delete auto route:', error);
        return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
    }
}