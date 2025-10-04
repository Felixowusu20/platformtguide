import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { chatId, message } = await request.json();

  // Log the chat message for the WASCCE page
  console.log(`WASSCE Chat ID: ${chatId}, Message: ${message}`);

  return NextResponse.json({ status: 'success', message: 'Chat logged' });
}
