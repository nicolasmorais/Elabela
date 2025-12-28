import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// Senha padrão já hasheada: 84740949
const DEFAULT_PASSWORD_HASH = '$2a$10$N.zq.r3/k3GqGZd1J7A2jOhYv5i8w6J2J.LK/Pxv9Jz8Q/8q.G.w.K';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { password } = await req.json() as { password: string };
    
    if (!password) {
      return NextResponse.json({ message: 'Senha é obrigatória' }, { status: 400 });
    }

    // Aceita apenas a senha padrão, independente do status do banco
    const isDefaultCorrect = await bcrypt.compare(password, DEFAULT_PASSWORD_HASH);
    
    if (isDefaultCorrect) {
      const response = NextResponse.json({ 
        success: true, 
        message: 'Login bem-sucedido',
        offlineMode: true 
      });
      
      response.cookies.set('auth_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
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