// app/api/payment/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json(); // Or `await request.text()` if raw body is required
  console.log('Payment webhook received:', body);

  // Handle based on provider
  if (body.status === 'success' || body.event === 'charge.success') {
    // Save transaction, update ticket status, etc.
  }

  return NextResponse.json({ received: true });
}
