import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { Client } from 'pg';

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  try {
    const { slug } = await context.params;
    const client: Client = await getDb();
    
    // Busca as configurações na tabela settings usando a chave composta pageConfig_{slug}
    const result = await client.query('SELECT value FROM settings WHERE key = $1', [`pageConfig_${slug}`]);
    
    if (result.rows.length === 0) {
      // Retorna valores padrão se não existir configuração no banco
      return NextResponse.json({ 
        priceCard: 'R$ 187,00', 
        pricePix: '147,00', 
        installmentText: 'Ou 12x de R$ 14,96',
        buttonText: 'Comprar agora',
        checkoutUrl: '',
        backRedirectUrl: ''
      });
    }
    
    return NextResponse.json(result.rows[0].value);
  } catch (error) {
    console.error('API Error (GET page-settings):', error);
    return NextResponse.json({ message: 'Erro ao buscar configurações' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  context: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  try {
    const { slug } = await context.params;
    const config = await request.json();
    const client: Client = await getDb();
    
    // Insere ou atualiza as configurações da página
    await client.query(
      'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
      [`pageConfig_${slug}`, JSON.stringify(config)]
    );
    
    return NextResponse.json({ message: 'Configurações salvas com sucesso!' });
  } catch (error) {
    console.error('API Error (POST page-settings):', error);
    return NextResponse.json({ message: 'Erro ao salvar configurações' }, { status: 500 });
  }
}