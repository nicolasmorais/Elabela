import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { Client } from 'pg';

export const runtime = 'edge';

const SESSION_COOKIE_NAME = 'auth_session';
const SESSION_EXPIRY_SECONDS = 60 * 60 * 24;

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { password } = await req.json() as { password: string };
    
    if (!password) {
      return NextResponse.json({ message: 'Senha é obrigatória' }, { status: 400 });
    }

    const client: Client = await getDb();
    let storedHash = '';
    
    const result = await client.query('SELECT value FROM settings WHERE key = $1', ['auth']);
    
    if (result.rows.length > 0) {
      const authData = result.rows[0].value;
      if (authData && typeof authData === 'object') {
        storedHash = authData.passwordHash || '';
      }
    }

    if (!storedHash) {
      const defaultPassword = '84740949';
      const newHash = await bcrypt.hash(defaultPassword, 10);
      
      await client.query(
        'INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = $2',
        ['auth', JSON.stringify({ passwordHash: newHash })]
      );
      
      storedHash = newHash;
    }

    const isMatch = await bcrypt.compare(password, storedHash);
    
    if (!isMatch) {
      return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, 'true', {
      httpOnly: true,
      secure: true,
      maxAge: SESSION_EXPIRY_SECONDS,
      path: '/',
    });

    return NextResponse.json({ success: true, message: 'Login bem-sucedido' });

  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}