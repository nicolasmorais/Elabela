import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { Client } from 'pg';

export async function GET(): Promise<NextResponse> {
  try {
    const client: Client = await getDb();
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['backRedirectConfig']);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ url: '', enabled: false });
    }
    
    return NextResponse.json(result.rows[0].value);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar configurações' }, { status: 500 });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const config = await req.json();
    const client: Client = await getDb();
    
    await client.query(
      'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
      ['backRedirectConfig', JSON.stringify(config)]
    );
    
    return NextResponse.json({ message: 'Configuração de Back Redirect salva!' });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao salvar' }, { status: 500 });
  }
}