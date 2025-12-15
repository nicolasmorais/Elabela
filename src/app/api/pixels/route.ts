import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { GlobalPixelConfig } from '@/lib/advertorial-types';
import { Client } from 'pg';

// GET: Fetch pixel configuration
export async function GET() {
  try {
    const client: Client = await getDb();
    
    // Buscar da tabela settings
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['pixelConfig']);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'Configuração não encontrada' }, { status: 404 });
    }
    
    return NextResponse.json(result.rows[0].value);
  } catch (error) {
    console.error('Failed to get pixel config:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}

// POST: Update pixel configuration
export async function POST(req: Request) {
  try {
    const newConfig: GlobalPixelConfig = await req.json();
    
    if (!newConfig) {
      return NextResponse.json({ message: 'Configuração é obrigatória' }, { status: 400 });
    }

    const client: Client = await getDb();
    
    // Atualizar na tabela settings
    await client.query(
      'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
      ['pixelConfig', JSON.stringify(newConfig)]
    );
    
    return NextResponse.json({ message: 'Configuração de Pixel atualizada com sucesso', config: newConfig });
  } catch (error) {
    console.error('Failed to update pixel config:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}