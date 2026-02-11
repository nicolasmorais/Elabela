import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export const runtime = 'edge';

export async function GET() {
  try {
    const client = await getDb();
    
    const tableCheck = await client.query(`
      SELECT name FROM sqlite_master WHERE type='table' AND name='custom_advertorials'
    `);
    
    const tableExists = tableCheck.rows.length > 0;
    
    let advertorialCount = 0;
    let advertorialSample: any[] = [];
    
    if (tableExists) {
      const countResult = await client.query('SELECT COUNT(*) as count FROM custom_advertorials');
      advertorialCount = Number(countResult.rows[0].count);
      
      if (advertorialCount > 0) {
        const sampleResult = await client.query('SELECT id, name FROM custom_advertorials LIMIT 5');
        advertorialSample = sampleResult.rows;
      }
    }
    
    const allTablesResult = await client.query(`SELECT name FROM sqlite_master WHERE type='table'`);
    const allTables = allTablesResult.rows.map((row: any) => row.name);
    
    return NextResponse.json({
      success: true,
      tableExists,
      advertorialCount,
      advertorialSample,
      allTables,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}