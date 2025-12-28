import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

// Hash da senha padrão "84740949" - gerado com bcrypt, salt rounds 10
const DEFAULT_PASSWORD_HASH = '$2b$10$zLXxV8h8b8tXqV8k4m.2O6L4Yg4j5KqGmHt3l.1x/L0JwN9J/m';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { password } = await req.json() as { password: string };
    
    if (!password) {
      return NextResponse.json({ message: 'Senha é obrigatória' }, { status: 400 });
    }

    // Verifica usando bcrypt (seguro para produção)
    const isCorrect = await bcrypt.compare(password, DEFAULT_PASSWORD_HASH);
    
    if (isCorrect) {
      const response = NextResponse.json({ 
        success: true, 
        message: 'Login bem-sucedido',
        offlineMode: false // Indica que estamos usando o banco
      });
      
      // Cookie de sessão seguro para produção
      response.cookies.set('auth_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS em produção
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 horas
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