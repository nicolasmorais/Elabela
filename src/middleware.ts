import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SESSION_COOKIE_NAME = 'auth_session';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get(SESSION_COOKIE_NAME);
  const isAuthenticated = authCookie?.value === 'true';
  const pathname = request.nextUrl.pathname;

  // 1. Proteger rotas do dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!isAuthenticated) {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  // 2. Impedir login se já estiver logado
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};