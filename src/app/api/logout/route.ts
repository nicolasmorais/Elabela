import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const runtime = 'edge';

const SESSION_COOKIE_NAME = 'auth_session';

export async function POST() {
  // Remove o cookie de sessão
  (await cookies()).delete(SESSION_COOKIE_NAME);
  return NextResponse.json({ success: true });
}