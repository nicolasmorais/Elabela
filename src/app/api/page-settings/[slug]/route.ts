import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  const { slug } = await params;
  try {
    const client = await getDb();
    const result = await client.query('SELECT value FROM settings WHERE key = $1', [`pageConfig_${slug}`]);
    
    if (result.rows.length === 0) {
      // Retorna valores padrão se não existir no banco
      return NextResponse.json({ 
        priceCard: 'R$ 157,00', 
        pricePix: '97,00', 
        checkoutUrl: '#' 
      });
    }
    
    return NextResponse.json(JSON.parse(result.rows[0].value));
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
    const client = await getDb();
    
    await client.query(
      'INSERT OR REPLACE INTO settings (key, value) VALUES ($1, $2)',
      [`pageConfig_${slug}`, JSON.stringify(config)]
    );
    
    return NextResponse.json({ message: 'Configurações salvas!' });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao salvar' }, { status: 500 });
  }
}