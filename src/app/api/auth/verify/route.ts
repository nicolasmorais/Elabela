import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const runtime = 'edge';

const DEFAULT_PASSWORD = '84740949';
const USE_PLAIN_PASSWORD = true; 

const DEFAULT_PASSWORD_HASH = '$2a$10$k2z3Z5M3K7W8N0V3bV/CYr1v5c0N9x2l3K8n5oW7uR4tE3qFyD2e';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { password } = await req.json() as { password: string };
    
    if (!password) {
      return NextResponse.json({ message: 'Senha é obrigatória' }, { status: 400 });
    }

    let isCorrect = false;
    if (USE_PLAIN_PASSWORD) {
      isCorrect = password === DEFAULT_PASSWORD;
    } else {
      isCorrect = await bcrypt.compare(password, DEFAULT_PASSWORD_HASH);
    }
    
    if (isCorrect) {
      const response = NextResponse.json({ 
        success: true, 
        message: 'Login bem-sucedido',
        offlineMode: false 
      });
      
      response.cookies.set('auth_session', 'true', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 });

  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}