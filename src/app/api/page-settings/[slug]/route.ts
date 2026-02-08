import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { Client } from 'pg';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  const { slug } = await params;
  try {
    const client: Client = await getDb();
    const result = await client.query('SELECT value FROM settings WHERE key = $1', [`pageConfig_${slug}`]);
    
    if (result.rows.length === 0) {
      // Retorna valores padrão se não existir no banco (ATUALIZADO PARA 147)
      return NextResponse.json({ 
        priceCard: 'R$ 187,00', 
        pricePix: '147,00', 
        installmentText: '12x de R$ 14,96',
        checkoutUrl: '#' 
      });
    }
    
    return NextResponse.json(result.rows[0].value);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar' }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  const { slug } = await params;
  try {
    const config = await req.json();
    const client: Client = await getDb();
    
    await client.query(
      'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
      [`pageConfig_${slug}`, JSON.stringify(config)]
    );
    
    return NextResponse.json({ message: 'Configurações salvas!' });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao salvar' }, { status: 500 });
  }
}