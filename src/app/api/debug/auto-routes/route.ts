import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export const runtime = 'edge';

export async function GET() {
  try {
    const client = await getDb();
    
    // SQLite check for table existence
    const tableCheck = await client.query(`
      SELECT name FROM sqlite_master WHERE type='table' AND name='settings'
    `);
    
    const tableExists = tableCheck.rows.length > 0;
    
    let autoRoutesData: any = null;
    let allSettings: any[] = [];
    
    if (tableExists) {
      const autoRoutesResult = await client.query('SELECT value FROM settings WHERE key = $1', ['autoRoutes']);
      if (autoRoutesResult.rows.length > 0) {
        autoRoutesData = JSON.parse(autoRoutesResult.rows[0].value);
      }
      
      const allSettingsResult = await client.query('SELECT key, value FROM settings ORDER BY key');
      allSettings = allSettingsResult.rows.map((row: any) => ({
          key: row.key,
          value: JSON.parse(row.value)
      }));
    }
    
    return NextResponse.json({
      success: true,
      tableExists,
      autoRoutesData,
      allSettings,
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