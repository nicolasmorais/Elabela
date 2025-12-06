import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';

export async function GET() {
  try {
    const db = await getDb();
    const content = db.data.approvalPageContent;
    return NextResponse.json(content);
  } catch (error) {
    console.error('Failed to get approval page content:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const newContent = await req.json();
    if (!newContent) {
      return NextResponse.json({ message: 'Content is required' }, { status: 400 });
    }

    const db = await getDb();
    db.data.approvalPageContent = newContent;
    await db.write();

    return NextResponse.json({ message: 'Content updated successfully', content: db.data.approvalPageContent });
  } catch (error) {
    console.error('Failed to update approval page content:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}