import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { PageViewEvent } from '@/lib/advertorial-types';
import { Client } from 'pg';

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');

    const client: Client = await getDb();
    
    // Buscar da tabela page_views
    let query = 'SELECT id, content_id as "contentId", path, timestamp, country, region_name as "regionName" FROM page_views';
    const params: any[] = [];
    
    if (startDateParam || endDateParam) {
      query += ' WHERE';
      const conditions: string[] = [];
      
      if (startDateParam) {
        conditions.push('timestamp >= $' + (params.length + 1));
        params.push(startDateParam);
      }
      
      if (endDateParam) {
        conditions.push('timestamp < $' + (params.length + 1));
        const nextDay = new Date(endDateParam);
        nextDay.setDate(nextDay.getDate() + 1);
        params.push(nextDay.toISOString());
      }
      
      query += ' ' + conditions.join(' AND ');
    }
    
    query += ' ORDER BY timestamp DESC';
    
    const result = await client.query(query, params);
    return NextResponse.json(result.rows);
    
  } catch (error) {
    console.error('Failed to fetch page views:', error);
    return NextResponse.json({ message: 'Erro Interno do Servidor' }, { status: 500 });
  }
}